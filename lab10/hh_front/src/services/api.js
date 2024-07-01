const BASE_URL = 'http://127.0.0.1:8000/api';

const getAuthHeaders = () => {
  const token = localStorage.getItem('access_token');
  return token ? { Authorization: `Bearer ${token}` } : {};
};

const refreshToken = async () => {
  const refresh_token = localStorage.getItem('refresh_token');
  const response = await fetch(`${BASE_URL}/token/refresh/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ refresh: refresh_token }),
  });
  if (!response.ok) {
    throw new Error('Token refresh failed');
  }
  const tokenData = await response.json();
  localStorage.setItem('access_token', tokenData.access);
  return tokenData.access;
};

const fetchWithAuth = async (url, options = {}) => {
  const headers = { ...options.headers, ...getAuthHeaders() };
  const response = await fetch(url, { ...options, headers });
  if (response.status === 401) {
    throw new Error('Unauthorized');
  }
  return response;
};

export const getCompanies = async () => {
  const response = await fetchWithAuth(`${BASE_URL}/companies/`);
  return await response.json();
};

export const getCompany = async (id) => {
  const response = await fetchWithAuth(`${BASE_URL}/companies/${id}/`);
  return await response.json();
};

export const getCompanyVacancies = async (companyId) => {
  const response = await fetchWithAuth(`${BASE_URL}/companies/${companyId}/vacancies/`);
  return await response.json();
};

export const getVacancies = async () => {
  const response = await fetchWithAuth(`${BASE_URL}/vacancies/`);
  return await response.json();
};

export const getTopTenVacancies = async () => {
  const response = await fetchWithAuth(`${BASE_URL}/vacancies/top_ten/`);
  return await response.json();
};

export const getVacancy = async (id) => {
  const response = await fetchWithAuth(`${BASE_URL}/vacancies/${id}/`);
  return await response.json();
};

export const login = async (credentials) => {
  const response = await fetch(`${BASE_URL}/token/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });
  if (!response.ok) {
    throw new Error('Login failed');
  }
  return await response.json();
};
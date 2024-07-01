import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCompanies } from '../services/api';

const CompanyDetail = () => {
  const { id } = useParams();
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const data = await getCompanies(id);
        setCompany(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCompany();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>{company.name}</h1>
      <p>{company.description}</p>
      <p>{company.city}</p>
      <p>{company.address}</p>
    </div>
  );
};

export default CompanyDetail;

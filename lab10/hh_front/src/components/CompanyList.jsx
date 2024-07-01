import React, { useEffect, useState } from 'react';
import { getCompanies } from '../services/api';
import { useNavigate } from 'react-router-dom';

const CompanyList = () => {
  const [companies, setCompanies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getCompanies().then(setCompanies);
  }, []);

  const handleClick = (id) => {
    navigate(`/companies/${id}`);
  };

  return (
    <div>
      <h1>Companies</h1>
      <ul>
        {Object.values(companies).map((company) => (
          <li key={company.id} onClick={() => handleClick(company.id)}>
            {company?.name ? company?.name : "nnnnnnnnn" }
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyList;

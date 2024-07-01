import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getVacancy } from '../services/api';

const VacancyDetail = () => {
  const { id } = useParams();
  const [vacancy, setVacancy] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVacancy = async () => {
      try {
        const data = await getVacancy(id);
        setVacancy(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVacancy();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>{vacancy.name}</h1>
      <p>{vacancy.description}</p>
      <p>Salary: {vacancy.salary}</p>
      <p>Company ID: {vacancy.company}</p>
    </div>
  );
};

export default VacancyDetail;

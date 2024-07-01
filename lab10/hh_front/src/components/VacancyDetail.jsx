import React, { useState, useEffect } from 'react';
import { getVacancy } from '../services/api';
import { useParams } from 'react-router-dom';

const VacancyDetail = () => {
  const { id } = useParams();
  const [vacancy, setVacancy] = useState(null);

  useEffect(() => {
    async function fetchVacancy() {
      const data = await getVacancy(id);
      setVacancy(data);
    }
    fetchVacancy();
  }, [id]);

  return (
    <div>
      <h2>{vacancy?.name ? vacancy?.name :"bbbbbbb"} </h2>
      /<p>{vacancy?.description}</p>
      <p>Salary: ${vacancy?.salary}</p>
      <p>Company: {vacancy?.company?.name}</p>  
    </div>
  );
};

export default VacancyDetail;

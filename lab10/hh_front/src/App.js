import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CompanyList from './components/CompanyList';
import CompanyDetail from './components/CompanyDetail';
import Login from './components/Login';
import VacancyList from './components/VacancyList';
import VacancyDetail from './components/VacancyDetail';


function App() {
  return (
        <BrowserRouter>
            <Routes>

                <Route path="/login" element={<Login/>} />
                <Route path="/companies/:id" element={<CompanyDetail/>} />
                <Route path="/" element={<Login/>} />
                <Route path="/companies" element={<CompanyList/>} />
                <Route path="/vacancies/:id" element={<VacancyDetail/>} />
                <Route path="/vacancies" element={<VacancyList/>} />
            </Routes>
        </BrowserRouter>
  );
}



export default App;

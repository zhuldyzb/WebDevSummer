import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/home';
import About from './components/about/about';
import Albums from './components/albums/albums';
import Details from './components/details/details'
import Photos from './components/photos/photos';


function App() {
  return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path= "/" element = {<Home/>} />
                <Route path="/albums" element={<Albums />} />
                <Route path="/albums/:id/details" element={<Details />} />
                <Route path="/albums/:id/photos" element={<Photos />} />


            </Routes>
        </BrowserRouter>
  );
}



export default App;

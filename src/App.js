import React from 'react';
import './App.css';
import {  BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home'
import Apod from './components/Apod'
import MarsPhoto from './components/MarsPhoto'
import Planets from './components/Planets'



function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} exact />
        <Route path='Apod' element={<Apod/>} />
        <Route path='MarsPhoto' element={<MarsPhoto/>} />
        <Route path='Planets' element={<Planets/>} />
      </Routes>
    </BrowserRouter>

    

  );
}

export default App;

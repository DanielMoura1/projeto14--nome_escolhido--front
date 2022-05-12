import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import './App.css';
import "./style.css";
import Tela4 from "./Tela4";
import Tela5 from "./Tela5";
import Tela6 from "./Tela6";
export default  function App() {
  
  return (
    <div >
      <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Tela4 />} /> 
        <Route path="/5" element={<Tela5 />} />
        <Route path="/6" element={<Tela6 />} />  
      </Routes>
      </BrowserRouter>
    </div>
   
  );
  
}
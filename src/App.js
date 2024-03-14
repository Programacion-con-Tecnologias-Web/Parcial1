import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Home from './componentes/Home';
import Perfil from './componentes/Perfil';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Perfil" element={<Perfil />} />
      </Routes>
    </Router>
  );
}

export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Reservas from '../pages/Reservas';
import Home from '../pages/Home';

export default function RoustesApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/reservas" element={<Reservas />} />
    </Routes>
  );
}

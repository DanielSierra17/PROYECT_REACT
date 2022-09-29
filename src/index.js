import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Inicio from './pages/index/Index';
import Login from './pages/login/Login';
// import Dashboard from './pages/dashboard/Dashboard';
import Registrar from './pages/registrar/Registrar';
import Errores from './pages/error_404/Error_404';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Inicio />} />
      <Route path='/login' element={<Login />} />
      {/* <Route path='/dashboard' element={<Dashboard />} /> */}
      <Route path='/registrar' element={<Registrar />} />
      <Route path='/errores' element={<Errores />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

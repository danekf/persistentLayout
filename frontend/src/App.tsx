import React from 'react';
import logo from './logo.svg';
import './App.css';

import SelectionPage from './Pages/SelectionPage/SelectionPage';
import {Route, Routes, Navigate, } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        {/* Regular Routes */}
        <Route path='/layout/:activeLayout' element={<SelectionPage />} />
        <Route path='/add' element={<SelectionPage />} />


        {/* Redirects */}
        <Route path='/' element={<Navigate to='/layout/home' />} />
        <Route path='*' element={
          <div className='error'>Page not found</div>
        }/>


      </Routes>

    </div>
  );
}

export default App;

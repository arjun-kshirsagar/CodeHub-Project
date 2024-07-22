import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Forget from './pages/Forget';
import Reset from './pages/Reset';
import Unauthorized from './pages/Unauthorized'; // Ensure this is correctly imported

import './App.css';

function App() {
  const { loading } = useSelector((state) => state.loader);

  return (
    <div className="App">
      {loading && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forget" element={<Forget />} />
          <Route path="/reset" element={<Reset />} />
          
          <Route
            path="/unauthorized"
            element={<Unauthorized />} // Unauthorized access route
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
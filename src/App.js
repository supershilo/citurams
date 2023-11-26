import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import './App.css';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import AboutUsPage from './pages/AboutUsPage';


const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsPage/>}/>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import './App.css';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import AboutUsPage from './pages/AboutUsPage';
import NewRequest from './pages/NewRequest';
import MyRequest from './pages/MyRequest';
import Dashboard from './pages/Dashboard';
import AdminAddUser from './pages/Admin/AdminAddUser';
import AdminManageFacilities from './pages/Admin/AdminManageFacilities';





const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
        <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsPage/>}/>
          <Route path="/new-request" element={<NewRequest />} />
          <Route path="/my-request" element={<MyRequest/>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-User" element={<AdminAddUser />} />
          <Route path="/manage-facilities" element={<AdminManageFacilities />} />
      
        </Routes>
      </div>
    </Router>
  );
};

export default App;

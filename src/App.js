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
import MyProfile from './pages/MyProfile';
import EditProfile from './pages/EditProfile';
import AdminDashboard from './pages/Admin/AdminDashboard';
import AdminManageRequest from './pages/Admin/AdminManageRequest';
import AdminManageUsers from './pages/Admin/AdminManageUsers';
import AdminManageFacilities from './pages/Admin/AdminManageFacilities';
import AdminCreateUser from './pages/Admin/AdminCreateUser';
import AdminMyProfile from './pages/Admin/AdminMyProfile';
import AdminManageStaff from './pages/Admin/AdminManageStaff';
import AdminManageEquipment from './pages/Admin/AdminManageEquipment';
import { isAuthenticated } from './AuthService';
import Protected from './Protected';


const App = () => {
  const isUserAuthenticated = isAuthenticated();
  return (
   
      <div className="app">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<Protected isUserAuthenticated={isUserAuthenticated}><HomePage/></Protected>} />
          <Route path="/about-us" element={<Protected isUserAuthenticated={isUserAuthenticated}><AboutUsPage /></Protected>} />
    <Route path="/new-request" element={<Protected isUserAuthenticated={isUserAuthenticated}><NewRequest /></Protected>} />
    <Route path="/my-request" element={<Protected isUserAuthenticated={isUserAuthenticated}><MyRequest /></Protected>} />
    <Route path="/dashboard" element={<Protected isUserAuthenticated={isUserAuthenticated}><Dashboard /></Protected>} />
    <Route path="/my-profile" element={<Protected isUserAuthenticated={isUserAuthenticated}><MyProfile /></Protected>} />
    <Route path="/edit-profile" element={<Protected isUserAuthenticated={isUserAuthenticated}><EditProfile /></Protected>} />

    <Route path="/admin-dashboard" element={<Protected isUserAuthenticated={isUserAuthenticated}><AdminDashboard /></Protected>} />
    <Route path="/admin/my-profile" element={<Protected isUserAuthenticated={isUserAuthenticated}><AdminMyProfile /></Protected>} />
    <Route path="/manage-request" element={<Protected isUserAuthenticated={isUserAuthenticated}><AdminManageRequest /></Protected>} />
    <Route path="/manage-users" element={<Protected isUserAuthenticated={isUserAuthenticated}><AdminManageUsers /></Protected>} />
    <Route path="/manage-facilities" element={<Protected isUserAuthenticated={isUserAuthenticated}><AdminManageFacilities /></Protected>} />
    <Route path="/manage-users/create-user" element={<Protected isUserAuthenticated={isUserAuthenticated}><AdminCreateUser /></Protected>} />
    <Route path="/manage-staff" element={<Protected isUserAuthenticated={isUserAuthenticated}><AdminManageStaff /></Protected>} />
    <Route path="/manage-facilities/manage-equipment" element={<Protected isUserAuthenticated={isUserAuthenticated}><AdminManageEquipment /></Protected>} />

        </Routes>
      </div>
 
  );
};

export default App;

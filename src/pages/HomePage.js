import React, { useState, useEffect } from 'react';
import { styled } from '@mui/system';
import {
  AppBar,
  Toolbar,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';
import PostAddOutlinedIcon from '@mui/icons-material/PostAddOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate} from 'react-router-dom';
import { BiSolidDashboard } from "react-icons/bi";
import '../styles/HomePage.css';
import axios from 'axios';

const drawerWidth = 300;

const Root = styled('div')(({ theme }) => ({
  display: 'flex',
}));

const MainAppBar = styled(AppBar)(({ theme }) => ({
  width: `calc(100% - ${drawerWidth}px)`,
  marginLeft: drawerWidth,
}));

const MainDrawer = styled(Drawer)({
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    backgroundColor: '#FC3031', 
    color: 'white',
  },
});

const DrawerPaper = styled('div')({
  width: drawerWidth,
  position: 'fixed',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  backgroundColor: '#FC3031',
  color: 'white',
});

const transitionClass = {
  transition: 'all 0.3s ease', 
};

const HomePage = () => {
  const navigate = useNavigate();
  const [isProfileModalOpen, setProfileModalOpen] = useState(false);
  const storedUserEmail = sessionStorage.getItem('userEmail');
  const [userData, setUserData] = useState(null);


  const handleLogoClick = () => {
    navigate('/home');
  };

  const handleNewRequestClick = () => {
    navigate('/new-request');
  };

  const handleMyRequestClick = () => {
    navigate('/my-request');
  };

  const handleDashboardClick = () => {
    navigate('/dashboard');
  };

  const handleLogoutClick = () => {
    navigate('/');
  };

  const handleMyProfileClick = () => {
    navigate('/my-profile');
  };

  const handleProfileClick = () => {
    setProfileModalOpen(true);
  };

  const handleProfileModalClose = () => {
    setProfileModalOpen(false);
  };

  useEffect(() => {
    // Fetch user data when the component mounts
    const fetchUserData = async () => {
      try {
        // Make a GET request to your user details endpoint
        const response = await axios.get(`http://localhost:8080/user/getUserData?email=${storedUserEmail}`);
        setUserData(response.data); // Assuming the response contains user data
      } catch (error) {
        console.error('Error fetching user data', error);
      }
    };

    if (storedUserEmail) {
      fetchUserData();
    }
  }, [storedUserEmail]);

  
  return (
    <Root>
      {/* App Bar */}
      <MainAppBar position="fixed" sx={{ backgroundColor: 'white', color: 'white' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div>
            <img
              src="/LoginPage/CITURAMS.png"
              alt="Logo"
              onClick={handleLogoClick}
              style={{ height: '55px', cursor: 'pointer' }}
            />
          </div>
        </Toolbar>
      </MainAppBar>
      <Divider />

      {/* Left Drawer (Navigation Drawer) */}
      <MainDrawer variant="permanent" component="nav" position="fixed">
        <DrawerPaper>
          {/* User Profile Section */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px', marginTop: '10px' }}>
            <div onClick={handleMyProfileClick} style={{ cursor: 'pointer' }}>
              <img
                src={userData?.profileImage || "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}
                alt="Profile"
                className="rounded-full ring-4 ring-white"
                style={{ borderRadius: '50%', height: '70px', width: '70px', marginBottom: '10px' }}
              />
            </div>
            {/* Use userData to display user name and email */}
            {userData && (
              <>
                <div className={`text-white font-bold ${userData ? 'fade-in' : 'fade-out'}`}>{userData.fname +' ' +userData.lname}</div>
                <div className={`text-white ${userData ? 'fade-in' : 'fade-out'}`}>{userData.email}</div>
              </>
            )}
          </div>

          <List>
            {/* Add items for the navigation drawer */}
            <ListItem button onClick={handleDashboardClick}>
              <ListItemIcon style={{ color: 'white' }}>
                <BiSolidDashboard />
              </ListItemIcon>
              <ListItemText primary="Dashboard" style={{ fontFamily: "'Poppins', sans-serif" }} />
            </ListItem>
            <ListItem button onClick={handleNewRequestClick}>
              <ListItemIcon style={{ color: 'white' }}>
                <PostAddOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="New Request" style={{ fontFamily: "'Poppins', sans-serif" }} />
            </ListItem>
            <ListItem button onClick={handleMyRequestClick} style={{ marginBottom: '150px' }}>
              <ListItemIcon style={{ color: 'white' }}>
                <ArticleOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="My Request" />
            </ListItem>
            <ListItem button onClick={handleLogoutClick}>
              <ListItemIcon style={{ color: 'white' }}>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          </List>

          {/* Image at the bottom */}
          <div
            style={{
              marginTop: 'auto',
              textAlign: 'left',
              overflow: 'hidden',
            }}
          >
            <img
              src="/LoginPage/wildcat.png"
              alt="wildcat logo"
              style={{
                marginLeft: '-35%',
                width: '120%',
                height: 'auto',
              }}
            />
          </div>
        </DrawerPaper>
      </MainDrawer>

      {/* Main Content */}
      <div className='mt-24 -ml-12'>
        <div className='ml-12'>
          <div className='ml-12'>
            {userData && (
              <>
                <p>Hello {userData.fname},</p>
                <p>Welcome to CIT-U Repair & Assets Management System</p>
              </>
            )}
          </div>
          <div className="p-12">
            <div className="bg-gray-200 p-16 rounded-lg mb-6">
              <h2 className="text-2xl font-bold mb-4 flex justify-center">Request Guide</h2>

              <div className="mt-4">
                <h3 className="text-lg font-bold mb-2">REQUEST STEPS:</h3>

                <div className="mb-4">
                  <p className="font-bold">Step 1: Navigate to New Request Page</p>
                  <p>Click on the New Request button, located on the left side of the screen.</p>
                </div>

                <div className="mb-4">
                  <p className="font-bold">Step 2: Filling out the Request Form</p>
                  <p>On the Request page, you'll find a form to submit your request. Fill in the necessary details in the form.</p>
                </div>

                <div className="mb-4">
                  <p className="font-bold">Step 3: Submitting your Request</p>
                  <p>After completing the form, click the Submit button to send your request.</p>
                </div>

                <div className="mb-4">
                  <p className="font-bold">Step 4: Viewing your Requests</p>
                  <p>After completing the form, you'll be directed to the "My Request" tab. Here, you can view all your submissions, check their status, and see any associated remarks.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Root>
  );
};

export default HomePage;

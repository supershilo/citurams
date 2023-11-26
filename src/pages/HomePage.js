import React from 'react';
import { styled, useTheme } from '@mui/system';
import {
  AppBar,
  Toolbar,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import PostAddOutlinedIcon from '@mui/icons-material/PostAddOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import { Navigate, useNavigate } from 'react-router-dom';
import '../styles/HomePage.css'; 
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
});

const HomePage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const ImageContainer = styled('div')({
    marginTop: 'auto', // Push the image to the bottom
    textAlign: 'center',
    left: '-40%',
  });

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <Root>
      {/* App Bar */}
      <MainAppBar position="fixed" sx={{ backgroundColor: 'white', color: 'white' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'flex-end'  }}>
          <div>
            <img
              src="/LoginPage/CITURAMS.png"
              alt="Logo"
              style={{ height: '55px', cursor: 'pointer' }}
            />
          </div>

        </Toolbar>
      </MainAppBar>
      <Divider/>

      {/* Left Drawer (Navigation Drawer) */}
      <MainDrawer variant="permanent" component="nav" position = 'fixed'>
        <Toolbar />
        <DrawerPaper>
          <List>
            {/* Add items for the navigation drawer */}
            <ListItem button>
              <ListItemIcon style={{color:"white"}}>
              <PostAddOutlinedIcon/>
                </ListItemIcon>
              <ListItemText primary="New Request" style={{fontFamily: "'Poppins', sans-serif"}} />
            </ListItem>
            <ListItem button style={{ marginBottom: '260px' }}>
              <ListItemIcon style={{color:"white"}}>
              <ArticleOutlinedIcon/>
                </ListItemIcon>
              <ListItemText primary="My Request" />
            </ListItem>
            <ListItem button onClick={handleLogoClick} style={{ marginBottom: '50px' }}>
              <ListItemIcon style={{color:"white"}}>
              <LogoutIcon/>
                </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
            
            {/* Add more items as needed */}
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
                src="/LoginPage/wildcat.png" // Replace with the actual path to your image
                alt="Image"
                style={{
                    marginLeft: '-55%', // Push to the left by half of its width
                    width: '120%', // Show only half of the image width
                    height: 'auto', // Maintain the aspect ratio
                }}
                />
            </div>
        </DrawerPaper>
      </MainDrawer>

      {/* Main Content */}
      <main>
        <Toolbar />
        {/* Add your main content here */}
      </main>
    </Root>
  );
};

export default HomePage;

import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';

const LandingPage = () => {
  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black'}}>
        <Toolbar>
          <img src="/LoginPage/CITURAMS.png" alt="Logo" style={{ marginRight: '16px', height: '55px' }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About Us</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ marginTop: '2rem' }}>
        <Typography variant="h3" component="div" gutterBottom style={{ fontFamily: "'Poppins', sans-serif", fontWeight:"bold", marginBottom: '1.5rem', color: '#45474B' }}>
          Repair and Assets <br/>Management System
        </Typography>
        <Typography variant="body1" paragraph style={{ fontFamily: "'Poppins', sans-serif"}}>
        Effortless asset care made simple. Streamline repairs, manage with ease.
        </Typography>
      </Container>
    </div>
  );
};

export default LandingPage;

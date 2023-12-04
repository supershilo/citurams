import React from 'react';
import { Typography, Button, IconButton, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import FeatureSection from '../components/FeatureSection';


const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/login');
  };

  const containerStyle = {
    backgroundImage: 'url("building.png")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100vw', // Set the width and height to viewport width and height
    height: '100vh',
  };

  return (
    <div style={containerStyle}>
      <NavBar />
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          maxHeight: '100h',
          height:'100vh',
          marginLeft: '5%',
          padding: '2rem', 
          
        }}
      >
        <Typography
          variant="h2"
          component="div"
          gutterBottom
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 'bold', color: 'white',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', }}
        >
          Repair and Assets <br />Management System
        </Typography>
        <Typography
          variant="body1"
          paragraph
          style={{ fontFamily: "'Poppins', sans-serif", fontSize: '1.2rem', color: '#FFF6F6', textAlign: 'left' }}
        >
          Effortless asset care made simple. <br/> Streamline repairs, manage with ease.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleGetStartedClick}
          sx={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: '16px',
            width: 'auto',
            height: 'auto',
            backgroundColor: '#FC3031',
            '&:hover': {
              backgroundColor: '#bd262a',
            },
          }}
        >
          Get Started
          <IconButton color="inherit">
            <ArrowCircleRightIcon />
          </IconButton>
        </Button>
      </Container>

      <div style={{
        }}>
          <FeatureSection/>
        </div>
      <Footer />
    </div>
    
  );
};

export default LandingPage;

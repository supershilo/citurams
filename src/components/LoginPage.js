import React, { useState } from 'react';
import '../styles/LoginPage.css'; 
import { Card, TextField, Button, InputAdornment, SvgIcon, Typography} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
      // Simple validation
      if (!email || !password) {
        setError('Please enter both email and password.');
        return;
      }
  
      // Simulate API call or authentication logic
      try {
        // Assuming loginUser is a function that handles authentication
        // const user = await loginUser(email, password);
  
        // Reset state and navigate to the authenticated route
        setEmail('');
        setPassword('');
        setError(null);
  
        // For demonstration purposes, log the user object to the console
        // console.log('Authenticated user:', user);
      } catch (error) {
        // Handle authentication error
        setError('Invalid email or password. Please try again.');
      }
  } 

  return (
    <div className="login-page">
      <div className="left-side">
      <div className="wildcat-login">
        <img src="/LoginPage/wildcat.png" alt="Logo" className="wildcat" />
      </div>
      </div>
      <div className="right-side">
      <div className="logo-container">
        <img src="/LoginPage/CITURAMS.png" alt="Logo" className="logo" />
      </div>
      <div className="login-form-container">
      <Typography className="login-heading" variant="h4"  style={{ fontFamily: "'Poppins', sans-serif", marginBottom: '1.5rem', color: '#7D7C7C' }}>
        Login
      </Typography>
      <Card sx={{ p: 2 }}>
        <form onSubmit={handleLogin}>
          <TextField
            placeholder='Institutional Email'
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SvgIcon color="action" fontSize="small">
                    <EmailIcon />
                  </SvgIcon>
                </InputAdornment>
              ),
            }}
            sx={{ maxWidth: 500 }}
          />
          <TextField
            type="password"
            placeholder='Password'
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SvgIcon color="action" fontSize="small">
                    <LockIcon />
                  </SvgIcon>
                </InputAdornment>
              ),
            }}
            sx={{ maxWidth: 500, marginTop: 2 }}
          />
          {error && (
            <Typography variant="body2" color="error" sx={{ marginTop: 1 }}>
              {error}
            </Typography>
          )}

        </form>
        <Button
  type="submit"
  variant="contained"
  color="primary"
  sx={{
    fontFamily: "'Poppins', sans-serif",
    fontSize: '18px',
    marginTop: 2,
    width: '100%',
    height: '50px',
    backgroundColor: '#FC3031',
    '&:hover': {
      backgroundColor: '#bd262a', // Change this to your desired hover color
    },
  }}
>
  Log in
</Button>

      </Card>
    </div>

      </div>
    </div>
  );
};

export default LoginPage;

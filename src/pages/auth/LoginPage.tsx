import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import {
  Box,
  Typography,
  CircularProgress,
} from '@mui/material';

const LoginPage: React.FC = () => {
  const { loginWithRedirect, isLoading } = useAuth0();

  // Automatically redirect to Auth0 login page
  React.useEffect(() => {
    loginWithRedirect();
  }, [loginWithRedirect]);

  // Show loading state while redirecting to Auth0
  if (isLoading) {
    return (
      <Box sx={{ 
        flexGrow: 1, 
        minHeight: '100vh', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: `#000`,
      }}>
        <Box sx={{ textAlign: 'center' }}>
          <CircularProgress size={60} sx={{ color: 'white', mb: 2 }} />
          <Typography variant="h6" sx={{ color: 'white' }}>
            Redirecting to login...
          </Typography>
        </Box>
      </Box>
    );
  }

  // This should not be reached as we redirect to Auth0
  return null;
};

export default LoginPage;

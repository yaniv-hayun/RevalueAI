import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Alert,
  IconButton,
  useTheme,
} from '@mui/material';
import { Google as GoogleIcon, ArrowBack } from '@mui/icons-material';
import RevalueAILogo from './RevalueAILogo';

const LoginPage: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { login } = useAuth();
  const [error, setError] = React.useState<string>('');

  const handleGoogleLogin = () => {
    // Simulate Google OAuth login
    // In a real app, you would integrate with Google OAuth API
    const mockUser = {
      id: '1',
      name: 'John Doe',
      email: 'john.doe@example.com',
      picture: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    };

    try {
      login(mockUser);
      navigate('/dashboard');
    } catch (err) {
      setError('Login failed. Please try again.');
    }
  };

  return (
    <Box sx={{ 
      flexGrow: 1, 
      minHeight: '100vh', 
      position: 'relative',
        background: `#000`,
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      // '&::before': {
      //   content: '""',
      //   position: 'absolute',
      //   top: 0,
      //   left: 0,
      //   right: 0,
      //   bottom: 0,
      //   background: '',
      //   pointerEvents: 'none',
      // }
    }}>
      <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 1 }}>
        <Card 
          elevation={0} 
          sx={{ 
            borderRadius: 4,
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          }}
        >
          <CardContent sx={{ p: 6 }}>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Box sx={{ mb: 4 }}>
                <RevalueAILogo size="large" showTagline={true} variant="vertical" />
              </Box>
              <Typography 
                variant="h3" 
                component="h1" 
                gutterBottom 
                sx={{ 
                  fontWeight: 700,
                  color: 'white',
                  textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                  mb: 2,
                }}
              >
                Welcome Back
              </Typography>
              <Typography 
                variant="h6" 
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontWeight: 300,
                  textShadow: '0 1px 5px rgba(0,0,0,0.2)',
                }}
              >
                Sign in to access your fraud advisory dashboard
              </Typography>
            </Box>

            {error && (
              <Alert 
                severity="error" 
                sx={{ 
                  mb: 4,
                  background: 'rgba(244, 67, 54, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(244, 67, 54, 0.3)',
                  color: 'white',
                  '& .MuiAlert-icon': {
                    color: theme.palette.error.main,
                  }
                }}
              >
                {error}
              </Alert>
            )}

            <Button
              fullWidth
              variant="contained"
              size="small"
              startIcon={<GoogleIcon />}
              onClick={handleGoogleLogin}
              sx={{
                // py: 2,
                fontSize: '1.1rem',
                fontWeight: 600,
                borderRadius: 3,
                background: theme.palette.fraud.main,
                textTransform: 'none',
                // '&:hover': {
                //   background: theme.palette.error.dark,
                //   transform: 'translateY(-2px)',
                // },
                transition: 'all 0.3s ease',
              }}
            >
              Continue with Google
            </Button>
            
            <Box sx={{ textAlign: 'center', mt: 4 }}>
              <Typography variant="body2" sx={{ 
                color: 'rgba(255, 255, 255, 0.7)',
                mb: 2,
              }}>
                By signing in, you agree to our Terms of Service and Privacy Policy
              </Typography>
              <Button
                variant="text"
                onClick={() => navigate('/')}
                sx={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  textTransform: 'none',
                  fontSize: '0.9rem',
                  '&:hover': {
                    color: 'white',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                ← Back to Home
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default LoginPage;

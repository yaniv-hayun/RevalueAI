import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
   Card,
  CardContent,
  useTheme,
} from '@mui/material';
import {
  Security,
  Analytics,
  TrendingDown,
  Shield,
} from '@mui/icons-material';
import { PieChart } from '@mui/x-charts/PieChart';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

/*
Advanced Fraud
Advisory Platform
Protect your business with AI-powered fraud detection, comprehensive analytics, and actionable insights to reduce chargebacks and maximize your revenue.
*/
const LandingPage: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const features = [
    {
      icon: <Security sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: '1. Connect Your Data',
      description: 'Simple API integration takes less than 5 minutes. Connect your payment processor and start protecting transactions immediately.',
    },
    {
      icon: <Analytics sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: '2. AI Analyzes Everything',
      description: 'Our machine learning models analyze every transaction in real-time, identifying fraud patterns before they impact your business.',
    },
    {
      icon: <TrendingDown sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: '3. Stop Fraud Instantly',
      description: 'Get instant alerts and automatic blocking of suspicious transactions. Reduce fraud by up to 95% within the first month.',
    },
    {
      icon: <Shield sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: '4. Grow With Confidence',
      description: 'Focus on growing your business while we handle the security. Our AI gets smarter with every transaction.',
    },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
        {/* Hero Section */}
        <Box sx={{
          background: `#000`,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
      }}>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          {/* Logo Header */}
          <Box sx={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            zIndex: 2 
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <img 
                src="/logo.png" 
                alt="RevalueAI Logo" 
                style={{ 
                  height: '150px', 
                  width: '150px',
                  objectFit: 'contain'
                }}
              />
            </Box>
          </Box>
          
          {/* Sign In Button */}
          <Box sx={{ 
            position: 'absolute', 
            top: 20, 
            right: 20, 
            zIndex: 2 
          }}>
            <Button 
              variant="outlined" 
              size="large"
              sx={{ 
                color: 'white', 
                borderColor: 'white',
                borderWidth: 2,
                // px: 4,
                // py: 1.5,
                // fontSize: '1.1rem',
                fontWeight: 600,
                borderRadius: 2,
                textTransform: 'none',
                // '&:hover': { 
                //   borderColor: 'white',
                //   backgroundColor: 'rgba(255,255,255,0.1)',
                //   transform: 'translateY(-2px)',
                // },
                transition: 'all 0.3s ease',
              }}
              onClick={() => navigate('/login')}
            >
              Sign In
            </Button>
          </Box>
          
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '80vh',
            gap: 6,
            flexWrap: 'wrap'
          }}>
            {/* Left Content */}
            <Box sx={{ 
              flex: '1 1 50%', 
              textAlign: 'center',
            }}>
              <Typography 
                variant="h2" 
                component="h1" 
                gutterBottom
                sx={{ 
                  fontWeight: 700,
                  lineHeight: 1.2,
                  color: 'white',
                  mb: 3,
                  fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                }}
              >
               Your Personal Risk Advisor 
             </Typography>
              
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 4, justifyContent: 'center' }}>
                <Button 
                  variant="contained" 
                  size="medium"
                  onClick={() => navigate('/login')}
                  sx={{ 
                    // px: 6, 
                    // py: 2.5,
                    // fontSize: '1.1rem',
                    fontWeight: 600,
                    borderRadius: 2,
                    background: theme.palette.fraud.main,
                    textTransform: 'none',
                    '&:hover': {
                      background: theme.palette.fraud.dark,
                      // transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Free 15-days trial
                </Button>
                <Button 
                  variant="outlined" 
                  size="medium"
                  sx={{ 
                    // px: 6, 
                    // py: 2.5,
                    // fontSize: '1.1rem',
                    fontWeight: 600,
                    borderRadius: 2,
                    borderColor: 'white',
                    borderWidth: 2,
                    color: 'white',
                    textTransform: 'none',
                    '&:hover': {
                      borderColor: 'white',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Book a demo
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

    </Box>
  );
};

export default LandingPage;

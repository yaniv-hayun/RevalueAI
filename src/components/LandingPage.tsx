import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
   Card,
  CardContent,
} from '@mui/material';
import {
  Security,
  Analytics,
  TrendingDown,
  Shield,
} from '@mui/icons-material';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Security sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Advanced Fraud Detection',
      description: 'AI-powered algorithms to identify and prevent fraudulent transactions in real-time.',
    },
    {
      icon: <Analytics sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Comprehensive Analytics',
      description: 'Detailed insights into chargeback patterns, fraud types, and issuer breakdowns.',
    },
    {
      icon: <TrendingDown sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Trend Analysis',
      description: 'Track chargeback trends with predictive analytics and future projections.',
    },
    {
      icon: <Shield sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Risk Management',
      description: 'Proactive risk assessment and mitigation strategies for your business.',
    },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Hero Section with Gradient Background */}
      <Box sx={{
        background: 'linear-gradient(135deg, #0073E5 0%, #4d9eff 100%)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 50%, rgba(0, 115, 229, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(77, 158, 255, 0.2) 0%, transparent 50%)',
          pointerEvents: 'none',
        }
      }}>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center', py: 8 }}>
            {/* Main Heading */}
            <Typography 
              variant="h2" 
              component="h1" 
              gutterBottom
              sx={{ 
                fontWeight: 800,
                fontSize: { xs: '2.5rem', md: '4rem' },
                lineHeight: 1.1,
                color: 'white',
                mb: 3,
                textShadow: '0 4px 20px rgba(0,0,0,0.3)',
                letterSpacing: '-0.02em',
              }}
            >
              Advanced Fraud
              <br />
              <Box component="span" sx={{
                background: 'linear-gradient(45deg, #ff6b6b, #feca57, #48dbfb, #ff9ff3)',
                backgroundSize: '400% 400%',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'gradientShift 3s ease-in-out infinite',
                '@keyframes gradientShift': {
                  '0%': { backgroundPosition: '0% 50%' },
                  '50%': { backgroundPosition: '100% 50%' },
                  '100%': { backgroundPosition: '0% 50%' },
                }
              }}>
                Advisory Platform
              </Box>
            </Typography>
            
            {/* Subtitle */}
            <Typography 
              variant="h5" 
              sx={{ 
                mb: 4, 
                maxWidth: 700, 
                mx: 'auto',
                color: 'rgba(255, 255, 255, 0.9)',
                fontWeight: 300,
                lineHeight: 1.6,
                textShadow: '0 2px 10px rgba(0,0,0,0.2)',
              }}
            >
              Protect your business with AI-powered fraud detection, comprehensive analytics, 
              and actionable insights to reduce chargebacks and maximize your revenue.
            </Typography>
            
            {/* CTA Buttons */}
            <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap', mt: 6 }}>
              <Button 
                variant="contained" 
                size="large"
                onClick={() => navigate('/login')}
                sx={{ 
                  px: 6, 
                  py: 2,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  borderRadius: 3,
                  background: 'linear-gradient(45deg, #ff6b6b, #ee5a24)',
                  boxShadow: '0 8px 32px rgba(255, 107, 107, 0.3)',
                  textTransform: 'none',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #ee5a24, #ff6b6b)',
                    boxShadow: '0 12px 40px rgba(255, 107, 107, 0.4)',
                    transform: 'translateY(-2px)',
                    transition: 'all 0.3s ease',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Get Started Free
              </Button>
              <Button 
                variant="outlined" 
                size="large"
                sx={{ 
                  px: 6, 
                  py: 2,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  borderRadius: 3,
                  borderColor: 'rgba(255, 255, 255, 0.5)',
                  color: 'white',
                  textTransform: 'none',
                  backdropFilter: 'blur(10px)',
                  '&:hover': {
                    borderColor: 'white',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    transform: 'translateY(-2px)',
                    transition: 'all 0.3s ease',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Watch Demo
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
      
      <Container maxWidth="lg" sx={{ py: 8 }}>

        {/* Features Section */}
        <Box sx={{ 
          background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
          borderRadius: 4,
          p: 6,
          mb: 8,
        }}>
          <Typography 
            variant="h3" 
            component="h2" 
            textAlign="center" 
            sx={{ 
              mb: 8, 
              fontWeight: 700,
              background: 'linear-gradient(45deg, #0073E5, #4d9eff)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Powerful Features
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
            {features.map((feature, index) => (
              <Box key={index} sx={{ flex: '1 1 45%', minWidth: 300 }}>
                <Card 
                  elevation={0} 
                  sx={{ 
                    height: '100%',
                    background: 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: 3,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                      background: 'rgba(255, 255, 255, 0.95)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ 
                      mb: 3,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.9)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                      border: '2px solid rgba(0, 0, 0, 0.1)',
                    }}>
                      <Box sx={{ color: '#000000', fontSize: 32 }}>
                        {feature.icon}
                      </Box>
                    </Box>
                    <Typography variant="h5" component="h3" gutterBottom sx={{ 
                      fontWeight: 700,
                      color: '#2c3e50',
                      mb: 2,
                    }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body1" sx={{ 
                      color: '#5a6c7d',
                      lineHeight: 1.7,
                    }}>
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Box>

        {/* CTA Section */}
        <Box sx={{ 
          textAlign: 'center', 
          mt: 8, 
          p: 8,
          background: 'linear-gradient(135deg, #0073E5 0%, #4d9eff 100%)',
          borderRadius: 4,
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
            pointerEvents: 'none',
          }
        }}>
          <Box sx={{ position: 'relative', zIndex: 1 }}>
            <Typography variant="h3" component="h2" gutterBottom sx={{ 
              fontWeight: 700,
              color: 'white',
              mb: 3,
              textShadow: '0 2px 10px rgba(0,0,0,0.3)',
            }}>
              Ready to Protect Your Business?
            </Typography>
            <Typography variant="h6" sx={{ 
              mb: 4,
              color: 'rgba(255, 255, 255, 0.9)',
              fontWeight: 300,
              maxWidth: 600,
              mx: 'auto',
            }}>
              Join thousands of businesses already using our fraud advisory platform to reduce chargebacks and maximize revenue
            </Typography>
            <Button 
              variant="contained" 
              size="large"
              onClick={() => navigate('/login')}
              sx={{ 
                px: 8, 
                py: 2.5,
                fontSize: '1.2rem',
                fontWeight: 600,
                borderRadius: 3,
                background: 'linear-gradient(45deg, #ff6b6b, #ee5a24)',
                boxShadow: '0 8px 32px rgba(255, 107, 107, 0.4)',
                textTransform: 'none',
                '&:hover': {
                  background: 'linear-gradient(45deg, #ee5a24, #ff6b6b)',
                  boxShadow: '0 12px 40px rgba(255, 107, 107, 0.5)',
                  transform: 'translateY(-2px)',
                  transition: 'all 0.3s ease',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Start Free Trial
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default LandingPage;

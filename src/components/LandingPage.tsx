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
import { PieChart } from '@mui/x-charts/PieChart';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import RevalueAILogo from './RevalueAILogo';

/*
Advanced Fraud
Advisory Platform
Protect your business with AI-powered fraud detection, comprehensive analytics, and actionable insights to reduce chargebacks and maximize your revenue.
*/
const LandingPage: React.FC = () => {
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
        background: 'linear-gradient(135deg, #1e3a8a 0%, #06b6d4 100%)',
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
            top: 20, 
            left: 20, 
            zIndex: 2 
          }}>
            <RevalueAILogo size="medium" showTagline={false} />
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
                variant="h3" 
                component="h3" 
                gutterBottom
                sx={{ 
                  fontWeight: 800,
                  lineHeight: 1.1,
                  color: 'white',
                  mb: 3,
                  textShadow: '0 4px 20px rgba(0,0,0,0.3)',
                }}
              >
               Your Personal Risk Advisor 
             </Typography>
              
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 4, justifyContent: 'center' }}>
                <Button 
                  variant="contained" 
                  size="large"
                  onClick={() => navigate('/login')}
                  sx={{ 
                    px: 4, 
                    py: 2,
                    fontSize: '1rem',
                    fontWeight: 600,
                    borderRadius: 2,
                    background: 'linear-gradient(45deg, #ff6b6b, #ee5a24)',
                    textTransform: 'none',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #ee5a24, #ff6b6b)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Free 15-days trial
                </Button>
                <Button 
                  variant="outlined" 
                  size="large"
                  sx={{ 
                    px: 4, 
                    py: 2,
                    fontSize: '1rem',
                    fontWeight: 600,
                    borderRadius: 2,
                    borderColor: 'rgba(255, 255, 255, 0.5)',
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
      
      <Container maxWidth="lg" sx={{ py: 8 }}>

        {/* What you can do section */}
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Typography 
            variant="h3" 
            component="h2" 
            sx={{ 
              mb: 6, 
              fontWeight: 700,
              color: '#2c3e50',
            }}
          >
            What you can do with RevalueAI's Fraud Detection
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap', justifyContent: 'center' }}>
            {[
              {
                title: 'Detect',
                description: 'Work as a team to identify and prevent fraudulent transactions before they impact your business.'
              },
              {
                title: 'Automation',
                description: 'Automate fraud detection & simplify your security workflow and save time.'
              },
              {
                title: 'Communication',
                description: 'Integrate RevalueAI with your existing systems to solve fraud issues and monitor in real-time.'
              }
            ].map((feature, index) => (
              <Box key={index} sx={{ flex: '1 1 30%', minWidth: 300 }}>
                <Card 
                  elevation={0} 
                  sx={{ 
                    height: '100%',
                    background: 'white',
                    border: '1px solid #e0e0e0',
                    borderRadius: 2,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 4, textAlign: 'center' }}>
                    <Typography variant="h5" component="h3" gutterBottom sx={{ 
                      fontWeight: 600,
                      color: '#1e3a8a',
                      mb: 2,
                    }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body1" sx={{ 
                      color: '#5a6c7d',
                      lineHeight: 1.6,
                    }}>
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Box>


        {/* Knowledge Base & Live Chat Section */}
        <Box sx={{ mb: 8 }}>
          <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap', justifyContent: 'center' }}>
            <Box sx={{ flex: '1 1 45%', minWidth: 300 }}>
              <Card 
                elevation={0} 
                sx={{ 
                  height: '100%',
                  background: 'white',
                  border: '1px solid #e0e0e0',
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  },
                }}
              >
                <CardContent sx={{ p: 4, textAlign: 'center' }}>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ 
                    fontWeight: 600,
                    color: '#1e3a8a',
                    mb: 2,
                  }}>
                    Knowledge Base
                  </Typography>
                  <Typography variant="body1" sx={{ 
                    color: '#5a6c7d',
                    lineHeight: 1.6,
                    mb: 3,
                  }}>
                    Help your team get all the answers about fraud prevention and security best practices.
                  </Typography>
                  <Button 
                    variant="outlined"
                    sx={{ 
                      borderColor: '#1e3a8a',
                      color: '#1e3a8a',
                      textTransform: 'none',
                      '&:hover': {
                        borderColor: '#1e40af',
                        backgroundColor: 'rgba(30, 58, 138, 0.04)',
                      },
                    }}
                  >
                    Go to help page
                  </Button>
                </CardContent>
              </Card>
            </Box>
            
            <Box sx={{ flex: '1 1 45%', minWidth: 300 }}>
              <Card 
                elevation={0} 
                sx={{ 
                  height: '100%',
                  background: 'white',
                  border: '1px solid #e0e0e0',
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  },
                }}
              >
                <CardContent sx={{ p: 4, textAlign: 'center' }}>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ 
                    fontWeight: 600,
                    color: '#1e3a8a',
                    mb: 2,
                  }}>
                    Live Support
                  </Typography>
                  <Typography variant="body1" sx={{ 
                    color: '#5a6c7d',
                    lineHeight: 1.6,
                    mb: 3,
                  }}>
                    Professionally cultivate one-to-one customer service with robust fraud detection support.
                  </Typography>
                  <Button 
                    variant="outlined"
                    sx={{ 
                      borderColor: '#1e3a8a',
                      color: '#1e3a8a',
                      textTransform: 'none',
                      '&:hover': {
                        borderColor: '#1e40af',
                        backgroundColor: 'rgba(30, 58, 138, 0.04)',
                      },
                    }}
                  >
                    Go to live chat
                  </Button>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Box>

        {/* No Solution Found Section */}
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Typography 
            variant="h3" 
            component="h2" 
            sx={{ 
              mb: 2, 
              fontWeight: 700,
              color: '#2c3e50',
            }}
          >
            No solution found?
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              mb: 6, 
              color: '#5a6c7d',
              fontWeight: 300,
              maxWidth: 600,
              mx: 'auto',
            }}
          >
            RevalueAI is the partner of choice for many of the world's leading enterprises, SMEs, and technology challenges. We help businesses elevate their security through custom fraud detection solutions.
          </Typography>
          

        </Box>

        {/* Pricing Section */}
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Typography 
            variant="h3" 
            component="h2" 
            sx={{ 
              mb: 2, 
              fontWeight: 700,
              color: '#2c3e50',
            }}
          >
            Kick-start with an affordable
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              mb: 6, 
              color: '#5a6c7d',
              fontWeight: 300,
              maxWidth: 600,
              mx: 'auto',
            }}
          >
            You can choose to pay monthly or annually. Don't worry! You can cancel anytime
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', justifyContent: 'center', pt: 2 }}>
            {[
              {
                name: 'Starter',
                price: 'Free',
                period: '',
                features: ['1 User', '1 Dashboard', '5 Projects', 'Basic Support'],
                popular: false
              },
              {
                name: 'Professional',
                price: '$300',
                period: '/month',
                features: ['3 Users', '3 Dashboards', '10 Projects', 'Advanced Analytics', 'Priority Support'],
                popular: true
              },
              {
                name: 'Business',
                price: '$500',
                period: '/month',
                features: ['20 Users', 'Unlimited Dashboards', '50 Projects', 'Custom Integrations', '24/7 Support'],
                popular: false
              },
              {
                name: 'Enterprise',
                price: 'Contact us',
                period: '',
                features: ['Unlimited Users', 'Unlimited Dashboards', 'Unlimited Projects', 'Custom Development', 'Dedicated Support'],
                popular: false
              }
            ].map((plan, index) => (
              <Card 
                key={index}
                elevation={0} 
                sx={{ 
                  flex: '1 1 22%',
                  minWidth: 250,
                  maxWidth: 300,
                  background: plan.popular ? '#1e3a8a' : 'white',
                  border: plan.popular ? 'none' : '1px solid #e0e0e0',
                  borderRadius: 2,
                  position: 'relative',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  },
                }}
              >
                {plan.popular && (
                  <Box sx={{
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#ff6b6b',
                    color: 'white',
                    px: 3,
                    py: 1,
                    borderRadius: 1,
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    zIndex: 1,
                  }}>
                    Most Popular
                  </Box>
                )}
                <CardContent sx={{ p: 4, textAlign: 'center' }}>
                  <Typography variant="h5" sx={{ 
                    fontWeight: 600,
                    color: plan.popular ? 'white' : '#2c3e50',
                    mb: 1,
                  }}>
                    {plan.name}
                  </Typography>
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="h3" sx={{ 
                      fontWeight: 800,
                      color: plan.popular ? 'white' : '#1e3a8a',
                      display: 'inline',
                    }}>
                      {plan.price}
                    </Typography>
                    <Typography variant="h6" sx={{ 
                      color: plan.popular ? 'rgba(255,255,255,0.8)' : '#5a6c7d',
                      display: 'inline',
                    }}>
                      {plan.period}
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ 
                    color: plan.popular ? 'rgba(255,255,255,0.8)' : '#5a6c7d',
                    mb: 3,
                  }}>
                    Free with 14 days trial, then you can choose a plan.
                  </Typography>
                  <Box sx={{ mb: 3 }}>
                    {plan.features.map((feature, idx) => (
                      <Typography key={idx} variant="body2" sx={{ 
                        color: plan.popular ? 'rgba(255,255,255,0.9)' : '#5a6c7d',
                        mb: 1,
                      }}>
                        • {feature}
                      </Typography>
                    ))}
                  </Box>
                  <Button 
                    variant={plan.popular ? 'outlined' : 'contained'}
                    fullWidth
                    sx={{ 
                      borderColor: plan.popular ? 'white' : '#1e3a8a',
                      color: plan.popular ? 'white' : 'white',
                      background: plan.popular ? 'transparent' : '#1e3a8a',
                      textTransform: 'none',
                      '&:hover': {
                        background: plan.popular ? 'rgba(255,255,255,0.1)' : '#1e40af',
                        borderColor: plan.popular ? 'white' : '#1e40af',
                      },
                    }}
                  >
                    Get Started Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </Box>
          
          <Typography variant="body2" sx={{ 
            mt: 4,
            color: '#5a6c7d',
          }}>
            Do you have a large team? Contact us for information about more enterprise options
          </Typography>
        </Box>

        {/* Final CTA Section */}
        <Box sx={{ 
          textAlign: 'center', 
          mt: 8, 
          p: 8,
          background: 'linear-gradient(135deg, #1e3a8a 0%, #06b6d4 100%)',
          borderRadius: 4,
          color: 'white',
        }}>
          <Typography variant="h3" component="h2" gutterBottom sx={{ 
            fontWeight: 700,
            color: 'white',
            mb: 3,
            textShadow: '0 2px 10px rgba(0,0,0,0.3)',
          }}>
            Try RevalueAI Today
          </Typography>
          <Typography variant="h6" sx={{ 
            mb: 4,
            color: 'rgba(255, 255, 255, 0.9)',
            fontWeight: 300,
            maxWidth: 600,
            mx: 'auto',
          }}>
            Invite your team and explore RevalueAI features for free
          </Typography>
          <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap', mb: 4 }}>
            <Button 
              variant="contained" 
              size="large"
              onClick={() => navigate('/login')}
              sx={{ 
                px: 6, 
                py: 2.5,
                fontSize: '1.2rem',
                fontWeight: 600,
                borderRadius: 2,
                background: 'linear-gradient(45deg, #ff6b6b, #ee5a24)',
                textTransform: 'none',
                '&:hover': {
                  background: 'linear-gradient(45deg, #ee5a24, #ff6b6b)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Sign up free
            </Button>
          </Box>
          
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', mb: 4 }}>
            {[
              'Free 15-Days Trial',
              'Easy Setup',
              'Share Dashboard'
            ].map((feature, index) => (
              <Box 
                key={index}
                sx={{ 
                  px: 2, 
                  py: 1, 
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: 2,
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                }}
              >
                {feature}
              </Box>
            ))}
          </Box>
          
          <Typography variant="body2" sx={{ 
            color: 'rgba(255, 255, 255, 0.7)',
          }}>
            Find us on social media
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default LandingPage;

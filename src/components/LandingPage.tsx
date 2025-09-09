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
          animation: 'fadeInUp 0.8s ease-out',
          '@keyframes fadeInUp': {
            '0%': {
              opacity: 0,
              transform: 'translateY(30px)',
            },
            '100%': {
              opacity: 1,
              transform: 'translateY(0)',
            },
          },
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
              animation: 'slideInFromTop 1s ease-out 0.2s both',
              '@keyframes slideInFromTop': {
                '0%': {
                  opacity: 0,
                  transform: 'translateY(-50px)',
                },
                '100%': {
                  opacity: 1,
                  transform: 'translateY(0)',
                },
              },
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
                    animation: `slideInFromLeft 0.8s ease-out ${0.4 + index * 0.2}s both`,
                    '@keyframes slideInFromLeft': {
                      '0%': {
                        opacity: 0,
                        transform: 'translateX(-50px)',
                      },
                      '100%': {
                        opacity: 1,
                        transform: 'translateX(0)',
                      },
                    },
                    '&:hover': {
                      transform: 'translateY(-8px) scale(1.02)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                      background: 'rgba(255, 255, 255, 0.95)',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
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
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'rotate(360deg) scale(1.1)',
                        boxShadow: '0 12px 40px rgba(0, 115, 229, 0.3)',
                        background: 'linear-gradient(135deg, rgba(0, 115, 229, 0.1), rgba(77, 158, 255, 0.1))',
                      },
                    }}>
                      <Box sx={{ 
                        color: '#000000', 
                        fontSize: 32,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          color: '#0073E5',
                        },
                      }}>
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

        {/* Risk Analysis Section */}
        <Box sx={{ 
          background: 'linear-gradient(135deg, #0073E5 0%, #4d9eff 100%)',
          borderRadius: 4,
          p: 6,
          mb: 8,
          color: 'white',
          animation: 'fadeInUp 1s ease-out 0.5s both',
          '@keyframes fadeInUp': {
            '0%': {
              opacity: 0,
              transform: 'translateY(50px)',
            },
            '100%': {
              opacity: 1,
              transform: 'translateY(0)',
            },
          },
        }}>
          <Typography 
            variant="h3" 
            component="h2" 
            textAlign="center" 
            sx={{ 
              mb: 6, 
              fontWeight: 700,
              color: 'white',
              textShadow: '0 2px 10px rgba(0,0,0,0.3)',
              animation: 'slideInFromTop 1s ease-out 0.7s both',
              '@keyframes slideInFromTop': {
                '0%': {
                  opacity: 0,
                  transform: 'translateY(-30px)',
                },
                '100%': {
                  opacity: 1,
                  transform: 'translateY(0)',
                },
              },
            }}
          >
            Risk Analysis - Fraud Summary
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 6, flexWrap: 'wrap', justifyContent: 'center' }}>
            {/* Fraud Breakdown by Category */}
            <Box sx={{ 
              flex: '1 1 400px', 
              minWidth: 400,
              animation: 'slideInFromLeft 1s ease-out 0.9s both',
              '@keyframes slideInFromLeft': {
                '0%': {
                  opacity: 0,
                  transform: 'translateX(-50px)',
                },
                '100%': {
                  opacity: 1,
                  transform: 'translateX(0)',
                },
              },
            }}>
              <Typography 
                variant="h5" 
                component="h3" 
                sx={{ 
                  mb: 3, 
                  fontWeight: 600,
                  color: 'white',
                  textAlign: 'center',
                }}
              >
                Fraud Breakdown by Category
              </Typography>
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'center',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: 3,
                p: 3,
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  background: 'rgba(255, 255, 255, 0.15)',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                },
              }}>
                <PieChart
                  series={[
                    {
                      data: [
                        { id: 0, value: 20, label: 'Account Take Over', color: '#1e3a8a' },
                        { id: 1, value: 25, label: 'Shipping Mismatch', color: '#3b82f6' },
                        { id: 2, value: 25, label: 'Exposed Fraud', color: '#60a5fa' },
                        { id: 3, value: 20, label: 'Topmail Fraud Ring', color: '#10b981' },
                        { id: 4, value: 10, label: 'Other', color: '#f59e0b' },
                      ],
                      highlightScope: { highlight: 'item' },
                    },
                  ]}
                  width={400}
                  height={300}
                />
              </Box>
            </Box>

            {/* Gaps Mapping */}
            <Box sx={{ 
              flex: '1 1 400px', 
              minWidth: 400,
              animation: 'slideInFromRight 1s ease-out 1.1s both',
              '@keyframes slideInFromRight': {
                '0%': {
                  opacity: 0,
                  transform: 'translateX(50px)',
                },
                '100%': {
                  opacity: 1,
                  transform: 'translateX(0)',
                },
              },
            }}>
              <Typography 
                variant="h5" 
                component="h3" 
                sx={{ 
                  mb: 3, 
                  fontWeight: 600,
                  color: 'white',
                  textAlign: 'center',
                }}
              >
                Gaps Mapping
              </Typography>
              <TableContainer 
                component={Paper} 
                sx={{ 
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 3,
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.02)',
                    background: 'rgba(255, 255, 255, 0.15)',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                  },
                }}
              >
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ color: 'white', fontWeight: 600, borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                        Gap Type
                      </TableCell>
                      <TableCell sx={{ color: 'white', fontWeight: 600, borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                        Number of Chargebacks
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell sx={{ color: 'white', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                        Lack of phone number
                      </TableCell>
                      <TableCell sx={{ color: 'white', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                        49
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ color: 'white', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                        Unverified Email Address
                      </TableCell>
                      <TableCell sx={{ color: 'white', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                        25
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ color: 'white', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                        Billing-Shipping Mismatch
                      </TableCell>
                      <TableCell sx={{ color: 'white', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                        24
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ color: 'white', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                        Lack of IP
                      </TableCell>
                      <TableCell sx={{ color: 'white', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                        9
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
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
          animation: 'fadeInUp 1s ease-out 1.3s both',
          '@keyframes fadeInUp': {
            '0%': {
              opacity: 0,
              transform: 'translateY(50px)',
            },
            '100%': {
              opacity: 1,
              transform: 'translateY(0)',
            },
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
            pointerEvents: 'none',
            animation: 'pulse 4s ease-in-out infinite',
            '@keyframes pulse': {
              '0%, 100%': {
                opacity: 0.5,
                transform: 'scale(1)',
              },
              '50%': {
                opacity: 0.8,
                transform: 'scale(1.1)',
              },
            },
          }
        }}>
          <Box sx={{ position: 'relative', zIndex: 1 }}>
            <Typography variant="h3" component="h2" gutterBottom sx={{ 
              fontWeight: 700,
              color: 'white',
              mb: 3,
              textShadow: '0 2px 10px rgba(0,0,0,0.3)',
              animation: 'slideInFromTop 1s ease-out 1.5s both',
              '@keyframes slideInFromTop': {
                '0%': {
                  opacity: 0,
                  transform: 'translateY(-30px)',
                },
                '100%': {
                  opacity: 1,
                  transform: 'translateY(0)',
                },
              },
            }}>
              Ready to Protect Your Business?
            </Typography>
            <Typography variant="h6" sx={{ 
              mb: 4,
              color: 'rgba(255, 255, 255, 0.9)',
              fontWeight: 300,
              maxWidth: 600,
              mx: 'auto',
              animation: 'fadeIn 1s ease-out 1.7s both',
              '@keyframes fadeIn': {
                '0%': {
                  opacity: 0,
                },
                '100%': {
                  opacity: 1,
                },
              },
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
                animation: 'bounceIn 1s ease-out 1.9s both',
                '@keyframes bounceIn': {
                  '0%': {
                    opacity: 0,
                    transform: 'scale(0.3)',
                  },
                  '50%': {
                    opacity: 1,
                    transform: 'scale(1.05)',
                  },
                  '70%': {
                    transform: 'scale(0.9)',
                  },
                  '100%': {
                    opacity: 1,
                    transform: 'scale(1)',
                  },
                },
                '&:hover': {
                  background: 'linear-gradient(45deg, #ee5a24, #ff6b6b)',
                  boxShadow: '0 12px 40px rgba(255, 107, 107, 0.5)',
                  transform: 'translateY(-2px) scale(1.05)',
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

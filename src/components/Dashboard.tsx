import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Container,
} from '@mui/material';
import Sidebar from './Sidebar';
import FraudVsNonFraudChart from './charts/FraudVsNonFraudChart';
import FraudBreakdownChart from './charts/FraudBreakdownChart';
import ChargebacksTrendChart from './charts/ChargebacksTrendChart';
import ChargebacksByIssuerChart from './charts/ChargebacksByIssuerChart';

const Dashboard: React.FC = () => {

  return (
    <Sidebar>
      <Box sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 50%, rgba(0, 115, 229, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(228, 30, 91, 0.1) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(77, 158, 255, 0.1) 0%, transparent 50%)',
          pointerEvents: 'none',
        }
      }}>
        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1, py: 4 }}>
          {/* Dashboard Header */}
          <Box sx={{ mb: 4, textAlign: 'center' }}>
            <Typography 
              variant="h3" 
              component="h1" 
              sx={{ 
                fontWeight: 700,
                background: 'linear-gradient(45deg, #0073E5, #e41e5b)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2,
                textShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}
            >
              Fraud Analytics Dashboard
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                color: 'text.secondary',
                fontWeight: 400,
                opacity: 0.8
              }}
            >
              Real-time insights and comprehensive fraud analysis
            </Typography>
          </Box>

          {/* Charts Grid */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {/* Top Row */}
            <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
              <Box sx={{ flex: '1 1 45%', minWidth: 400 }}>
                <Card 
                  elevation={0} 
                  sx={{ 
                    height: 450,
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: 3,
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
                    }
                  }}
                >
                  <CardContent sx={{ p: 4, height: '100%' }}>
                    <Typography 
                      variant="h5" 
                      component="h2" 
                      gutterBottom 
                      sx={{ 
                        fontWeight: 600,
                        background: 'linear-gradient(45deg, #0073E5, #4d9eff)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        mb: 3
                      }}
                    >
                      Fraud vs Non-Fraud Cases
                    </Typography>
                    <Box sx={{ height: 'calc(100% - 60px)' }}>
                      <FraudVsNonFraudChart />
                    </Box>
                  </CardContent>
                </Card>
              </Box>

              <Box sx={{ flex: '1 1 45%', minWidth: 400 }}>
                <Card 
                  elevation={0} 
                  sx={{ 
                    height: 450,
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: 3,
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
                    }
                  }}
                >
                  <CardContent sx={{ p: 4, height: '100%' }}>
                    <Typography 
                      variant="h5" 
                      component="h2" 
                      gutterBottom 
                      sx={{ 
                        fontWeight: 600,
                        background: 'linear-gradient(45deg, #e41e5b, #f06292)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        mb: 3
                      }}
                    >
                      Breakdown of Fraud Cases
                    </Typography>
                    <Box sx={{ height: 'calc(100% - 60px)' }}>
                      <FraudBreakdownChart />
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            </Box>

            {/* Bottom Row */}
            <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
              <Box sx={{ flex: '1 1 45%', minWidth: 400 }}>
                <Card 
                  elevation={0} 
                  sx={{ 
                    height: 450,
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: 3,
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
                    }
                  }}
                >
                  <CardContent sx={{ p: 4, height: '100%' }}>
                    <Typography 
                      variant="h5" 
                      component="h2" 
                      gutterBottom 
                      sx={{ 
                        fontWeight: 600,
                        background: 'linear-gradient(45deg, #0073E5, #4d9eff)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        mb: 3
                      }}
                    >
                      Chargebacks and Amounts (with Projections)
                    </Typography>
                    <Box sx={{ height: 'calc(100% - 60px)' }}>
                      <ChargebacksTrendChart />
                    </Box>
                  </CardContent>
                </Card>
              </Box>

              <Box sx={{ flex: '1 1 45%', minWidth: 400 }}>
                <Card 
                  elevation={0} 
                  sx={{ 
                    height: 450,
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: 3,
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
                    }
                  }}
                >
                  <CardContent sx={{ p: 4, height: '100%' }}>
                    <Typography 
                      variant="h5" 
                      component="h2" 
                      gutterBottom 
                      sx={{ 
                        fontWeight: 600,
                        background: 'linear-gradient(45deg, #e41e5b, #f06292)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        mb: 3
                      }}
                    >
                      Chargebacks Breakdown by Issuer
                    </Typography>
                    <Box sx={{ height: 'calc(100% - 60px)' }}>
                      <ChargebacksByIssuerChart />
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Sidebar>
  );
};

export default Dashboard;

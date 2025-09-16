import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Container,
} from '@mui/material';
import FraudVsNonFraudChart from './charts/FraudVsNonFraudChart';
import FraudBreakdownChart from './charts/FraudBreakdownChart';
import ChargebacksTrendChart from './charts/ChargebacksTrendChart';
import ChargebacksByIssuerChart from './charts/ChargebacksByIssuerChart';
import QuestionnaireDialog from './QuestionnaireDialog';
import { useAuth } from '../contexts/AuthContext';

interface QuestionnaireData {
  industry: string;
  annualRevenue: string;
  fraudTeamSize: string;
  fraudVendor: string;
  mainRegion: string;
  fraudChallenges: string[];
  fraudPriorities: string[];
}

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);

  useEffect(() => {
    // Check if user has completed the questionnaire
    if (user) {
      const hasCompletedQuestionnaire = localStorage.getItem('questionnaireCompleted');
      if (!hasCompletedQuestionnaire) {
        // Show questionnaire after a short delay to allow dashboard to render
        const timer = setTimeout(() => {
          setShowQuestionnaire(true);
        }, 1000);
        return () => clearTimeout(timer);
      }
    }
  }, [user]);

  const handleQuestionnaireSubmit = (data: QuestionnaireData) => {
    // Store the questionnaire data
    localStorage.setItem('questionnaireData', JSON.stringify(data));
    localStorage.setItem('questionnaireCompleted', 'true');
    console.log('Questionnaire data:', data);
    // Here you could send the data to your backend
  };

  const handleQuestionnaireClose = () => {
    setShowQuestionnaire(false);
  };

  return (
    <Box sx={{
      minHeight: '100vh',
      bgcolor: 'background.default',
      p: 3
    }}>
      {/* KPI Cards Row */}
      <Box sx={{ 
        display: 'flex', 
        gap: 2, 
        mb: 4, 
        flexWrap: 'wrap',
        justifyContent: 'space-between'
      }}>
        {/* Total Volume */}
        <Card 
          elevation={0} 
          sx={{ 
            flex: '1 1 200px',
            minWidth: 200,
            maxWidth: 300,
            height: 120,
            // background: (theme) => theme.palette.mode === 'dark' 
            //   ? 'rgba(18, 18, 18, 0.95)' 
            //   : 'rgba(255, 255, 255, 0.95)',
            // backdropFilter: 'blur(10px)',
            // border: (theme) => theme.palette.mode === 'dark' 
            //   ? '1px solid rgba(255, 255, 255, 0.1)' 
            //   : '1px solid rgba(255, 255, 255, 0.3)',
            // borderRadius: 2,
            // boxShadow: (theme) => theme.palette.mode === 'dark' 
            //   ? '0 4px 20px rgba(0, 0, 0, 0.3)' 
            //   : '0 4px 20px rgba(0, 0, 0, 0.08)',
            // transition: 'all 0.3s ease',
            // '&:hover': {
            //   transform: 'translateY(-2px)',
            //   boxShadow: (theme) => theme.palette.mode === 'dark' 
            //     ? '0 8px 30px rgba(0, 0, 0, 0.5)' 
            //     : '0 8px 30px rgba(0, 0, 0, 0.12)',
            // }
          }}
        >
          <CardContent sx={{ p: 3, textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography variant="body2" color="text.secondary" gutterBottom sx={{ fontSize: '0.75rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: 0.5 }}>
              Total Volume
            </Typography>
            <Typography 
              variant="h5" 
              sx={{ 
                fontWeight: 700,
                color: '#0073E5',
                fontSize: { xs: '1.25rem', sm: '1.5rem' }
              }}
            >
              $12,847,392
            </Typography>
          </CardContent>
        </Card>

        {/* Declined Volume */}
        <Card 
          elevation={0} 
          sx={{ 
            flex: '1 1 200px',
            minWidth: 200,
            maxWidth: 300,
            height: 120,
          }}
        >
          <CardContent sx={{ p: 3, textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography variant="body2" color="text.secondary" gutterBottom sx={{ fontSize: '0.75rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: 0.5 }}>
              Declined Volume
            </Typography>
            <Typography 
              variant="h5" 
              sx={{ 
                fontWeight: 700,
                color: '#0073E5',
                fontSize: { xs: '1.25rem', sm: '1.5rem' }
              }}
            >
              $456,123
            </Typography>
          </CardContent>
        </Card>

        {/* Total Chargebacks */}
        <Card 
          elevation={0} 
          sx={{ 
            flex: '1 1 200px',
            minWidth: 200,
            maxWidth: 300,
            height: 120,
            // background: (theme) => theme.palette.mode === 'dark' 
            //   ? 'rgba(18, 18, 18, 0.95)' 
            //   : 'rgba(255, 255, 255, 0.95)',
            // backdropFilter: 'blur(10px)',
            // border: (theme) => theme.palette.mode === 'dark' 
            //   ? '1px solid rgba(255, 255, 255, 0.1)' 
            //   : '1px solid rgba(255, 255, 255, 0.3)',
            // borderRadius: 2,
            // boxShadow: (theme) => theme.palette.mode === 'dark' 
            //   ? '0 4px 20px rgba(0, 0, 0, 0.3)' 
            //   : '0 4px 20px rgba(0, 0, 0, 0.08)',
            // transition: 'all 0.3s ease',
            // '&:hover': {
            //   transform: 'translateY(-2px)',
            //   boxShadow: (theme) => theme.palette.mode === 'dark' 
            //     ? '0 8px 30px rgba(0, 0, 0, 0.5)' 
            //     : '0 8px 30px rgba(0, 0, 0, 0.12)',
            // }
          }}
        >
          <CardContent sx={{ p: 3, textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography variant="body2" color="text.secondary" gutterBottom sx={{ fontSize: '0.75rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: 0.5 }}>
              Total Chargebacks
            </Typography>
            <Typography 
              variant="h5" 
              sx={{ 
                fontWeight: 700,
                color: '#FA003F',
                fontSize: { xs: '1.25rem', sm: '1.5rem' }
              }}
            >
              $89,456
            </Typography>
          </CardContent>
        </Card>

        {/* Fraud Chargebacks */}
        <Card 
          elevation={0} 
          sx={{ 
            flex: '1 1 200px',
            minWidth: 200,
            maxWidth: 300,
            height: 120,
          }}
        >
          <CardContent sx={{ p: 3, textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography variant="body2" color="text.secondary" gutterBottom sx={{ fontSize: '0.75rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: 0.5 }}>
              Fraud Chargebacks
            </Typography>
            <Typography 
              variant="h5" 
              sx={{ 
                fontWeight: 700,
                color: '#FA003F',
                fontSize: { xs: '1.25rem', sm: '1.5rem' }
              }}
            >
              $34,789
            </Typography>
          </CardContent>
        </Card>

        {/* Non Fraud Chargebacks */}
        <Card 
          elevation={0} 
          sx={{ 
            flex: '1 1 200px',
            minWidth: 200,
            maxWidth: 300,
            height: 120,
          }}
        >
          <CardContent sx={{ p: 3, textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography variant="body2" color="text.secondary" gutterBottom sx={{ fontSize: '0.75rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: 0.5 }}>
              Non Fraud Chargebacks
            </Typography>
            <Typography 
              variant="h5" 
              sx={{ 
                fontWeight: 700,
                color: '#0073E5',
                fontSize: { xs: '1.25rem', sm: '1.5rem' }
              }}
            >
              $54,667
            </Typography>
          </CardContent>
        </Card>
      </Box>

      {/* Charts Grid */}
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: 3 
      }}>
        {/* Top Row */}
        <Box sx={{ 
          display: 'flex', 
          gap: 3, 
          flexWrap: 'wrap' 
        }}>
          <Box sx={{ 
            flex: '1 1 400px',
            minWidth: 400
          }}>
            <Card 
              elevation={0} 
            >
              <CardContent sx={{ p: { xs: 2, sm: 3 }, height: '100%' }}>
                <Typography 
                  variant="body1" 
                  gutterBottom 
                  sx={{ 
                    color: 'text.primary',
                    mb: 2,
                  }}
                >
                  Fraud vs Non-Fraud Cases
                </Typography>
                <Box >
                  <FraudVsNonFraudChart />
                </Box>
              </CardContent>
            </Card>
          </Box>

          <Box sx={{ 
            flex: '1 1 400px',
            minWidth: 400
          }}>
            <Card 
              elevation={0} 
              sx={{ 
         
              }}
            >
              <CardContent sx={{ p: { xs: 2, sm: 3 }, height: '100%' }}>
                <Typography 
                  variant="body1" 
             
                  gutterBottom 
                  sx={{ 
                    color: 'text.primary',
                    mb: 2,
              
                  }}
                >
                  Breakdown of Fraud Cases
                </Typography>
                <Box sx={{ height: 'calc(100% - 50px)' }}>
                  <FraudBreakdownChart />
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>

        {/* Bottom Row */}
        <Box sx={{ 
          display: 'flex', 
          gap: 3, 
          flexWrap: 'wrap' 
        }}>
          <Box sx={{ 
            flex: '1 1 400px',
            minWidth: 400
          }}>
            <Card 
              elevation={0} 
              sx={{ 
                height: { xs: 400, sm: 400 },
         
              }}
            >
              <CardContent sx={{ p: { xs: 2, sm: 3 }, height: '100%' }}>
                <Typography 
                  variant="body1" 
                  component="h2" 
                  gutterBottom 
                  sx={{ 
                   
                    color: 'text.primary',
                        mb: 2,
                  
                  }}
                >
                  Incoming Chargebacks Trend
                </Typography>
                <Box sx={{ height: 'calc(100% - 50px)' }}>
                  <ChargebacksTrendChart />
                </Box>
              </CardContent>
            </Card>
          </Box>

          <Box sx={{ 
            flex: '1 1 400px',
            minWidth: 400
          }}>
            <Card 
              elevation={0} 
              sx={{ 
                  height: { xs: 400, sm: 400 },
         
              }}
            >
              <CardContent sx={{ p: { xs: 2, sm: 3 }, height: '100%' }}>
                <Typography 
                  variant="body1" 
                  component="h2" 
                  gutterBottom 
                  sx={{ 
                   
                    color: 'text.primary',
                    mb: 2,
                
                  }}
                >
                  Chargebacks Breakdown by Issuer
                </Typography>
                <Box >
                  <ChargebacksByIssuerChart />
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Box>

      {/* Questionnaire Dialog */}
      <QuestionnaireDialog
        open={showQuestionnaire}
        onClose={handleQuestionnaireClose}
        onSubmit={handleQuestionnaireSubmit}
      />
    </Box>
  );
};

export default Dashboard;
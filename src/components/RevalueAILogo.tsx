import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { Security, Analytics, Shield, TrendingUp, Warning, CheckCircle, Visibility } from '@mui/icons-material';

interface RevalueAILogoProps {
  size?: 'small' | 'medium' | 'large';
  showTagline?: boolean;
  variant?: 'horizontal' | 'vertical';
}

const RevalueAILogo: React.FC<RevalueAILogoProps> = ({ 
  size = 'medium', 
  showTagline = true, 
  variant = 'horizontal' 
}) => {
  const theme = useTheme();
  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return {
          logoSize: 40,
          fontSize: '2.2rem',
          taglineFontSize: '0.7rem',
          gap: 1
        };
      case 'large':
        return {
          logoSize: 80,
          fontSize: '3.5rem',
          taglineFontSize: '1rem',
          gap: 2
        };
      default: // medium
        return {
          logoSize: 60,
          fontSize: '2.8rem',
          taglineFontSize: '0.8rem',
          gap: 1.5
        };
    }
  };

  const {fontSize, taglineFontSize, gap, logoSize } = getSizeStyles();

  const getIconSize = () => {
    switch (size) {
      case 'small': return 20;
      case 'large': return 40;
      default: return 30;
    }
  };

  const iconSize = getIconSize();

  if (variant === 'vertical') {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap }}>
        {/* Enhanced Animated Logo Container */}
        <Box sx={{ 
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 2
        }}>
          {/* Outer Ring with Gradient */}
          <Box sx={{
            position: 'absolute',
            width: logoSize + 30,
            height: logoSize + 30,
            borderRadius: '50%',
            background: `conic-gradient(from 0deg, ${theme.palette.primary.main}, ${theme.palette.error.main}, ${theme.palette.success.main}, ${theme.palette.primary.main})`,
            animation: 'rotate 4s linear infinite',
            '@keyframes rotate': {
              '0%': { transform: 'rotate(0deg)' },
              '100%': { transform: 'rotate(360deg)' },
            }
          }} />
          
          {/* Inner Background Shield */}
          <Box sx={{
            position: 'absolute',
            width: logoSize + 20,
            height: logoSize + 20,
            borderRadius: '50%',
            background: `linear-gradient(135deg, ${theme.palette.primary.main}15, ${theme.palette.error.main}15)`,
            animation: 'pulse 2s ease-in-out infinite',
            '@keyframes pulse': {
              '0%': { transform: 'scale(1)', opacity: 0.8 },
              '50%': { transform: 'scale(1.05)', opacity: 0.6 },
              '100%': { transform: 'scale(1)', opacity: 0.8 },
            }
          }} />
          
          {/* Main Shield Icon with Enhanced Styling */}
          <Shield sx={{ 
            fontSize: logoSize,
            color: theme.palette.primary.main,
            position: 'relative',
            zIndex: 2,
            animation: 'float 3s ease-in-out infinite',
            filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))',
            '@keyframes float': {
              '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
              '50%': { transform: 'translateY(-5px) rotate(2deg)' },
            }
          }} />
          
          {/* Security Badge with Enhanced Animation */}
          <Security sx={{
            position: 'absolute',
            fontSize: iconSize * 0.6,
            color: theme.palette.error.main,
            top: -8,
            right: -8,
            zIndex: 3,
            animation: 'glow 2s ease-in-out infinite alternate, wiggle 3s ease-in-out infinite',
            '@keyframes glow': {
              '0%': { filter: 'drop-shadow(0 0 5px currentColor)' },
              '100%': { filter: 'drop-shadow(0 0 15px currentColor)' },
            },
            '@keyframes wiggle': {
              '0%, 100%': { transform: 'rotate(0deg)' },
              '25%': { transform: 'rotate(-5deg)' },
              '75%': { transform: 'rotate(5deg)' },
            }
          }} />
          
          {/* Analytics Chart with Data Flow Animation */}
          <Analytics sx={{
            position: 'absolute',
            fontSize: iconSize * 0.5,
            color: theme.palette.success.main,
            bottom: -5,
            left: -5,
            zIndex: 3,
            animation: 'bounce 1.5s ease-in-out infinite, dataFlow 2s ease-in-out infinite',
            '@keyframes bounce': {
              '0%, 100%': { transform: 'translateY(0px)' },
              '50%': { transform: 'translateY(-3px)' },
            },
            '@keyframes dataFlow': {
              '0%, 100%': { opacity: 0.7 },
              '50%': { opacity: 1 },
            }
          }} />
          
          {/* Warning Icon for Risk Detection */}
          <Warning sx={{
            position: 'absolute',
            fontSize: iconSize * 0.4,
            color: theme.palette.warning.main,
            top: -3,
            left: -3,
            zIndex: 3,
            animation: 'alert 1s ease-in-out infinite alternate',
            '@keyframes alert': {
              '0%': { transform: 'scale(1)', opacity: 0.8 },
              '100%': { transform: 'scale(1.1)', opacity: 1 },
            }
          }} />
          
          {/* Check Circle for Validation */}
          <CheckCircle sx={{
            position: 'absolute',
            fontSize: iconSize * 0.35,
            color: theme.palette.success.main,
            bottom: -2,
            right: -2,
            zIndex: 3,
            animation: 'validate 2s ease-in-out infinite',
            '@keyframes validate': {
              '0%, 100%': { transform: 'scale(1)', opacity: 0.6 },
              '50%': { transform: 'scale(1.2)', opacity: 1 },
            }
          }} />
          
          {/* Visibility Icon for Monitoring */}
          <Visibility sx={{
            position: 'absolute',
            fontSize: iconSize * 0.3,
            color: theme.palette.info.main,
            top: '50%',
            left: -8,
            zIndex: 3,
            animation: 'scan 2.5s ease-in-out infinite',
            '@keyframes scan': {
              '0%, 100%': { transform: 'translateX(0px)', opacity: 0.7 },
              '50%': { transform: 'translateX(5px)', opacity: 1 },
            }
          }} />
        </Box>

        {/* Enhanced Company Name */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 900,
              fontSize,
              lineHeight: 1,
              mb: showTagline ? 1 : 0,
              background: `linear-gradient(45deg, ${theme.palette.error.main}, ${theme.palette.primary.main}, ${theme.palette.success.main})`,
              backgroundSize: '200% 200%',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'gradientShift 4s ease-in-out infinite, textGlow 2s ease-in-out infinite alternate',
              textShadow: '0 0 30px rgba(0,0,0,0.3)',
              '@keyframes gradientShift': {
                '0%, 100%': { backgroundPosition: '0% 50%' },
                '50%': { backgroundPosition: '100% 50%' },
              },
              '@keyframes textGlow': {
                '0%': { filter: 'drop-shadow(0 0 5px currentColor)' },
                '100%': { filter: 'drop-shadow(0 0 15px currentColor)' },
              }
            }}
          >
            RevalueAI
          </Typography>
          {showTagline && (
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.text.secondary,
                fontSize: taglineFontSize,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: 2,
                animation: 'fadeInUp 1s ease-out 0.5s both, pulse 2s ease-in-out infinite',
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: '50%',
                  left: '-20px',
                  width: '15px',
                  height: '2px',
                  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.error.main})`,
                  animation: 'extend 2s ease-in-out infinite',
                  '@keyframes extend': {
                    '0%, 100%': { width: '15px', opacity: 0.7 },
                    '50%': { width: '30px', opacity: 1 },
                  }
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  top: '50%',
                  right: '-20px',
                  width: '15px',
                  height: '2px',
                  background: `linear-gradient(90deg, ${theme.palette.error.main}, ${theme.palette.primary.main})`,
                  animation: 'extend 2s ease-in-out infinite 1s',
                  '@keyframes extend': {
                    '0%, 100%': { width: '15px', opacity: 0.7 },
                    '50%': { width: '30px', opacity: 1 },
                  }
                },
                '@keyframes fadeInUp': {
                  '0%': { opacity: 0, transform: 'translateY(20px)' },
                  '100%': { opacity: 1, transform: 'translateY(0)' },
                },
                '@keyframes pulse': {
                  '0%, 100%': { opacity: 0.8 },
                  '50%': { opacity: 1 },
                }
              }}
            >
              Fraud Risk Advisory
            </Typography>
          )}
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap }}>
      {/* Enhanced Animated Logo Container */}
      <Box sx={{ 
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mr: 3
      }}>
        {/* Outer Ring with Gradient */}
        <Box sx={{
          position: 'absolute',
          width: logoSize + 25,
          height: logoSize + 25,
          borderRadius: '50%',
          background: `conic-gradient(from 0deg, ${theme.palette.primary.main}, ${theme.palette.error.main}, ${theme.palette.success.main}, ${theme.palette.primary.main})`,
          animation: 'rotate 4s linear infinite',
          '@keyframes rotate': {
            '0%': { transform: 'rotate(0deg)' },
            '100%': { transform: 'rotate(360deg)' },
          }
        }} />
        
        {/* Inner Background Shield */}
        <Box sx={{
          position: 'absolute',
          width: logoSize + 15,
          height: logoSize + 15,
          borderRadius: '50%',
          background: `linear-gradient(135deg, ${theme.palette.primary.main}15, ${theme.palette.error.main}15)`,
          animation: 'pulse 2s ease-in-out infinite',
          '@keyframes pulse': {
            '0%': { transform: 'scale(1)', opacity: 0.8 },
            '50%': { transform: 'scale(1.05)', opacity: 0.6 },
            '100%': { transform: 'scale(1)', opacity: 0.8 },
          }
        }} />
        
        {/* Main Shield Icon with Enhanced Styling */}
        <Shield sx={{ 
          fontSize: logoSize,
          color: theme.palette.primary.main,
          position: 'relative',
          zIndex: 2,
          animation: 'float 3s ease-in-out infinite',
          filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))',
          '@keyframes float': {
            '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
            '50%': { transform: 'translateY(-3px) rotate(1deg)' },
          }
        }} />
        
        {/* Security Badge with Enhanced Animation */}
        <Security sx={{
          position: 'absolute',
          fontSize: iconSize * 0.5,
          color: theme.palette.error.main,
          top: -6,
          right: -6,
          zIndex: 3,
          animation: 'glow 2s ease-in-out infinite alternate, wiggle 3s ease-in-out infinite',
          '@keyframes glow': {
            '0%': { filter: 'drop-shadow(0 0 3px currentColor)' },
            '100%': { filter: 'drop-shadow(0 0 10px currentColor)' },
          },
          '@keyframes wiggle': {
            '0%, 100%': { transform: 'rotate(0deg)' },
            '25%': { transform: 'rotate(-3deg)' },
            '75%': { transform: 'rotate(3deg)' },
          }
        }} />
        
        {/* Analytics Chart with Data Flow Animation */}
        <Analytics sx={{
          position: 'absolute',
          fontSize: iconSize * 0.4,
          color: theme.palette.success.main,
          bottom: -4,
          left: -4,
          zIndex: 3,
          animation: 'bounce 1.5s ease-in-out infinite, dataFlow 2s ease-in-out infinite',
          '@keyframes bounce': {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-2px)' },
          },
          '@keyframes dataFlow': {
            '0%, 100%': { opacity: 0.7 },
            '50%': { opacity: 1 },
          }
        }} />
        
        {/* Warning Icon for Risk Detection */}
        <Warning sx={{
          position: 'absolute',
          fontSize: iconSize * 0.35,
          color: theme.palette.warning.main,
          top: -2,
          left: -2,
          zIndex: 3,
          animation: 'alert 1s ease-in-out infinite alternate',
          '@keyframes alert': {
            '0%': { transform: 'scale(1)', opacity: 0.8 },
            '100%': { transform: 'scale(1.1)', opacity: 1 },
          }
        }} />
        
        {/* Check Circle for Validation */}
        <CheckCircle sx={{
          position: 'absolute',
          fontSize: iconSize * 0.3,
          color: theme.palette.success.main,
          bottom: -1,
          right: -1,
          zIndex: 3,
          animation: 'validate 2s ease-in-out infinite',
          '@keyframes validate': {
            '0%, 100%': { transform: 'scale(1)', opacity: 0.6 },
            '50%': { transform: 'scale(1.2)', opacity: 1 },
          }
        }} />
        
        {/* Visibility Icon for Monitoring */}
        <Visibility sx={{
          position: 'absolute',
          fontSize: iconSize * 0.25,
          color: theme.palette.info.main,
          top: '50%',
          left: -6,
          zIndex: 3,
          animation: 'scan 2.5s ease-in-out infinite',
          '@keyframes scan': {
            '0%, 100%': { transform: 'translateX(0px)', opacity: 0.7 },
            '50%': { transform: 'translateX(3px)', opacity: 1 },
          }
        }} />
      </Box>

      {/* Enhanced Company Name and Tagline */}
      <Box>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 900,
            fontSize,
            lineHeight: 1,
            mb: showTagline ? 0.5 : 0,
            background: `linear-gradient(45deg, ${theme.palette.error.main}, ${theme.palette.primary.main}, ${theme.palette.success.main})`,
            backgroundSize: '200% 200%',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'gradientShift 4s ease-in-out infinite, textGlow 2s ease-in-out infinite alternate',
            textShadow: '0 0 20px rgba(0,0,0,0.2)',
            '@keyframes gradientShift': {
              '0%, 100%': { backgroundPosition: '0% 50%' },
              '50%': { backgroundPosition: '100% 50%' },
            },
            '@keyframes textGlow': {
              '0%': { filter: 'drop-shadow(0 0 3px currentColor)' },
              '100%': { filter: 'drop-shadow(0 0 10px currentColor)' },
            }
          }}
        >
          RevalueAI
        </Typography>
        {showTagline && (
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.text.secondary,
              fontSize: taglineFontSize,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: 1.5,
              animation: 'fadeInUp 1s ease-out 0.5s both, pulse 2s ease-in-out infinite',
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '50%',
                left: '-15px',
                width: '10px',
                height: '1px',
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.error.main})`,
                animation: 'extend 2s ease-in-out infinite',
                '@keyframes extend': {
                  '0%, 100%': { width: '10px', opacity: 0.7 },
                  '50%': { width: '20px', opacity: 1 },
                }
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                top: '50%',
                right: '-15px',
                width: '10px',
                height: '1px',
                background: `linear-gradient(90deg, ${theme.palette.error.main}, ${theme.palette.primary.main})`,
                animation: 'extend 2s ease-in-out infinite 1s',
                '@keyframes extend': {
                  '0%, 100%': { width: '10px', opacity: 0.7 },
                  '50%': { width: '20px', opacity: 1 },
                }
              },
              '@keyframes fadeInUp': {
                '0%': { opacity: 0, transform: 'translateY(10px)' },
                '100%': { opacity: 1, transform: 'translateY(0)' },
              },
              '@keyframes pulse': {
                '0%, 100%': { opacity: 0.8 },
                '50%': { opacity: 1 },
              }
            }}
          >
            Fraud Risk Advisory
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default RevalueAILogo;

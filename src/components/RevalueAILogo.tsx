import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { Security, Analytics, Shield, TrendingUp } from '@mui/icons-material';

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
        {/* Animated Logo Container */}
        <Box sx={{ 
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 1
        }}>
          {/* Background Shield */}
          <Box sx={{
            position: 'absolute',
            width: logoSize + 20,
            height: logoSize + 20,
            borderRadius: '50%',
            background: `linear-gradient(135deg, ${theme.palette.primary.main}20, ${theme.palette.error.main}20)`,
            animation: 'pulse 2s ease-in-out infinite',
            '@keyframes pulse': {
              '0%': { transform: 'scale(1)', opacity: 0.7 },
              '50%': { transform: 'scale(1.1)', opacity: 0.4 },
              '100%': { transform: 'scale(1)', opacity: 0.7 },
            }
          }} />
          
          {/* Main Shield Icon */}
          <Shield sx={{ 
            fontSize: logoSize,
            color: theme.palette.primary.main,
            position: 'relative',
            zIndex: 2,
            animation: 'float 3s ease-in-out infinite',
            '@keyframes float': {
              '0%, 100%': { transform: 'translateY(0px)' },
              '50%': { transform: 'translateY(-5px)' },
            }
          }} />
          
          {/* Security Badge */}
          <Security sx={{
            position: 'absolute',
            fontSize: iconSize * 0.6,
            color: theme.palette.error.main,
            top: -5,
            right: -5,
            zIndex: 3,
            animation: 'glow 2s ease-in-out infinite alternate',
            '@keyframes glow': {
              '0%': { filter: 'drop-shadow(0 0 5px currentColor)' },
              '100%': { filter: 'drop-shadow(0 0 15px currentColor)' },
            }
          }} />
          
          {/* Analytics Chart */}
          <Analytics sx={{
            position: 'absolute',
            fontSize: iconSize * 0.5,
            color: theme.palette.success.main,
            bottom: -3,
            left: -3,
            zIndex: 3,
            animation: 'bounce 1.5s ease-in-out infinite',
            '@keyframes bounce': {
              '0%, 100%': { transform: 'translateY(0px)' },
              '50%': { transform: 'translateY(-3px)' },
            }
          }} />
        </Box>

        {/* Company Name */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              fontSize,
              lineHeight: 1,
              mb: showTagline ? 0.5 : 0,
              background: `linear-gradient(45deg, ${theme.palette.error.main}, ${theme.palette.primary.main})`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'gradientShift 3s ease-in-out infinite',
              '@keyframes gradientShift': {
                '0%, 100%': { backgroundPosition: '0% 50%' },
                '50%': { backgroundPosition: '100% 50%' },
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
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: 1.2,
                animation: 'fadeInUp 1s ease-out 0.5s both',
                '@keyframes fadeInUp': {
                  '0%': { opacity: 0, transform: 'translateY(20px)' },
                  '100%': { opacity: 1, transform: 'translateY(0)' },
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
      {/* Animated Logo Container */}
      <Box sx={{ 
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mr: 2
      }}>
        {/* Background Shield */}
        <Box sx={{
          position: 'absolute',
          width: logoSize + 15,
          height: logoSize + 15,
          borderRadius: '50%',
          background: `linear-gradient(135deg, ${theme.palette.primary.main}20, ${theme.palette.error.main}20)`,
          animation: 'pulse 2s ease-in-out infinite',
          '@keyframes pulse': {
            '0%': { transform: 'scale(1)', opacity: 0.7 },
            '50%': { transform: 'scale(1.1)', opacity: 0.4 },
            '100%': { transform: 'scale(1)', opacity: 0.7 },
          }
        }} />
        
        {/* Main Shield Icon */}
        <Shield sx={{ 
          fontSize: logoSize,
          color: theme.palette.primary.main,
          position: 'relative',
          zIndex: 2,
          animation: 'float 3s ease-in-out infinite',
          '@keyframes float': {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-3px)' },
          }
        }} />
        
        {/* Security Badge */}
        <Security sx={{
          position: 'absolute',
          fontSize: iconSize * 0.5,
          color: theme.palette.error.main,
          top: -3,
          right: -3,
          zIndex: 3,
          animation: 'glow 2s ease-in-out infinite alternate',
          '@keyframes glow': {
            '0%': { filter: 'drop-shadow(0 0 3px currentColor)' },
            '100%': { filter: 'drop-shadow(0 0 10px currentColor)' },
          }
        }} />
        
        {/* Analytics Chart */}
        <Analytics sx={{
          position: 'absolute',
          fontSize: iconSize * 0.4,
          color: theme.palette.success.main,
          bottom: -2,
          left: -2,
          zIndex: 3,
          animation: 'bounce 1.5s ease-in-out infinite',
          '@keyframes bounce': {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-2px)' },
          }
        }} />
      </Box>

      {/* Company Name and Tagline */}
      <Box>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 800,
            fontSize,
            lineHeight: 1,
            mb: showTagline ? 0.5 : 0,
            background: `linear-gradient(45deg, ${theme.palette.error.main}, ${theme.palette.primary.main})`,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'gradientShift 3s ease-in-out infinite',
            '@keyframes gradientShift': {
              '0%, 100%': { backgroundPosition: '0% 50%' },
              '50%': { backgroundPosition: '100% 50%' },
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
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: 1.2,
              animation: 'fadeInUp 1s ease-out 0.5s both',
              '@keyframes fadeInUp': {
                '0%': { opacity: 0, transform: 'translateY(10px)' },
                '100%': { opacity: 1, transform: 'translateY(0)' },
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

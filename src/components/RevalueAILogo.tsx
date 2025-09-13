import React from 'react';
import { Box, Typography } from '@mui/material';

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

  const {fontSize, taglineFontSize, gap } = getSizeStyles();


  if (variant === 'vertical') {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap }}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              fontSize,
              lineHeight: 1,
              mb: showTagline ? 0.5 : 0,
            }}
          >
                <Box component="span" sx={{ color: '#FA003F' }}>
            Rivalue
          </Box>
          <Box component="span" sx={{ color: '#0073E5' }}>
            AI
          </Box>
          </Typography>
          {showTagline && (
            <Typography
              variant="body2"
              sx={{
                color: '#64748b',
                fontSize: taglineFontSize,
                fontWeight: 500,
              }}
            >
              Fraud Risk Analysis
            </Typography>
          )}
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap }}>
      <Box>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            fontSize,
            lineHeight: 1,
            mb: showTagline ? 0.5 : 0,
          }}
        >
          <Box component="span" sx={{ color: '#FA003F' }}>
            Rivalue
          </Box>
          <Box component="span" sx={{ color: '#0073E5' }}>
            AI
          </Box>
        </Typography>
        {showTagline && (
          <Typography
            variant="body2"
            sx={{
              color: '#64748b',
              fontSize: taglineFontSize,
              fontWeight: 500,
            }}
          >
            Fraud Risk Analysis
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default RevalueAILogo;

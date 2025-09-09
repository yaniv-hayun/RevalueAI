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
          fontSize: '1.2rem',
          taglineFontSize: '0.7rem',
          gap: 1
        };
      case 'large':
        return {
          logoSize: 80,
          fontSize: '2.5rem',
          taglineFontSize: '1rem',
          gap: 2
        };
      default: // medium
        return {
          logoSize: 60,
          fontSize: '1.8rem',
          taglineFontSize: '0.8rem',
          gap: 1.5
        };
    }
  };

  const { logoSize, fontSize, taglineFontSize, gap } = getSizeStyles();

  const LogoIcon = () => (
    <Box
      sx={{
        width: logoSize,
        height: logoSize,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Network R Shape */}
      <svg
        width={logoSize}
        height={logoSize}
        viewBox="0 0 100 100"
        style={{ position: 'absolute' }}
      >
        <defs>
          <linearGradient id="networkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1e3a8a" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
        
        {/* Network nodes and connections forming R shape */}
        <g stroke="url(#networkGradient)" strokeWidth="2" fill="none">
          {/* R structure - vertical line */}
          <line x1="20" y1="15" x2="20" y2="85" />
          
          {/* R structure - top horizontal */}
          <line x1="20" y1="15" x2="70" y2="15" />
          
          {/* R structure - middle horizontal */}
          <line x1="20" y1="50" x2="65" y2="50" />
          
          {/* R structure - diagonal */}
          <line x1="20" y1="50" x2="75" y2="85" />
          
          {/* Network nodes */}
          <circle cx="20" cy="15" r="3" fill="url(#networkGradient)" />
          <circle cx="70" cy="15" r="3" fill="url(#networkGradient)" />
          <circle cx="20" cy="50" r="3" fill="url(#networkGradient)" />
          <circle cx="65" cy="50" r="3" fill="url(#networkGradient)" />
          <circle cx="75" cy="85" r="3" fill="url(#networkGradient)" />
          <circle cx="20" cy="85" r="3" fill="url(#networkGradient)" />
          
          {/* Additional network connections */}
          <line x1="35" y1="25" x2="45" y2="35" />
          <line x1="45" y1="35" x2="55" y2="25" />
          <circle cx="35" cy="25" r="2" fill="url(#networkGradient)" />
          <circle cx="45" cy="35" r="2" fill="url(#networkGradient)" />
          <circle cx="55" cy="25" r="2" fill="url(#networkGradient)" />
        </g>
        
        {/* Upward arrow */}
        <g stroke="#1e3a8a" strokeWidth="3" fill="none">
          <path d="M15 75 L25 65 L20 65 L20 55 L10 55 L10 65 L5 65 Z" fill="#1e3a8a" />
        </g>
      </svg>
    </Box>
  );

  if (variant === 'vertical') {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap }}>
        <LogoIcon />
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              fontSize,
              lineHeight: 1,
              mb: showTagline ? 0.5 : 0,
            }}
          >
            <Box component="span" sx={{ color: '#1e3a8a' }}>
              Revalue
            </Box>
            <Box component="span" sx={{ color: '#06b6d4' }}>
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
      <LogoIcon />
      <Box>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            fontSize,
            lineHeight: 1,
            mb: showTagline ? 0.5 : 0,
          }}
        >
          <Box component="span" sx={{ color: '#1e3a8a' }}>
            Revalue
          </Box>
          <Box component="span" sx={{ color: '#06b6d4' }}>
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

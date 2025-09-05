import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import Sidebar from './Sidebar';

const Analytics: React.FC = () => {
  return (
    <Sidebar>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold' }}>
          Analytics
        </Typography>
      </Box>

      <Card elevation={2}>
        <CardContent sx={{ p: 4 }}>
          <Typography variant="h6" gutterBottom>
            Advanced Analytics Dashboard
          </Typography>
          <Typography variant="body1" color="text.secondary">
            This page will contain advanced analytics features including:
          </Typography>
          <Box component="ul" sx={{ mt: 2, pl: 3 }}>
            <li>Real-time fraud detection metrics</li>
            <li>Predictive analytics models</li>
            <li>Risk assessment tools</li>
            <li>Performance monitoring</li>
            <li>Custom reporting</li>
          </Box>
        </CardContent>
      </Card>
    </Sidebar>
  );
};

export default Analytics;

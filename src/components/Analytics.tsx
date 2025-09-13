import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';
import { RadarChart } from '@mui/x-charts/RadarChart';

const Analytics: React.FC = () => {
  // Pie chart data for fraud breakdown
  const fraudBreakdownData = [
    { id: 0, value: 45, label: 'Exposed Fraud', color: '#ff9800' },
    { id: 1, value: 25, label: 'Shipping Mismatch', color: '#2196f3' },
    { id: 2, value: 20, label: 'Topmail Fraud Ring', color: '#ffeb3b' },
    { id: 3, value: 10, label: 'Account Take Over', color: '#4caf50' },
  ];

  // Data for risk assessment radar chart
  const riskAssessmentData = [78, 92, 52, 87, 82];
  const riskCategories = ['Geos', 'Suspicious IP', 'Credit Card', 'Email Address', 'Phone Number'];

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold' }}>
          Risk Analysis - Fraud Summary
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
        {/* Fraud Breakdown Pie Chart */}
        <Box sx={{ flex: '1 1 45%', minWidth: 400 }}>
          <Card elevation={2} sx={{ height: '100%' }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                Fraud Breakdown by Category
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <PieChart
                  series={[
                    {
                      data: fraudBreakdownData,
                      highlightScope: { highlight: 'item' },
                      innerRadius: 30,
                      outerRadius: 120,
                      paddingAngle: 2,
                      cornerRadius: 5,
                    },
                  ]}
                  width={400}
                  height={300}
                  margin={{ top: 20, bottom: 20, left: 20, right: 20 }}
                />
              </Box>
            </CardContent>
          </Card>
        </Box>

        {/* Risk Assessment Radar Chart */}
        <Box sx={{ flex: '1 1 45%', minWidth: 400 }}>
          <Card elevation={2} sx={{ height: '100%' }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                Risk Assessment by Category
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <RadarChart
                  height={300}
                  series={[{ 
                    label: 'Risk Level', 
                    data: riskAssessmentData,
                    color: '#4caf50'
                  }]}
                  radar={{
                    max: 100,
                    metrics: riskCategories,
                  }}
                />
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default Analytics;

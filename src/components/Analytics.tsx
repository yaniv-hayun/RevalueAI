import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const Analytics: React.FC = () => {
  // Pie chart data for fraud breakdown
  const fraudBreakdownData = [
    { id: 0, value: 45, label: 'Exposed Fraud', color: '#ff9800' },
    { id: 1, value: 25, label: 'Shipping Mismatch', color: '#2196f3' },
    { id: 2, value: 20, label: 'Topmail Fraud Ring', color: '#ffeb3b' },
    { id: 3, value: 10, label: 'Account Take Over', color: '#4caf50' },
  ];

  // Data for gaps mapping table
  const gapsData = [
    { id: 1, gap: 'Lack of phone number', chargebacks: 49 },
    { id: 2, gap: 'Unverified Email Address', chargebacks: 25 },
    { id: 3, gap: 'Billing-Shipping Mismatch', chargebacks: 24 },
    { id: 4, gap: 'Lack of IP', chargebacks: 9 },
  ];

  const columns: GridColDef[] = [
    {
      field: 'gap',
      headerName: 'Gap',
      width: 300,
      headerAlign: 'center',
      align: 'left',
    },
    {
      field: 'chargebacks',
      headerName: 'Number of Chargebacks',
      width: 200,
      headerAlign: 'center',
      align: 'center',
    },
  ];

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

        {/* Gaps Mapping Table */}
        <Box sx={{ flex: '1 1 45%', minWidth: 400 }}>
          <Card elevation={2} sx={{ height: '100%' }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                Gaps Mapping
              </Typography>
              <Box sx={{ height: 300, width: '100%' }}>
                <DataGrid
                  rows={gapsData}
                  columns={columns}
                  hideFooter
                  disableRowSelectionOnClick
                  sx={{
                    border: 'none',
                    '& .MuiDataGrid-cell': {
                      borderBottom: '1px solid #e0e0e0',
                    },
                    '& .MuiDataGrid-columnHeaders': {
                      backgroundColor: '#f5f5f5',
                      borderBottom: '2px solid #e0e0e0',
                    },
                    '& .MuiDataGrid-columnHeader': {
                      fontWeight: 600,
                    },
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

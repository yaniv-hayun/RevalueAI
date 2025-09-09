import React from 'react';
import { Box, Typography, Card, CardContent, Button } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Download } from '@mui/icons-material';

const Actions: React.FC = () => {
  // Data for recommended rules table
  const recommendedRulesData = [
    {
      id: 1,
      rule: 'email_address ends with "@topmail"',
      projectedFraudCoverage: '20%',
      projectedFalsePositive: '0%',
      tradeoffRanking: 'Highest',
      rankingColor: '#4caf50'
    },
    {
      id: 2,
      rule: 'icxs_ip_address_score >= 90 AND popular_email_domain',
      projectedFraudCoverage: '18%',
      projectedFalsePositive: '0.01%',
      tradeoffRanking: 'Highest',
      rankingColor: '#4caf50'
    },
    {
      id: 3,
      rule: 'avs_result = "Negative" AND billing_address = shipping_address AND ip_billing_distance',
      projectedFraudCoverage: '34%',
      projectedFalsePositive: '0.75%',
      tradeoffRanking: 'High',
      rankingColor: '#4caf50'
    },
    {
      id: 4,
      rule: 'popular_email_domain is TRUE AND payment_processor_calculated_risk_score > 0.77',
      projectedFraudCoverage: '19%',
      projectedFalsePositive: '2%',
      tradeoffRanking: 'Medium',
      rankingColor: '#ff9800'
    }
  ];

  // Data for recommended integration table
  const recommendedIntegrationData = [
    {
      id: 1,
      source: 'ICXS',
      requiredDataField: 'IP Address',
      projectedImprovement: '62%',
      estimatedCost: '$260 per month'
    }
  ];

  const rulesColumns: GridColDef[] = [
    {
      field: 'rule',
      headerName: 'Rule',
      width: 400,
      headerAlign: 'center',
      align: 'left',
    },
    {
      field: 'projectedFraudCoverage',
      headerName: 'Projected Fraud Coverage',
      width: 200,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'projectedFalsePositive',
      headerName: 'Projected False Positive',
      width: 200,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'tradeoffRanking',
      headerName: 'Tradeoff Ranking',
      width: 150,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => (
        <Typography
          sx={{
            color: params.row.rankingColor,
            fontWeight: 600,
          }}
        >
          {params.value}
        </Typography>
      ),
    },
  ];

  const integrationColumns: GridColDef[] = [
    {
      field: 'source',
      headerName: 'Source',
      width: 150,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'requiredDataField',
      headerName: 'Required Data Field',
      width: 200,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'projectedImprovement',
      headerName: 'Projected Improvement',
      width: 200,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'estimatedCost',
      headerName: 'Estimated Cost',
      width: 200,
      headerAlign: 'center',
      align: 'center',
    },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold' }}>
          Risk Analysis - Action Items
        </Typography>
        <Button
          variant="outlined"
          startIcon={<Download />}
          sx={{
            borderColor: '#0073E5',
            color: '#0073E5',
            textTransform: 'none',
            fontWeight: 600,
            '&:hover': {
              borderColor: '#005bb5',
              backgroundColor: 'rgba(0, 115, 229, 0.04)',
            },
          }}
        >
          Full Report (pdf)
        </Button>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {/* Recommended Rules Table */}
        <Card elevation={2}>
          <CardContent sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
              Recommended Rules
            </Typography>
            <Box sx={{ height: 400, width: '100%' }}>
              <DataGrid
                rows={recommendedRulesData}
                columns={rulesColumns}
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

        {/* Recommended Integration Table */}
        <Card elevation={2}>
          <CardContent sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
              Recommended Integration
            </Typography>
            <Box sx={{ height: 200, width: '100%' }}>
              <DataGrid
                rows={recommendedIntegrationData}
                columns={integrationColumns}
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
  );
};

export default Actions;

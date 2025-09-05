import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
} from '@mui/material';
import Sidebar from './Sidebar';
import FraudVsNonFraudChart from './charts/FraudVsNonFraudChart';
import FraudBreakdownChart from './charts/FraudBreakdownChart';
import ChargebacksTrendChart from './charts/ChargebacksTrendChart';
import ChargebacksByIssuerChart from './charts/ChargebacksByIssuerChart';

const Dashboard: React.FC = () => {

  return (
    <Sidebar>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {/* Top Row */}
        <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
          <Box sx={{ flex: '1 1 45%', minWidth: 300 }}>
            <Card elevation={2} sx={{ height: 400 }}>
              <CardContent sx={{ p: 3, height: '100%' }}>
                <Typography variant="h6" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Fraud vs Non-Fraud Cases
                </Typography>
                <Box sx={{ height: 'calc(100% - 40px)' }}>
                  <FraudVsNonFraudChart />
                </Box>
              </CardContent>
            </Card>
          </Box>

          <Box sx={{ flex: '1 1 45%', minWidth: 300 }}>
            <Card elevation={2} sx={{ height: 400 }}>
              <CardContent sx={{ p: 3, height: '100%' }}>
                <Typography variant="h6" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Breakdown of Fraud Cases
                </Typography>
                <Box sx={{ height: 'calc(100% - 40px)' }}>
                  <FraudBreakdownChart />
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>

        {/* Bottom Row */}
        <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
          <Box sx={{ flex: '1 1 45%', minWidth: 300 }}>
            <Card elevation={2} sx={{ height: 400 }}>
              <CardContent sx={{ p: 3, height: '100%' }}>
                <Typography variant="h6" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Chargebacks and Amounts (with Projections)
                </Typography>
                <Box sx={{ height: 'calc(100% - 40px)' }}>
                  <ChargebacksTrendChart />
                </Box>
              </CardContent>
            </Card>
          </Box>

          <Box sx={{ flex: '1 1 45%', minWidth: 300 }}>
            <Card elevation={2} sx={{ height: 400 }}>
              <CardContent sx={{ p: 3, height: '100%' }}>
                <Typography variant="h6" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Chargebacks Breakdown by Issuer
                </Typography>
                <Box sx={{ height: 'calc(100% - 40px)' }}>
                  <ChargebacksByIssuerChart />
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Box>
    </Sidebar>
  );
};

export default Dashboard;

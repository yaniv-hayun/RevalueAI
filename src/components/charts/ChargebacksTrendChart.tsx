import React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { useTheme } from '@mui/material';

const ChargebacksTrendChart: React.FC = () => {
  const theme = useTheme();
  const months = ['Apr 2025', 'May 2025', 'Jun 2025', 'Jul 2025'];
  const chargebacks = [33, 28, 19, 7];
  const chargebacksProjection = [36, 33, 40, 49];
  // Scale down amounts to be visible on the same axis (divide by 1000)
  const amounts = [30, 27, 19, 7];
  const amountsProjection = [32, 28, 38, 48];

  return (
    <LineChart 
      xAxis={[
        {
          data: months,
          scaleType: 'point',
          label: 'Month',
        },
      ]}
      yAxis={[
        {
          label: 'Count / Amount (K$)',
          min: 0,
          max: 50,
        },
      ]}
      series={[
        {
          id: 'chargebacks',
          data: chargebacks,
          label: 'Chargebacks',
          color: theme.palette.primary.main,
          curve: 'linear',
        },
        {
          id: 'chargebacksProjection',
          data: chargebacksProjection,
          label: 'Projected Chargebacks',
          color: theme.palette.primary.light,
          curve: 'linear',
        },
        {
          id: 'amounts',
          data: amounts,
          label: 'Chargebacks Amount (K$)',
          color: theme.palette.nonFraud.main,
          curve: 'linear',
        },
        {
          id: 'amountsProjection',
          data: amountsProjection,
          label: 'Projected Chargebacks Amount (K$)',
          color: theme.palette.success.light,
          curve: 'linear',
        },
      ]}
      height={300}
      grid={{ vertical: true, horizontal: true }}
      sx={{
        '& .MuiLineElement-series-chargebacksProjection': {
          strokeDasharray: '5 5',
        },
        '& .MuiLineElement-series-amountsProjection': {
          strokeDasharray: '5 5',
        },
      }}
    />
  );
};

export default ChargebacksTrendChart;

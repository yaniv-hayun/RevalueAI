import React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

const ChargebacksTrendChart: React.FC = () => {
  const months = ['Apr 2025', 'May 2025', 'Jun 2025', 'Jul 2025'];
  const chargebacks = [33, 27, 19, 8];
  const chargebacksProjection = [33, 27, 19, 8];
  const amounts = [32000, 27000, 19000, 8000];
  const amountsProjection = [32000, 27000, 19000, 8000];

  return (
    <LineChart
      xAxis={[
        {
          data: months,
          label: 'Month',
        },
      ]}
      yAxis={[
        {
          label: 'Incoming Chargebacks',
          min: 0,
          max: 35,
        },
        {
          label: 'Amount ($)',
          min: 0,
          max: 40000,
        },
      ]}
      series={[
        {
          data: chargebacks,
          label: 'Chargebacks',
          color: '#0073E5',
          curve: 'linear',
        },
        {
          data: chargebacksProjection,
          label: 'Chargebacks (Projection)',
          color: '#4d9eff',
          curve: 'linear',
        },
        {
          data: amounts,
          label: 'Amount ($)',
          color: '#e41e5b',
          curve: 'linear',
        },
        {
          data: amountsProjection,
          label: 'Amount (Projection)',
          color: '#f06292',
          curve: 'linear',
        },
      ]}
      width={undefined}
      height={300}
      margin={{ left: 60, right: 60, top: 20, bottom: 60 }}
    />
  );
};

export default ChargebacksTrendChart;

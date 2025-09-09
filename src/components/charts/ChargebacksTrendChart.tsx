import React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

const ChargebacksTrendChart: React.FC = () => {
  const months = ['Apr 2025', 'May 2025', 'Jun 2025', 'Jul 2025'];
  const chargebacks = [33, 28, 19, 7];
  const chargebacksProjection = [36, 33, 40, 49];
  const amounts = [30000, 27000, 19000, 7000];
  const amountsProjection = [32000, 28000, 38000, 48000];

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
          label: 'Incoming Chargebacks',
          min: 0,
          max: 50,
        },
        {
          label: 'Amount ($)',
          min: 0,
          max: 50000,
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
          color: '#2E7D32',
          curve: 'linear',
        },
        {
          data: amountsProjection,
          label: 'Amount (Projection)',
          color: '#66BB6A',
          curve: 'linear',
        },
      ]}
      width={undefined}
      height={300}
      margin={{ left: 60, right: 60, top: 20, bottom: 60 }}
      grid={{ vertical: true, horizontal: true }}
    />
  );
};

export default ChargebacksTrendChart;

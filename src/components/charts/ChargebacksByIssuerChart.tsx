import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const ChargebacksByIssuerChart: React.FC = () => {
  const data = [
    { issuer: 'Visa', count: 140 },
    { issuer: 'MasterCard', count: 98 },
    { issuer: 'American Express', count: 35 },
  ];

  return (
    <BarChart
      dataset={data}
      xAxis={[
        {
          scaleType: 'band',
          dataKey: 'issuer',
          label: 'Issuer',
        },
      ]}
      yAxis={[
        {
          label: 'Count',
        },
      ]}
      series={[
        {
          dataKey: 'count',
          label: 'Count',
          color: '#0073E5',
        },
      ]}
      colors={['#0073E5', '#e41e5b', '#4d9eff']}
      width={undefined}
      height={300}
      margin={{ left: 60, right: 20, top: 20, bottom: 60 }}
    />
  );
};

export default ChargebacksByIssuerChart;

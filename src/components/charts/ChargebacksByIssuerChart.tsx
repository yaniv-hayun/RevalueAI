import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const ChargebacksByIssuerChart: React.FC = () => {
  const issuers = ['Visa', 'MasterCard', 'American Express'];
  const chargebacksData = [142, 98, 36];

  return (
    <BarChart
      width={undefined}
      height={300}
      margin={{ left: 60, right: 60, top: 20, bottom: 60 }}
      xAxis={[
        {
          data: issuers,
          scaleType: 'band',
          label: 'Issuer',
        },
      ]}
      yAxis={[
        {
          label: 'Count',
          min: 0,
          max: 160,
        },
      ]}
      series={[
        {
          data: chargebacksData,
          label: 'Chargebacks',
        },
      ]}
      colors={['#0073E5', '#e41e5b', '#9C27B0']}
      grid={{ vertical: true, horizontal: true }}
    />
  );
};

export default ChargebacksByIssuerChart;
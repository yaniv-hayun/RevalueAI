import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const FraudBreakdownChart: React.FC = () => {
  const data = [
    { fraudType: 'True Fraud', count: 78 },
    { fraudType: 'Friendly Fraud', count: 32 },
  ];

  return (
    <BarChart
      dataset={data}
      xAxis={[
        {
          scaleType: 'band',
          dataKey: 'fraudType',
          label: 'Fraud Type',
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
          color: '#e41e5b',
        },
      ]}
      width={undefined}
      height={300}
      margin={{ left: 60, right: 20, top: 20, bottom: 60 }}
    />
  );
};

export default FraudBreakdownChart;

import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const FraudVsNonFraudChart: React.FC = () => {
  const data = [
    { category: 'Fraud', count: 110 },
    { category: 'Non-Fraud', count: 220 },
  ];

  return (
    <BarChart
      dataset={data}
      xAxis={[
        {
          scaleType: 'band',
          dataKey: 'category',
          label: 'Category',
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
      // width={undefined}
      height={300}
      // margin={{ left: 60, right: 20, top: 20, bottom: 60 }}
    />
  );
};

export default FraudVsNonFraudChart;

import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import theme from '../../theme';

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
        },
      ]}
      colors={['#0073E5']}
    
      height={300}
      hideLegend={true}
    />
  );
};

export default FraudVsNonFraudChart;

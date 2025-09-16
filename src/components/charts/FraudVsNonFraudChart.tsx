import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import theme from '../../theme';

const FraudVsNonFraudChart: React.FC = () => {
  const dataValues = [110, 220];
  const dataLabels = ['Fraud', 'Non-Fraud'];

  return (
    <BarChart
      series={[
        {
          data: dataValues,
          id: 'fraudData',
          label: 'Count',
        },
      ]}
      xAxis={[
        {
          data: dataLabels,
          scaleType: 'band',
          label: 'Category',
          colorMap: {
            type: 'ordinal',
            values: dataLabels,
            colors: ['#FA003F', '#2E7D32'],
          },
        },
      ]}
      yAxis={[
        {
          label: 'Count',
        },
      ]}
      height={300}
      hideLegend={true}
    />
  );
};

export default FraudVsNonFraudChart;

import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { useTheme } from '@mui/material';

const FraudBreakdownChart: React.FC = () => {
  const theme = useTheme();
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
          color: theme.palette.primary.main,
        },
      ]}
      // width={undefined}
      height={300}
      hideLegend={true}

      // margin={{ left: 60, right: 20, top: 20, bottom: 60 }}
    />
  );
};

export default FraudBreakdownChart;

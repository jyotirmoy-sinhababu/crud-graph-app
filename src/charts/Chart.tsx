import React from 'react';
import { useQuery } from 'react-query';
import { Line } from 'react-chartjs-2';

const Chart: React.FC = () => {
  const fetchCovid19Data = async () => {
    const res = await fetch(
      'https://disease.sh/v3/covid-19/historical/all?lastdays=all'
    );
    return res.json();
  };
  const { data, error, isLoading } = useQuery('covid19Data', fetchCovid19Data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const dates = Object.keys(data.cases);
  const cases = Object.values(data.cases);

  const chartData = {
    labels: dates,
    datasets: [
      {
        label: 'Total Cases',
        data: cases,
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className='line-chart'>
      <Line data={chartData} />
    </div>
  );
};

export default Chart;

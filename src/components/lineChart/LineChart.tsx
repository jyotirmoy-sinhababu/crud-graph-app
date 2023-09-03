import { useQuery } from 'react-query';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
const LineChart = () => {
  const getCovidData = async () => {
    const res = await fetch(
      'https://disease.sh/v3/covid-19/historical/all?lastdays=all'
    );
    return res.json();
  };

  const { data, error, isLoading } = useQuery('covidData', getCovidData);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data</div>;
  }

  console.log(data);

  const covidData = data.cases;

  const labels = Object.keys(covidData);
  const cases = Object.values(covidData);

  // const chartConfigs = {
  //   scales: {
  //     x: {
  //       type: 'time', // Use 'time' scale for dates
  //       time: {
  //         unit: 'day', // Adjust the time unit as needed
  //       },
  //     },
  //     y: {
  //       beginAtZero: true,
  //     },
  //   },
  // };

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };

  const chartData = {
    labels,
    datasets: [
      {
        fill: false,
        label: 'Total Cases',
        data: cases,
        borderColor: 'rgba(255, 255, 255, 0.6)',
      },
    ],
  };

  return (
    <div>
      {Object.keys(covidData)?.length > 0 && (
        <Line options={options} data={chartData} />
      )}
    </div>
  );
};

export default LineChart;

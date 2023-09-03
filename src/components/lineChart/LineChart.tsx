import { useQuery } from 'react-query';

const LineChart = () => {
  const getCovidData = async () => {
    const res = await fetch(
      'https://disease.sh/v3/covid-19/historical/all?lastdays=all'
    );
    return res.json();
  };

  const { data, error, isLoading } = useQuery('covidData', getCovidData);

  console.log(data);

  return <div>LineChart</div>;
};

export default LineChart;

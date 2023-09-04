import LineChart from '../../components/lineChart/LineChart';
import Maps from '../../components/maps/Maps';

const ChartsAndMapsPage = () => {
  return (
    <div className='flex lg:flex-row flex-col h-screen py-2 gap-1'>
      <Maps />
      <LineChart />
    </div>
  );
};

export default ChartsAndMapsPage;

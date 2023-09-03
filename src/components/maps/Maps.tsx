import { useQuery } from 'react-query';

import L, { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';

import loc from '../../assest/images/loc.svg';

const Maps = () => {
  const getFacts = async () => {
    const res = await fetch('https://disease.sh/v3/covid-19/countries');
    return res.json();
  };

  const { data, error, isLoading } = useQuery('randomFacts', getFacts);

  // Default coordinates set to Oslo central station
  const position: LatLngExpression = [0, 0];
  const zoom: number = 4.5;

  const icon: L.DivIcon = L.divIcon({
    iconUrl: loc,
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15, 0],
  });

  return (
    <MapContainer
      style={{ width: '60%', height: '500px' }}
      center={position}
      zoom={zoom}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {data?.map((item: any) => {
        return (
          <Marker
            key={item?.countryInfo?.id}
            position={[item?.countryInfo?.long, item?.countryInfo?.lat]}
            icon={icon}
          >
            <Popup>
              <strong>{item?.country}</strong>
              <p>Total cases:{item?.cases}</p>
              <p>Death:{item?.deaths}</p>
              <p>Recovered:{item?.recovered}</p>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default Maps;

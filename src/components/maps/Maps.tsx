import L, { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';

const Maps = () => {
  // Default coordinates set to Oslo central station
  const position: LatLngExpression = [59.91174337077401, 10.750425582038146];
  const zoom: number = 15;

  return (
    <MapContainer
      style={{ width: '100%', height: '400px' }}
      center={position}
      zoom={zoom}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {
        // Placeholder, we'll put our markers here
      }
    </MapContainer>
  );
};

export default Maps;

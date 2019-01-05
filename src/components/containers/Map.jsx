import React from 'react';
import {
  Map,
  Marker,
  Popup,
  TileLayer,
} from 'react-leaflet';
import styled from 'styled-components';
import leaflet from 'leaflet';

const StyledMap = styled(Map)`
  height: calc(100vh - 100px);
  margin-top: 10px;
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 12pt;
`;
const Subtitle = styled.p`
  margin: 0px !important;
`;

const generateMarkers = (data, opacity) => (
  data.map(({
    name,
    latitude,
    longitude,
    address,
  }) => {
    if (latitude && longitude) {
      return (
        <Marker
          position={[latitude, longitude]}
          title={name}
          opacity={opacity}
          riseOnHover
        >
          <Popup>
            <Title>{name}</Title>
            <Subtitle>{address}</Subtitle>
          </Popup>
        </Marker>
      );
    }
    return null;
  })
);

const heart = leaflet.icon({
  iconUrl: 'http://localhost:3000/images/heart.png',
  iconSize: [20, 18],
});

const hpLogo = leaflet.icon({
  iconUrl: 'http://localhost:3000/images/hp.png',
  iconSize: [20, 18],
});

export default ({ query }) => {
  const {
    data: { schools, school_groups },
    error,
    loading,
  } = query;
  if (loading) return null;
  if (error) return `Error! ${error.message}`;
  const home = [50.853660, 4.370850];
  return (
    <StyledMap center={home} zoom={9}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      />
      <Marker icon={heart} position={home}>
        <Popup><Title>Home sweet home</Title></Popup>
      </Marker>
      <Marker icon={hpLogo} position={[50.879850, 4.436110]}>
        <Popup><Title>HP Belgium</Title></Popup>
      </Marker>
      {generateMarkers(schools, 1)}
      {generateMarkers(school_groups, 0.5)}
    </StyledMap>
  );
};

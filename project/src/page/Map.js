import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapContainer = styled.div`
  width: 400px;
  height: 400px;
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 20px;
`;

const mapStyles = {
  height: '100%',
  width: '100%'
};

function Map() {
  const [currentPosition, setCurrentPosition] = useState(null);

  useEffect(() => {
    // Fonction pour obtenir la position actuelle
    const getPosition = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setCurrentPosition({ lat: latitude, lng: longitude });
          },
          (error) => {
            console.error(error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };

    getPosition();
  }, []);

  return (
    <LoadScript googleMapsApiKey="AIzaSyA5r58pTSnJhhH86Sj9MtlBlMrpqzy9Nk4">
      <MapContainer>
        <GoogleMap
          mapContainerStyle={mapStyles}
          center={currentPosition} // Utilisez la position actuelle comme centre de la carte
          zoom={10}
        >
          {currentPosition && (
            <Marker position={currentPosition} />
          )}
        </GoogleMap>
      </MapContainer>
    </LoadScript>
  );
}

export default Map;

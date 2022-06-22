import React, { useRef } from "react";
import PropTypes from "prop-types";
import { MapContainer, TileLayer } from "react-leaflet";



const MapElement = ({lat, lon, zoom}) => {
  const mapUrl = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png';
  const mapRef = useRef();

  return (   
    <MapContainer ref={mapRef} center={[lon, lat]} zoom={zoom} scrollWheelZoom={false} style={{minHeight: '300px'}}>
      <TileLayer
        setParams={true}
        attribution=''
        url={mapUrl}
      />
    </MapContainer>
  );
};

MapElement.propTypes = {
  lat: PropTypes.number, 
  lon: PropTypes.number, 
  zoom: PropTypes.number
};

MapElement.defaultProps = {
  lat: 10.451526, 
  lon: 51.165691, 
  zoom: 6
};

export default MapElement;
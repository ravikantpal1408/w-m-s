import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Leaflet needs its types
import { LatLngExpression } from "leaflet";

const MapComponent: React.FC = () => {
  const position: LatLngExpression = [28.6139, 77.209]; // New Delhi

  return (
    <MapContainer
      center={position}
      zoom={12}
      scrollWheelZoom={false}
      style={{ height: "500px", width: "100%" }} // important!
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      <Marker position={position}>
        <Popup>
          You are here! <br /> New Delhi
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;

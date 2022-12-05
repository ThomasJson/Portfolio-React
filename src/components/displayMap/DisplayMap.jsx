import React from "react";
import { useMemo } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const DisplayMap = () => {
  const { isLoaded } = useLoadScript({
    // googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    googleMapsApiKey: "AIzaSyDJNA4hJbJZfoZf-RwFd4c3IlIlj5QY7Ao",
  });
  if (!isLoaded) return <div>Loading ...</div>;
  return <Map />;
};

function Map() {
  const center = useMemo(
    () => ({ lat: 50.17558288431941, lng: 3.2343578469916414 }),
    []
  );
  return (
    <GoogleMap zoom={6} center={center} mapContainerClassName="map-container">
      <Marker position={center} />
    </GoogleMap>
  );
}

export default DisplayMap;

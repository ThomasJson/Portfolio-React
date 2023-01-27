import React from "react";
import { useMemo } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import LoadingScreen from "../../screens/loadingScreen/LoadingScreen";

const DisplayMap = () => {
  const { isLoaded } = useLoadScript({
    // googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });
  if (!isLoaded) return <LoadingScreen />;
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

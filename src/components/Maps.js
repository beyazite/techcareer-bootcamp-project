import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
    width: '100%',
    height: '360px'
  };
  
  // temporary map location, recieve it from endpoint
  const center = {
    lat: -3.745,
    lng: -38.523
  };

  // Enis has REACT_APP_MAPS_API_KEY in local .env file. 
  export default function Maps() {
    const {isLoaded } = useJsApiLoader({ id: "event-location",
   googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY});


return isLoaded ? (
    <GoogleMap  mapContainerStyle={containerStyle} center={center} zoom={10} >
        <Marker position={center}></Marker>
    </GoogleMap> 
) : <></>

  }

  
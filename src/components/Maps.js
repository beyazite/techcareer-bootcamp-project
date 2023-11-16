import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
    width: '100%',
    height: '360px'
  };
  
  // Enis has REACT_APP_MAPS_API_KEY in local .env file. 
  export default function Maps({location}) {
    const {isLoaded } = useJsApiLoader({ id: "event-location",
   googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY});

   const center = {
    lat: location.latlng[0],
    lng: location.latlng[1],
   }

return isLoaded ? (
    <GoogleMap  mapContainerStyle={containerStyle} center={center} zoom={10} >
        <Marker position={center}></Marker>
    </GoogleMap> 
) : <></>

  }

  
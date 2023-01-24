import React from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, {
  Marker,
  NavigationControl,
  Popup,
  FullscreenControl,
  GeolocateControl,
} from "react-map-gl";


import { useState, useEffect, useRef } from "react";
function MapBox() {

  const [lng, setLng] = useState(54.37585762735543);
  const [lat, setLat] = useState(24.45677614934833);
  return (
    <div className=" rounded-3xl px-8">
      {/* <div  id="map" className="map-container h-[80vh] rounded-3xl pl-8" /> */}
      <Map
        mapboxAccessToken={"pk.eyJ1Ijoic2hheWFuY3liZXIiLCJhIjoiY2thYnpkbzZoMWJvZjJzbWs1NTF1ZWdjYiJ9.xgAjG8iToZXzqPPHLiD9Kg"}
        style={{
          
          height: "70vh",
          width:"100%"
         
          // border: "2px solid red",
        }}
        initialViewState={{
          longitude: lng,
          latitude: lat,
          zoom:9
        }}
        mapStyle="mapbox://styles/mapbox/light-v11"
      >
        <Marker longitude={lng} latitude={lat} />
        <NavigationControl position="bottom-right" />
        <FullscreenControl />

        <GeolocateControl />
      </Map>
    </div>
  );
}

export default MapBox;

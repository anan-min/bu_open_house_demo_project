"use client";
import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = () => {
  const defaultProps = {
    center: {
      lat: 13.737268,
      lng: 100.532682,
    },
    zoom: 11,
  };
  return (
    <div className="h-screen w-full md:h-screen md:w-auto">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyD8UvDRbWVBlEuNJAm91Ic_-LE6Cf4TrKQ" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={13.737268}
          lng={100.532682}
          text="Bangkok University"
        />
      </GoogleMapReact>
    </div>
  );
};

export default Map;

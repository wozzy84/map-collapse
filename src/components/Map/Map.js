import * as React from "react";
import MapGL, { NavigationControl } from "react-map-gl";
import { useState } from "react";
import { useDispatch } from "react-redux";
import shortid from "shortid";
import Markers from "../Markers/Markers";

const navStyle = {
  marginLeft: "4px",
  marginTop: "4px"
};

const Map = () => {
  const dispatch = useDispatch();

  const defaultViewport = {
    latitude: 37.785164,
    longitude: -100,
    zoom: 3.5,
    bearing: 0,
    pitch: 0
  };

  const [viewport, setViewport] = useState(defaultViewport);

  const updateViewport = viewport => {
    setViewport(viewport);
  };

  const handleClick = e => {
    dispatch({
      type: "MARKER_DATA",
      payload: {
        id: shortid.generate(),
        coordinates: [e.lngLat[0], e.lngLat[1]]
      }
    });
  };

  return (
    <MapGL
      {...viewport}
      width="100%"
      height="300px"
      mapStyle="mapbox://styles/mapbox/dark-v9"
      onViewportChange={updateViewport}
      mapboxApiAccessToken={process.env.REACT_APP_API_KEY}
      onClick={handleClick}
    >
      <Markers />

      <div className="nav" style={navStyle}>
        <NavigationControl onViewportChange={updateViewport} />
      </div>
    </MapGL>
  );
};

export default Map;

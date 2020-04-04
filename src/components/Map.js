import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import shortid from "shortid";
import {useDispatch, useSelector} from 'react-redux'

import "mapbox-gl/dist/mapbox-gl.css";

const styles = {
  width: "100vw",
  height: "calc(100vh - 80px)",
  position: "absolute"
};

const Map = () => {
  const dispatch = useDispatch()
  const markers = useSelector(state => state.markers)
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);



  useEffect(() => {
    mapboxgl.accessToken = process.env.REACT_APP_API_KEY;
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
        center: [0, 0],
        zoom: 5
      });

      map.on("load", () => {
        setMap(map);
        map.resize();
        markers.map(e=>{
          return new mapboxgl.Marker({draggable: true})
          .setLngLat(e.coordinates)
          .addTo(map);
        })
       

      });
      map.on('click', (e)=> {
      
          new mapboxgl.Marker({draggable: true})
            .setLngLat(e.lngLat)
            .addTo(map);
            dispatch({
              type: "MARKER_DATA",
              payload: {
                id: shortid.generate(),
                coordinates: [e.lngLat.lng, e.lngLat.lat]
              }
              

            })
       
            // e.lngLat.lng, e.lngLat.lat
      })

    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map, markers]);


  return <div ref={el => (mapContainer.current = el)} style={styles} />;
};

export default Map;
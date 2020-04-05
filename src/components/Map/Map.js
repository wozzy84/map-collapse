import * as React from 'react';

import MapGL, { NavigationControl} from 'react-map-gl';
import {useState} from 'react'

import {useDispatch} from 'react-redux'
import shortid from "shortid";
import Markers from '../Markers/Markers'


const navStyle = {
  marginLeft: "4px",
  marginTop: "4px",

};

const Map = () => {

const dispatch = useDispatch()


const defaultViewport = {
  latitude: 37.785164,
  longitude: -100,
  zoom: 3.5,
  bearing: 0,
  pitch: 0
}


const [viewport, setViewport] = useState(defaultViewport) 



  const _updateViewport = viewport => {
    setViewport(viewport);
  };


  


  const _handleClick = (e) => {
    console.log(e.lngLat)
      dispatch({
             type: "MARKER_DATA",
             payload: {
               id: shortid.generate(),
              coordinates: [e.lngLat[0],e.lngLat[1]]
             }
         
           })
    
  }

  // render() {
    // const {viewport, marker} = this.state;



    return (
      <MapGL
        {...viewport}
        width="100%"
        height="300px"
        mapStyle="mapbox://styles/mapbox/dark-v9"
        onViewportChange={_updateViewport}
        mapboxApiAccessToken={process.env.REACT_APP_API_KEY}
        onClick={
         _handleClick
        }
      >

        
        <Markers/>
    
        
        

        <div className="nav" style={navStyle}>
          <NavigationControl onViewportChange={_updateViewport} />
        </div>

      </MapGL>
    );
  }
// }

export default Map








// import React, { useEffect, useRef, useState } from "react";
// import mapboxgl from "mapbox-gl";
// import shortid from "shortid";
// import {useDispatch, useSelector} from 'react-redux'

// import "mapbox-gl/dist/mapbox-gl.css";

// const styles = {
//   width: "100vw",
//   height: "calc(100vh - 80px)",
//   position: "absolute"
// };

// const Map = () => {
//   const dispatch = useDispatch()
//   const markers = useSelector(state => state.markers)
//   const [map, setMap] = useState(null);
//   const mapContainer = useRef(null);



//   useEffect(() => {
//     mapboxgl.accessToken = process.env.REACT_APP_API_KEY;
//     const initializeMap = ({ setMap, mapContainer }) => {
//       const map = new mapboxgl.Map({
//         container: mapContainer.current,
//         style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
//         center: [0, 0],
//         zoom: 5
//       });
      

//       map.on("load", () => {
  
//         setMap(map);
//         map.resize();
//         map.remove()

       
//         markers.map(e=>{
//           return new mapboxgl.Marker({draggable: true})
//           .setLngLat(e.coordinates)
//           .addTo(map);
//         })
       

//       });



//       map.on('click', (e)=> {
      
//        new mapboxgl.Marker({draggable: true})
//           .setLngLat(e.lngLat)
//           .addTo(map);
//           dispatch({
//             type: "MARKER_DATA",
//             payload: {
//               id: shortid.generate(),
//               coordinates: [e.lngLat.lng, e.lngLat.lat]
//             }
            
  
//           })
     
       
//     })


//     };

//     if (!map) initializeMap({ setMap, mapContainer });



    
//   }, [map, markers]);

  


//   return <div ref={el => (mapContainer.current = el)} style={styles} />;
// };

// export default Map;
import React from "react";
import MarkerList from "../MarkerList/MarkerList";
import Map from "../Map/Map";
import {useState} from 'react'
// reactstrap components
import { UncontrolledCollapse } from "reactstrap";
// core components



const Accordion = () => {
  const [mapToggle, setMapToggle] = useState(false)
  const [listToggle, setListToggle] = useState(false)

  const handleClick = e => {
    e.preventDefault()
    switch (e.currentTarget.id) {
      case "accordion1":
        setMapToggle(!mapToggle)
        break
     case "accordion2":
        setListToggle(!listToggle)
        break
      default: return
 
  }}

  return (
    <>
      <div className="accordion__item">
        <a
          className="accordion__link primary"
          href="#pablo"
          id="accordion1"
          onClick={handleClick}
        >
          <span>
            <i className="now-ui-icons objects_globe"></i>
            Your Map
          </span>

          {
             mapToggle?<i className="now-ui-icons arrows-1_minimal-up"></i>:<i className="now-ui-icons arrows-1_minimal-down"></i>
          }
        </a>
        <UncontrolledCollapse role="tabpanel" toggler="#accordion1">
          <div className="container map-container">
            <Map />
          </div>
        </UncontrolledCollapse>
      </div>
      <div className="accordion__item">
        <a
          className="accordion__link"
          href="#pablo"
          id="accordion2"
          onClick={handleClick}
        
        >
          <span>
            <i className="now-ui-icons location_pin"></i> Your Locations
          </span>

          {
             listToggle?<i className="now-ui-icons arrows-1_minimal-up"></i>:<i className="now-ui-icons arrows-1_minimal-down"></i>
          }
         
        </a>
        <UncontrolledCollapse role="tabpanel" toggler="#accordion2">
          <MarkerList />
        </UncontrolledCollapse>
      </div>
    </>
  );
};

export default Accordion;

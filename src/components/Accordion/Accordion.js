import React from "react";
import MarkerList from "../MarkerList/MarkerList";
import Map from "../Map/Map";
// reactstrap components
import { UncontrolledCollapse } from "reactstrap";
// core components


const Accordion = () => {
  return (
    <>
      <div className="accordion__item">
        <a className="accordion__link primary"
          href="#pablo"
          id="exampleAccordion1"
          onClick={e => e.preventDefault()}
        >
          Your Map
        </a>
        <UncontrolledCollapse role="tabpanel" toggler="#exampleAccordion1">
        <div className="container map-container">
        <Map />
        </div>
        </UncontrolledCollapse>
      </div>
      <div className="accordion__item">
        <a className="accordion__link"
          href="#pablo"
          id="exampleAccordion2"
          onClick={e => e.preventDefault()}
        >
          Your Locations
        </a>
        <UncontrolledCollapse role="tabpanel" toggler="#exampleAccordion2">
          <MarkerList />
        </UncontrolledCollapse>
      </div>
    </>
  );
}

export default Accordion;

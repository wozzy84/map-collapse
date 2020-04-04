import React from "react";
// reactstrap components
import { UncontrolledCollapse } from "reactstrap";
// core components

function Example(){
  return (
    <>
      <div className="item">
        <a
          href="#pablo"
          id="exampleAccordion1"
          onClick={e => e.preventDefault()}
        >
          Toggle item
        </a>
        <UncontrolledCollapse
          role="tabpanel"
          toggler="#exampleAccordion1"
          defaultOpen
        >
          <p className="mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            pretium lorem non vestibulum scelerisque. Proin a vestibulum sem,
            eget tristique massa. Aliquam lacinia rhoncus nibh quis ornare.
          </p>
        </UncontrolledCollapse>
      </div>
      <div className="item">
        <a
          href="#pablo"
          id="exampleAccordion2"
          onClick={e => e.preventDefault()}
        >
          Toggle item 2
        </a>
        <UncontrolledCollapse role="tabpanel" toggler="#exampleAccordion2">
          <p className="mb-3">
            Donec at ipsum dignissim, rutrum turpis scelerisque, tristique
            lectus. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. Vivamus nec dui turpis. Orci
            varius natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus.
          </p>
        </UncontrolledCollapse>
      </div>
    </>
  );
}

export default Example;
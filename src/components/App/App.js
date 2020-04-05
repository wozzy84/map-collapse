import React from "react";
import Accordion from "../Accordion/Accordion";

const App = () => {
  return (
    <>
      <div className="container main-container">
        <div className="row main-container__row">
          <div className="col">
            {" "}
            <Accordion />{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

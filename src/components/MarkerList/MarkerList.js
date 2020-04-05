import React from "react";
import { Button } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import shortid from 'shortid'

const MarkerList = () => {
  const markers = useSelector(state => state.markers);
  const dispatch = useDispatch();
  const handleClick = e => {
    dispatch({
      type: "REMOVE_MARKER",
      id: e.currentTarget.id
    });
  };
  return (
    <>
      <ul className="marker-list">
        {markers.length ? null : (
          <div className="alert alert-warning" role="alert">
            You don't have any locations yet.
          </div>
        )}
        {markers.map((e, index) => {
          return (
            <li className="marker-list__element" key={shortid.generate()}>
              <span className="marker-list__container">
                {" "}
                <span className="marker-list__number">{index + 1}.</span>
                <span className="marker-list__span marker-list__span-break">
                  <span className="marker-list__span">Latitude: 
                  <span className="badge badge-neutral marker-list__span">
                    {" "}
                    {e.coordinates[0]}
                  </span>
                  </span>
                  <span className="marker-list__span">Longtitude: 
                  <span className="badge badge-neutral marker-list__span">
                    {" "}
                    {e.coordinates[1]}
                    </span>
                  </span>
                </span>
              </span>
              <span>
              <Button
                className="btn-round btn-remove"
                color="danger"
                id={e.id}
                onClick={handleClick}
              >
                remove
              </Button>
              <Button
                className="btn-round  btn-icon btn-remove-small"
                color="danger"
                id={e.id}
                onClick={handleClick}
              >
                  <i className="now-ui-icons ui-1_simple-delete"></i>
                  
              </Button>
              </span>
              
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MarkerList;

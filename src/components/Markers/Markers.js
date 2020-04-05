import React from "react";
import { Marker } from "react-map-gl";
import { useSelector, useDispatch } from "react-redux";
import Pin from "../Pin/pin";

const Markers = () => {
    
  const dispatch = useDispatch();
  const collection = useSelector(state => state.markers);
  const dragStart = useSelector(state => state.draggedMarker);

  const onMarkerDragEnd = event => {
    dispatch({
      type: "DRAG_END",
      payload: {
        start: dragStart,
        end: event.lngLat
      }
    });
  };

  const onMarkerDragStart = event => {
    dispatch({
      type: "DRAG_START",
      coordinates: event.lngLat
    });
  };

  return (
    <>
      {collection.map(e => {
        return (
          <Marker
            longitude={e.coordinates[0]}
            latitude={e.coordinates[1]}
            offsetTop={-20}
            offsetLeft={-10}
            draggable
            onDragStart={onMarkerDragStart}
            onDragEnd={onMarkerDragEnd}
            id={e.id}
            key={e.id}
          >
            <Pin size={20} />
          </Marker>
        );
      })}
    </>
  );
};

export default Markers;

function handleMarkers(state = [], action) {
  switch (action.type) {
    case "MARKER_DATA":
      return [...state, action.payload];
    case "REMOVE_MARKER":
      const filteredMarkers = state.filter(e => e.id !== action.id);
      return filteredMarkers;
    case "DRAG_END":
      const dragedMarker = state.filter(
        e =>
          e.coordinates[1].toFixed(4) === action.payload.start[1].toFixed(4) &&
          e.coordinates[0].toFixed(4) === action.payload.start[0].toFixed(4)
      );
      if (dragedMarker[0]) {
        const newState = state.map(element => {
          if (element.id === dragedMarker[0].id) {
            return {
              ...element,
              coordinates: action.payload.end
            };
          } else return element;
        });
        return newState;
      } else return state;
    default:
      return state;
  }
}

function handleDrag(state = null, action) {
  switch (action.type) {
    case "DRAG_START":
      return action.coordinates;
    default:
      return state;
  }
}

export { handleMarkers, handleDrag };

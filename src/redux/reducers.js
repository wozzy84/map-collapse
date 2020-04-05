import { isConstructSignatureDeclaration } from "typescript";

function handleMarkers(state = [{ id: "asoda", coordinates: [0, 0] }], action) {
  switch (action.type) {
    case "MARKER_DATA":
      return [...state, action.payload];
    case "REMOVE_MARKER":
      const filteredMarkers = state.filter(e => e.id != action.id);
      return filteredMarkers;
    case "DRAG_END":
      const dragedMarker = state.filter(
        e =>
          e.coordinates[1].toFixed(4) === action.payload.start[1].toFixed(4) &&
          e.coordinates[0].toFixed(4) === action.payload.start[0].toFixed(4)
      );
      if (dragedMarker[0]) {
        const filteredState = state.filter(e => e.id != dragedMarker[0].id);
        dragedMarker[0].coordinates = action.payload.end;
        return [...filteredState, dragedMarker[0]];
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

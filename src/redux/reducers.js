function handleMarkers (state=[], action) {
  switch(action.type) {
    case "MARKER_DATA":
      return [
        ...state, action.payload
      ]
      default:
        return state
  }

}

export {handleMarkers}

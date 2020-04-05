import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import {handleMarkers, handleDrag} from './reducers'

const reducers = combineReducers({
  markers: handleMarkers,
  draggedMarker: handleDrag
});

//store
const store = createStore(reducers, applyMiddleware(logger));

export { store };

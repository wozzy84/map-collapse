import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import {handleMarkers} from './reducers'

const reducers = combineReducers({
  markers: handleMarkers
});

//store
const store = createStore(reducers, applyMiddleware(logger));

export { store };

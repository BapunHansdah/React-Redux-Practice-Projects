import {Lists,searchedMovie} from "./List";
import {seatVal,club,executive} from "./seatList"
import { combineReducers } from "redux";
const reducers = combineReducers({Lists,seatVal,searchedMovie,club,executive});
export default reducers;
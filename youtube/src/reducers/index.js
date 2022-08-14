//for combining the reducers

import {ObjLists,fetched_ObjLists,searchedMovie} from "./List";
import { combineReducers } from "redux";
const reducers = combineReducers({ObjLists,fetched_ObjLists,searchedMovie});
export default reducers;
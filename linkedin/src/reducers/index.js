import {Lists,searchedMovie} from "./List";
import {jobLists} from './r_JobList'
import {userLists} from './r_UserList'
import { combineReducers } from "redux";
const reducers = combineReducers({Lists,searchedMovie,jobLists,userLists});
export default reducers;
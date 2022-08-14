import {Lists,searchedMovie} from "./List";
import {transactionData,Text,Amount} from "./expenceData"
import { combineReducers } from "redux";
const reducers = combineReducers({Lists,searchedMovie,transactionData,Text,Amount});
export default reducers;
import {Lists,searchedMovie} from "./List";
import {products,searchedKey,addToCart} from './productList.js'
import { combineReducers } from "redux";
const reducers = combineReducers({Lists,searchedMovie,products,searchedKey,addToCart});
export default reducers;
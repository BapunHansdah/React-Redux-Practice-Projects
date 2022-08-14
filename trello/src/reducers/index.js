import {todoList,modal,setName,setTodo} from "./TodoList";
import { combineReducers } from "redux";
const reducers = combineReducers({todoList,modal,setName,setTodo});
export default reducers;
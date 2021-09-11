import {combineReducers} from "redux";
import todo from "./todoReducer"


const createRootReducer = () => combineReducers({
    todo
})

export default createRootReducer
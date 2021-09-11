import {nanoid} from "nanoid"
import t from "../actionTypes/todoActionTypes"


const ADD_TODO = "ADD_TODO"

const  getTodosFromLS = () => {
    let todos
    try {
        todos = JSON.parse(localStorage.getItem('todolist')) || []
    } catch (e) {
        todos = []
    }
    return todos
}

const initialState = {
    todolist: getTodosFromLS(),
}

const todoReducer = (state = initialState,action) => {
    switch (action.type) {
        case t.ADD_TODO:
            return {
                ...state,
                todolist: action.updatedTodolist
            }
        default:
            return state
    }
}






export default todoReducer
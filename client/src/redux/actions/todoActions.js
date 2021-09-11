import {nanoid} from "nanoid";
import t from "../actionTypes/todoActionTypes"

export const addTodo = (title, description) => {
    return (dispatch,getState) => {
        const store = getState()
        const todoList = store.todo.todoList
        const id = nanoid()
        const data = (new Date()).toLocaleString()

        const newTodo = {
            id,
            data,
            title,
            description,
            isDone: false
        }

        const  updatedTodoList = [...todoList, newTodo]
        localStorage.setItem('todoList', JSON.stringify(updatedTodoList))

        return dispatch({type:t.ADD_TODO,updatedTodoList})
    }
}
import React, {useState} from "react"
import Header from "./Header"
import Todolist from "./Todolist"
import {useSelector,useDispatch} from "react-redux";
import {addTodo} from "../redux/actions/todoActions";

function Main() {
    const user = 'admin'


const dispatch = useDispatch()
const todolist = useSelector((store) => store.todo.todolist)


    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')

    const changeTitle = (e) => setTitle(e.target.value)
    const changeDescription = (e) => setDescription(e.target.value)

    const addTodoClick = () => {
        dispatch(addTodo(title,description))
        setTitle('')
        setDescription('')

    }

    // const checkTodo = (id, done) => {
    //     const updatedTodolist = todolist.map(it => it.id === id ? {...it, isDone: !done} : it)
    //     localStorage.setItem('todoList', JSON.stringify(updatedTodolist))
    //  setTodolist(updatedTodolist)
    // }
    //
    // const deleteTodo = (id) => {
    //     const updatedTodolist = todolist.filter(it => it.id !== id)
    //     localStorage.setItem('todoList', JSON.stringify(updatedTodolist))
    //     setTodolist(updatedTodolist)
    // }

    return (
        <div>
        <Header title = {title}/>
          <div className="inputs-container">
              <input onChange={changeTitle} type="text" placeholder="Введите заголовок" className="input" value={title}/>
              <input onChange={changeDescription}  type="text" placeholder="Введите описание" className="input" value={description}/>
          </div>
            <div className="button">
                <button type="button"  onClick={addTodoClick} disabled={title === '' || description === ''} >
                    Добавить
                </button>
            </div>
    <Todolist todolist={todolist}/>
</div>
    );
}
export default Main;

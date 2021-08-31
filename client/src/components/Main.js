import React, {useState} from "react"
import {nanoid} from "nanoid"
import Header from "./Header"
import Todos from "./Todos"

function Main() {
    const  getTodosFromLS = () => {
        let todos
        try {
        todos = JSON.parse(localStorage.getItem('todolist')) || []
        } catch (e) {
            todos = []
        }
        return todos
    }


    const [todolist, setTodolist] = useState(getTodosFromLS())
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')

    const changeTitle = (e) => setTitle(e.target.value)
    const changeDescription = (e) => setDescription(e.target.value)
    const addTodo = () => {
        const id = nanoid()
        const data = (new Date()).toLocaleString()

        const newTodo = {
            id,
            data,
            title,
            description,
            isDone:false
        }


        const  updatedTodolist = [...todolist, newTodo]
        localStorage.setItem('todolist', JSON.stringify(updatedTodolist))

        setTodolist(updatedTodolist)
        setTitle('')
        setDescription('')

    }

    const checkTodo = (id, done) => {
        const updatedTodolist = todolist.map(it => it.id === id ? {...it, isDone: !done} : it)
        localStorage.setItem('todoList', JSON.stringify(updatedTodolist))
     setTodolist(updatedTodolist)
    }

    const deleteTodo = (id) => {
        const updatedTodolist = todolist.filter(it => it.id !== id)
        localStorage.setItem('todoList', JSON.stringify(updatedTodolist))
        setTodolist(updatedTodolist)
    }

    return (
        <div>
        <Header title = {title} test={'123456'}/>
          <div className="inputs-container">
              <input onChange={changeTitle} type="text" placeholder="Введите заголовок" className="input" value={title}/>
              <input onChange={changeDescription}  type="text" placeholder="Введите описание" className="input" value={description}/>
          </div>
            <div className="button">
                <button type="button" onClick={addTodo} disabled={title === '' || description === ''} >
                    Добавить
                </button>
            </div>

            <div>
                {
                    todolist.map (it => {
                    return (
                        <Todos todo={it}/>
                        // <div key={it.id} className={`todo-list ${it.isDone ? 'done-todo' : 'not-done-todo' }`}>
                        //     <div className="todo-list-item">{it.title}</div>
                        //     <div className="todo-list-item">{it.description}</div>
                        //     <div className="todo-list-item">{it.data}</div>
                        //     <div className="todo-list-item">
                        //         <button onClick={() => checkTodo(it.id, it.isDone)} type="button">
                        //             {it.isDone ? 'Не выполнено' : 'Выполнено'}
                        //         </button>
                        //         <button onClick={() => deleteTodo(it.id)} type="button">
                        //             Удалить
                        //         </button>
                        //     </div>
                        //
                        // </div>
                    )
                    })
                }
            </div>

        </div>
    );
}

export default Main;

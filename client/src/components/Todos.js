import React from "react";

const Todos = ({todo}) => {
    return (
        <div key={todo.id} className={`todo-list ${todo.isDone ? 'done-todo' : 'not-done-todo'}`}>
            <div className="todo-list-item">{todo.title}</div>
            <div className="todo-list-item">{todo.description}</div>
            <div className="todo-list-item">{todo.date}</div>
            <div className="todo-list-item">
                {/*<button onClick={() => checkTodo(todo.id, todo.isDone)} type="button">*/}
                {/*    {todo.isDone ? 'Не выполнено' : 'Выполнено'}*/}
                {/*</button>*/}
                {/*<button onClick={() => deleteTodo(todo.id)} type="button">*/}
                {/*    Удалить*/}
                {/*</button>*/}
                Кнопки
            </div>
        </div>
    )
}
export default Todos
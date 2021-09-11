import React from 'react';

const TodoCard = (props) => {
    return (
            <div className={`todo-list ${props.todo.isDone ? 'done-todo' : 'not-done-todo'}`}>
                <div className="todo-list-item">{props.todo.title}</div>
                <div className="todo-list-item">{props.todo.description}</div>
                <div className="todo-list-item">{props.todo.data}</div>
                <div className="todo-list-item">
                    {/*<button onClick={() => checkTodo(it.id, it.isDone)} type="button">*/}
                    {/*    {it.isDone ? 'Не выполнено' : 'Выполнено'}*/}
                    {/*</button>*/}
                    {/*<button onClick={() => deleteTodo(it.id)} type="button">*/}
                    {/*    Удалить*/}
                    {/*</button>*/}
                    Кнопки
                </div>
            </div>

    );
};

export default TodoCard;
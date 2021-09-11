import React from 'react';
import TodoCard from "./TodoCard";

const Todolist = (props) => {
    return (
        <div>
            {
                props.todolist.map(it => {
                    return (
               <TodoCard key={it.id} todo={it}/>

                    )
                })
            }
        </div>
    );
}

export default Todolist;

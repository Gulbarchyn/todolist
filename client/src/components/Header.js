import React from 'react'
import {useSelector} from "react-redux";

const Header = () => {
    const temp = useSelector((store) => store.todo.temp)
    return (
        <header className="header">
            <div> Todo App</div>
          <div>{temp}</div>
        </header>
    );
};

export default Header;
import React from 'react'

const Header = (props) =>{
    console.log(props)
    return (
        <header className="header">
            <div> Todo App</div>
            <div>Поиск: {props.test}</div>
        </header>
    );
};

export default Header;
import React from "react";
import '../styles/componentStyles/TodoList.css'


const TodoList = (props) =>{
    return(
        <ul className="todo-list" >
            {props.children}
        </ul>
    ) 
}

export default TodoList;
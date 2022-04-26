import React from "react";
import '../styles/componentStyles/TodoItem.css'

const TodoItem = (props) =>{



    return(
        <li className={`todo-item ${props.completed && "todo-item-active"}`}>
            <span 
            onClick={props.onComplete}
            className={`icon-check ${props.completed && "icon-check-active"}`} >O</span>

            <p className={`item-text ${props.completed && "item-text-active"}`}>{props.text}</p>

            <span
            onClick={props.onDelete}
            className="icon-delete">X</span>
        </li>
    )
        
}

export default TodoItem;
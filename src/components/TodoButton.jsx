import React from "react";
import '../styles/componentStyles/TodoButton.css'

const TodoButton = (props) =>{




    return(
        <button 
        className="todo-button"
        onClick={() => props.setOpenModal(true)}
        >
        +
        </button>
    ) 
}

export default TodoButton;
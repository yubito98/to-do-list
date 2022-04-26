import React from "react";
import '../styles/componentStyles/TodoButton.css'

const TodoButton = () =>{

    const click = () =>{
        alert("Has dado Click al boton")
    }

    return(
        <button 
        className="todo-button"
        onClick={click}
        >
        +
        </button>
    ) 
}

export default TodoButton;
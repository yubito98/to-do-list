import React from "react";

const TodoCounter = (props) =>{
    return(
        <h2>Has completado {props.completed} de {props.total} tareas </h2>
    ) 
}

export default TodoCounter;
import React from "react";
import { TodoContext } from "./TodoContext";

const TodoCounter = () =>{

    const {totalTodos, completedTodos} = React.useContext(TodoContext);

    return(
        <h2>Has completado {completedTodos} de {totalTodos} tareas </h2>
    ) 
}

export default TodoCounter;
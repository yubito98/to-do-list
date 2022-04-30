import React from "react";
import { TodoContext } from "./TodoContext";

const TodoCounter = () =>{

    const {totalTodos, completedTodos} = React.useContext(TodoContext);

    return(
        <h2>You have completed {completedTodos} of {totalTodos} tasks </h2>
    ) 
}

export default TodoCounter;
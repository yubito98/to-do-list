import React from "react";
import { TodoContext } from "./TodoContext";
import '../styles/componentStyles/TodoSearch.css'

const TodoSearch = () =>{

    const{search, setSearch} = React.useContext(TodoContext);
   

    const searchChange = (event) =>{
        console.log(event.target.value);
        setSearch(event.target.value);
    }

    return(
        <>
            <input 
            onChange={searchChange}
            className="todo-search" 
            value={search}
            placeholder="Ingresa tu busqueda" />

        </>
       
    ) 
}

export default TodoSearch;
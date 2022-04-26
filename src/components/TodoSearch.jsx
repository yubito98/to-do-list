import React from "react";
import '../styles/componentStyles/TodoSearch.css'

const TodoSearch = ({search, setSearch}) =>{

   

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
import React from "react";
import useLocalStorage from "./useLocalStorage.js";

const TodoContext = React.createContext();

const TodoProvider = (props) =>{

    const [openModal, setOpenModal] = React.useState(false);

    const {
       item:todos,
       saveItem:saveTodos,
       loading,
       error,
      } = useLocalStorage("TODOS_V1", [])

    const completedTodos = todos.filter(todo => todo.completed == true).length;
    const totalTodos= todos.length
  
    const [search, setSearch] = React.useState("");
  
    let searchTodos = [];
  
    if (!search.length >= 1){
      searchTodos = todos;
    } else {
      searchTodos = todos.filter(todo =>{
        const todoText = todo.text.toLowerCase();
        const searchText = search.toLowerCase();
        return todoText.includes(searchText);
        
      });
    }

    const addTodo = (text) => {

      const newTodos = [...todos];
      newTodos.push({
        completed:false,
        text:text
      })
      saveTodos(newTodos);
  
    }
  
    const completeTodo = (text) => {
      const todoIndex = todos.findIndex(todo => todo.text === text)
  
      const newTodos = [...todos];
      newTodos[todoIndex].completed = true;
      saveTodos(newTodos);
  
    }
  
    const deleteTodo = (text) => {
      const todoIndex = todos.findIndex(todo => todo.text === text)
  
      const newTodos = [...todos];
      newTodos.splice(todoIndex, 1);
      saveTodos(newTodos);
  
    }


    return(
        <TodoContext.Provider value={{
            error,
            loading,
            completedTodos,
            totalTodos,
            search,
            setSearch,
            searchTodos,
            addTodo,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
        }} >
            {props.children}
        </TodoContext.Provider>
    )
}

export {TodoContext, TodoProvider}
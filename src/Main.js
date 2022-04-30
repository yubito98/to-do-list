import React from "react";
import { TodoProvider } from "./components/TodoContext.jsx";
import App from "./App.jsx";


const Main = () =>{

    return(
      <TodoProvider>
        <App/>
      </TodoProvider>
    )
}


export default Main;
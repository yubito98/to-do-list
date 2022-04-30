import React from 'react';
import { TodoContext } from './components/TodoContext';
import TodoCounter from './components/TodoCounter';
import TodoSearch from './components/TodoSearch';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import TodoButton from './components/TodoButton';
import Modal from './components/Modal';
import TodoForm from './components/TodoForm';
import './styles/componentStyles/app.css';


function App() {

  const {
    error, 
    loading,
    searchTodos, 
    completeTodo, 
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <div className='app'>

      <TodoCounter/>
      <TodoSearch/>

      <TodoList>
      {error && <p>There is an error</p>}
      {loading && <p  style={{marginBottom:"10px"}}>Loading ...</p>}
      {(!loading && !searchTodos.length) && <p style={{marginBottom:"10px"}} >Haz click en el boton para crear tu primera tarea.</p>} 
      {searchTodos.map(todo =>(
        <TodoItem 
        key={todo.text} 
        text={todo.text}
        completed={todo.completed}
        onComplete={() => completeTodo(todo.text)}
        onDelete={() => deleteTodo(todo.text)}
        />
      ))}
    </TodoList>

    <TodoButton
    setOpenModal={setOpenModal}
    />

    {!!openModal && (
      <Modal>
        <TodoForm/>
      </Modal>
    )}  

    </div>
  );
}

export default App;

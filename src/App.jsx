import React from 'react';
import TodoCounter from './components/TodoCounter';
import TodoSearch from './components/TodoSearch';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import TodoButton from './components/TodoButton';
import './styles/componentStyles/app.css';



const defaultTodos =[
  {text:"Estudiar", completed:false},
  {text:"Trabajar", completed:false},
  {text:"Hacer Ejercicio", completed:false},
  {text:"Personal Website", completed:false},
]

function App() {

  const [todos, setTodos] = React.useState(defaultTodos);

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

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)

    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);

  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)

    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);

  }


  return (
    <div className='app'>

      <TodoCounter
      completed={completedTodos}
      total={totalTodos}
      />

      <TodoSearch
      search={search}
      setSearch={setSearch}
      />

      <TodoList>
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
      <TodoButton/>
    </div>
  );
}

export default App;

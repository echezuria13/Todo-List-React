import React, { useState } from 'react';
import TodoCounter from './components/TodoCounter';
import TodoSearch from './components/TodoSearch';
import TodoItem from './components/TodoItem';
import TodoList from './components/TodoList';
import CreateTodoButton from './components/CreateTodoButton';

const defaultTodos = [
    {text: 'Cortar cebolla', completed: false},
    {text: 'Tomar el curso de rect', completed: false},
    {text: 'Hacer la tarea', completed: false},
    {text: 'Lavar la ropa', completed: false}
]


const App = () => {

  const [todos, setTodos] = useState(defaultTodos)


  const [searchValue, setSearchValue] = useState('')


  const completedTodos = todos.filter(todo => !!todo.completed).length //Es falso que mi variable es falsa es dicir devuelve verdadero
  const totalTodos = todos.length


  let searchedTodos = [];

  if (!searchValue.length >= 1){
    searchedTodos = todos
  } else {

    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLocaleLowerCase();

      return todoText.includes(searchText);
    })
  }


  
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;   
    setTodos(newTodos)}
    
    
    /*
    [todoIndex] = {
      text: todos[todoIndex].text,
      completed: true,
    };
    */

    const deleteTodo = (text) => {
      const todoIndex = todos.findIndex(todo => todo.text === text);

      const newTodos = [...todos];
      newTodos.splice(todoIndex, 1)
      setTodos(newTodos)}
    
    
   
    
  return (
    <>
       <TodoCounter
          total={totalTodos}
          completed={completedTodos}
       />

       <TodoSearch
        searchValue={searchValue} 
        setSearchValue={setSearchValue}
       />
            
        
        <TodoList>
            {searchedTodos.map(todo => (
            <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
            />))}  
        </TodoList>
        
       <CreateTodoButton/>
    </>
  );
}

export default App;

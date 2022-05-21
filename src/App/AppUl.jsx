import TodoCounter from '../TodoCounter';
import TodoSearch from '../TodoSearch';
import TodoItem from '../TodoItem';
import TodoList from '../TodoList';
import CreateTodoButton from '../CreateTodoButton';

const AppUl = ({

    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,

  }) => {

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

export default AppUl;

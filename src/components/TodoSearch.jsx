import { useState } from 'react';
import './TodoSearch.css'

const TodoSearch = ({searchValue, setSearchValue}) => {


  const onSearchValueChange = (event) => {
    console.log(event.target.value); 
    setSearchValue(event.target.value)
  }

  return (
    <div>
     <input 
     className='TodoSearch' 
     placeholder='Escribe una Tarea'
     value={searchValue}
     onChange={onSearchValueChange}
     />
    </div>
  );
} 

export default TodoSearch;

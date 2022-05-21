import './TodoCounter.css'

const TodoCounter = ({total, completed}) => {

  return (
    <div>
        <h2 className='TodoCounter'>Has completado {completed} de {total} TODOS</h2>
    </div>
  );
}

export default TodoCounter;




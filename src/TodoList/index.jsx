import './TodoList.css'

const TodoList = (props) => {
  return (
   <section>
     <ul>
       {props.children} {/* con props.children le estamos pasando la iteracion del TodoItem */}
     </ul>
   </section>
  );
}

export default TodoList;

import './CreateTodoButton.css'

const CreateTodoButton = (props) => {

const onClickButton = () => {
  alert('Has dado click')
}

  return (
    <div>
        <button 
        className="CreateTodoButton"
        onClick={onClickButton}
        >
          +
        </button>
    </div>
  );
}

export default CreateTodoButton;

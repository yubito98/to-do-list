import React from "react";
import { TodoContext } from "./TodoContext";
import '../styles/componentStyles/TodoForm.css'


const TodoForm = () =>{

    const [newTodoValue, setNewTodoValue] = React.useState("")

    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext)


    const onChange = (event) =>{
        setNewTodoValue(event.target.value);
    }

    const onCancel = () =>{
        setOpenModal(false)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false)
    }

    return(
        <form onSubmit={onSubmit} >
            <label>Write task</label>
            <textarea 
            value={newTodoValue}
            onChange={onChange}
            placeholder="What do you need to do?" cols="15" rows="5"></textarea>
            <div className="form-buttons">

                <button 
                type="submit"
                className="button add-btn">Add Task
                </button>

                <button 
                type="button"
                onClick={onCancel}
                className="button cancel-btn" >Cancelar
                </button>

            </div>
        </form>
    )
}

export default TodoForm;
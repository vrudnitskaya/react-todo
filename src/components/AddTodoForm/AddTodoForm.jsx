import InputWithLabel from "../InputWithLabel/InputWithLabel";
import styles from './AddTodoForm.module.css';
import { useState } from "react";

const AddTodoForm = ({onAddTodo}) => {
    const [todoTitle, setTodoTitle] = useState('');
    
    const handleTitleChange = (event) => {
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    };
    
    const handleAddTodo = (event) => {
        event.preventDefault();
        todoTitle.trim() ? onAddTodo(todoTitle) : alert('Please add to-do');
        setTodoTitle('');
    };
    
    return (
        <form onSubmit={handleAddTodo} className={styles.form}>
            <InputWithLabel 
                id="todoTitle"
                type="text"
                name="title"
                onChange={handleTitleChange} 
                value={todoTitle}
                placeholder="Add things to do"
                >
                </InputWithLabel> 
            <button type="submit">Add</button>
        </form>
    );
}

export default AddTodoForm;
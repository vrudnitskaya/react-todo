import InputWithLabel from "./InputWithLabel";
import { useState } from "react";

const AddTodoForm = ({onAddTodo}) => {
    const [todoTitle, setTodoTitle] = useState('');
    
    const handleTitleChange = (event) => {
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    };
    
    const handleAddTodo = (event) => {
        event.preventDefault();
        onAddTodo({title: todoTitle, id: Date.now()});
        setTodoTitle('');
    };
    
    return (
        <form onSubmit={handleAddTodo}>
            <InputWithLabel 
                id="todoTitle"
                type="text"
                name="title"
                label="Title: "
                isFocused
                onChange={handleTitleChange} 
                value={todoTitle}
                >
                Title: </InputWithLabel> 
            <button type="submit">Add</button>
        </form>
    );
}

export default AddTodoForm;
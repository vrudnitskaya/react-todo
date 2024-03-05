const AddTodoForm = () => {
    const handleAddTodo = (event) => {
        event.preventDefault();
        const todoTitle = document.querySelector('[name="title"]').value;
        console.log(todoTitle);
        document.querySelector('[name="title"]').value = '';
    };
    
    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Title</label>
            <input id="todoTitle" type="text" name="title"/>
            <button type="submit">Add</button>
        </form>
    );
}

export default AddTodoForm;
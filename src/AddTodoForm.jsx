const AddTodoForm = () => {
    const handleAddTodo = (event) => {
        event.preventDefault();
        const todoTitle = document.querySelector('#todoTitle').value;
        console.log(todoTitle);
        document.querySelector('#todoTitle').value = '';
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
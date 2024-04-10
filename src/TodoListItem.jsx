const TodoListItem = ({title, id, onRemoveTodo}) => {
    return (
        <li>
            {title}
            <button type="button" onClick={() => onRemoveTodo(id)}>Remove</button>
        </li>
    );
}

export default TodoListItem;
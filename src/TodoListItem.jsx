const TodoListItem = ({title, id, onRemoveTodo}) => {
    return (
        <li>
            {title}
            <button type="button" onClick={() => onRemoveTodo(id)}>X</button>
        </li>
    );
}

export default TodoListItem;
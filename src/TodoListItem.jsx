import style from './TodoListItem.module.css';

const TodoListItem = ({title, id, onRemoveTodo}) => {
    return (
        <li className={style.listItem}>
            {title}
            <button type="button" onClick={() => onRemoveTodo(id)}>X</button>
        </li>
    );
}

export default TodoListItem;
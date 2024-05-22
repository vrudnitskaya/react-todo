import { RxCross1 } from "react-icons/rx";
import style from './TodoListItem.module.css';

const TodoListItem = ({title, id, onRemoveTodo}) => {
    return (
        <li className={style.listItem}>
            {title}
            <button type="button" onClick={() => onRemoveTodo(id)}><RxCross1 /></button>
        </li>
    );
}

export default TodoListItem;
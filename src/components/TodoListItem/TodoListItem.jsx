import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";
import style from './TodoListItem.module.css';
import { useState } from "react";

const TodoListItem = ({ title, id, completed, onRemoveTodo, onEditTodo, onChangeStatus }) => {
    const [isDisabled, setIsDisabled] = useState(true);
    const [newTitle, setNewTitle] = useState(title);
    const [isChecked, setIsChecked] = useState(completed);

    const handleClickEditBtn = () => {
        setIsDisabled(!isDisabled);
        onEditTodo(id, newTitle);
    }

    const handleTitleChange = (e) => {
        setNewTitle(e.target.value);
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Escape') {
            setIsDisabled(!isDisabled);
            setNewTitle(title);
        }
        if (e.key === 'Enter') {
            setIsDisabled(!isDisabled);
            onEditTodo(id, newTitle);
        }
    };

    const handleCheckboxChecked = (e) => {
        setIsChecked(!isChecked);
        onChangeStatus(id, e.target.checked);
    }

    const checkedStyle = isChecked ? style.checked : '';

    return (
        <li className={style.listItem}>
            <input className={style.checkbox} type="checkbox" name="doneCheckbox" onChange={handleCheckboxChecked} checked={isChecked ? isChecked : false} />

            <input type="text"
                name="editTitle"
                value={newTitle}
                className={checkedStyle}
                disabled={isDisabled}
                onChange={handleTitleChange}
                onKeyDown={handleKeyPress} />

            <button type="button"
                className={style.edit}
                onClick={handleClickEditBtn}>
                <MdOutlineEdit />
            </button>
            <button type="button"
                className={style.delete}
                onClick={() => onRemoveTodo(id)}>
                <MdDeleteOutline />
            </button>
        </li>
    );
}

export default TodoListItem;
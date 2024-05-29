import PropTypes from 'prop-types';
import TodoListItem from "../TodoListItem/TodoListItem";

const TodoList = ({ todoList, onRemoveTodo, onEditTodo, onChangeStatus }) => {
    return (
        <ul>
            {todoList.map(todo => {
                return (
                    <TodoListItem key={todo.id} {...todo}
                        onRemoveTodo={onRemoveTodo}
                        onEditTodo={onEditTodo}
                        onChangeStatus={onChangeStatus} />
                );
            })}
        </ul>
    );
}

TodoList.propTypes = {
    todoList: PropTypes.array,
    onRemoveTodo: PropTypes.func,
    onEditTodo: PropTypes.func,
    onChangeStatus: PropTypes.func
}

export default TodoList;
import PropTypes from 'prop-types';
import TodoListItem from "../TodoListItem/TodoListItem";

const TodoList = ({ todoList, onRemoveTodo, onEditTodo, onChangeStatus, filters, filter }) => {
    return (
        <ul>
            {todoList.filter(filters[filter]).map(todo => {
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
    onChangeStatus: PropTypes.func,
    filters:PropTypes.object,
    filter:PropTypes.string,
}

export default TodoList;
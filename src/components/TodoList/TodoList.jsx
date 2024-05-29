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

export default TodoList;
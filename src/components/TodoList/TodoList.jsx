import TodoListItem from "../TodoListItem/TodoListItem";

const TodoList = ({todoList, onRemoveTodo}) => {
    return (
        <ul>
            {todoList.map(todo => {
                return (
                    <TodoListItem key={todo.id} {...todo} onRemoveTodo={onRemoveTodo}/>
                );
            })}
        </ul>
    );
}

export default TodoList;
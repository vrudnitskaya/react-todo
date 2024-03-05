import TodoListItem from "./TodoListItem";

const todoList = [
    {
        title: 'Read pages 1 through 37 of textbook',
        id: 1
    },
    {
        title: 'Watch tutorial videos',
        id: 2
    },
    {
        title: 'Complete assignment',
        id: 3
    },
];

const TodoList = () => {
    return (
        <ul>
            {todoList.map(item => {
                return (
                    <TodoListItem key={item.id} todo={item.title}/>
                );
            })}
        </ul>
    );
}

export default TodoList;
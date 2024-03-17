import './App.css';

import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';
import { useState } from 'react';

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const addTodo = (newTodo) => {
    setTodoList([newTodo, ...todoList])
  };
  
  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo}/>
      <TodoList todoList={todoList}/>
    </>
  )
}

export default App;

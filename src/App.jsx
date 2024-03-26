import './App.css';

import { useEffect, useState } from 'react';

import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

const App = () => {
  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('savedTodoList')) || []);
  const addTodo = (newTodo) => {
    setTodoList([newTodo, ...todoList])
  };
  
  useEffect(()=> {
    localStorage.setItem('savedTodoList', JSON.stringify(todoList))
  },[todoList]);
  
  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo}/>
      <TodoList todoList={todoList}/>
    </>
  )
}

export default App;

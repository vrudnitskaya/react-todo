import './App.css';

import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';
import { useState } from 'react';

const App = () => {
  const [newTodo, setNewTodo] = useState('');
  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={setNewTodo}/>
      <p>{newTodo}</p>
      <TodoList />
    </>
  )
}

export default App;

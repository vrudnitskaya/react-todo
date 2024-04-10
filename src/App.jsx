import "./App.css";

import { useEffect, useState } from "react";

import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

const useSemiPersistentState = () => {
  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('savedTodoList')) || []);
  
  useEffect(() => {
    localStorage.setItem('savedTodoList', JSON.stringify(todoList));
  }, [todoList]);

  return [todoList, setTodoList];
};

const App = () => {
  const [todoList, setTodoList] = useSemiPersistentState();
  
  const addTodo = (newTodo) => {
    setTodoList([newTodo, ...todoList]);
  };
  
  const removeTodo = (id) =>{
    const editedTodoList = todoList.filter(todo => todo.id !== id);
    setTodoList(editedTodoList);
  }

  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>
    </>
  );
};

export default App;

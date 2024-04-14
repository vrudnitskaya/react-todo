import "./App.css";

import { useEffect, useState } from "react";

import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(()=> {
    new Promise((resolve) => 
    setTimeout(() => resolve( { data: {todoList: JSON.parse(localStorage.getItem('savedTodoList')) || []}}), 
      2000))
      .then(result => {
        setTodoList(result.data.todoList);
        setIsLoading(false);
      })
  }, []);
  
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('savedTodoList', JSON.stringify(todoList));
    }
  }, [todoList]);
  
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
      {isLoading ? <p>Loading...</p> 
                  : <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>
      }
    </>
  );
};

export default App;

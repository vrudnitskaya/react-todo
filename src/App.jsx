import "./App.css";

import { useEffect, useState } from "react";

import AddTodoForm from "./AddTodoForm";
import Spinner from "./Spinner";
import TodoList from "./TodoList";

const request = async (options, url) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Error has ocurred: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.log(error.message);
  }
}

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const _apiBase = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`;

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = () => {
    setIsLoading(true);
    request({
      method: 'GET',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`
      }
    }, _apiBase)
      .then(data => {
        const todos = data.records.map((todo) => {
          return {
            id: todo.id,
            title: todo.fields.title
          }
        });
        setTodoList(todos);
        setIsLoading(false);
      })
  }

  const addTodo = (todoTitle) => {
    const addedTodo = {
      fields: {
        title: todoTitle,
      },
    };

    request({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
      },
      body: JSON.stringify(addedTodo),
    }, _apiBase)
      .then((data) => {
        const postedTodo = {
          id: data.id,
          title: data.fields.title
        }
        setTodoList([...todoList, postedTodo]);
      });
  };

  const removeTodo = (id) => {
    const removedId = {
      id: id,
    };

    request({
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
      },
      body: JSON.stringify(removedId),
    }, `${_apiBase}\/${removedId.id}`)
      .then(data => {
        const editedTodoList = todoList.filter(todo => todo.id !== data.id);
        setTodoList(editedTodoList);
      });
  }

  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      {isLoading ? <Spinner />
                : <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
      }
    </>
  );
};

export default App;

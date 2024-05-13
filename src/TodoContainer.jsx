import { useEffect, useState } from "react";

import AddTodoForm from "./AddTodoForm";
import Search from "./Search";
import Spinner from "./Spinner";
import TodoList from "./TodoList";
import styles from './TodoContainer.module.css';

const request = async (method, type, body, url) => {
    const options = {
        method: method,
        headers: {
            "Content-Type": type,
            Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
        },
        body: body,
    }

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

const TodoContainer = () => {
    const [todoList, setTodoList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    const _apiBase = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`;

    useEffect(() => {
        getTodos();
    }, []);

    const getTodos = () => {
        setIsLoading(true);
        request('GET', null, null, _apiBase)
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

        request("POST", "application/json", JSON.stringify(addedTodo), _apiBase)
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

        request("DELETE", "application/json", JSON.stringify(removedId), `${_apiBase}\/${removedId.id}`)
            .then(data => {
                const editedTodoList = todoList.filter(todo => todo.id !== data.id);
                setTodoList(editedTodoList);
            });
    }

    const handleSearch = (value) => {
        setSearchTerm(value);
    }
    const searchedTodos = todoList.filter(todo => {
        return todo.title.toLowerCase().includes(searchTerm.toLowerCase())
    })
    
    return (
        <div className={styles.todoWrapper}>
            <Search onSearch={handleSearch} searchTerm={searchTerm}/>
            <AddTodoForm onAddTodo={addTodo} />
            {<h2>You have {todoList.length} things to do</h2>}
            {isLoading ? <Spinner />
                : <TodoList todoList={searchedTodos} onRemoveTodo={removeTodo} />
            }
        </div>
    )
}

export default TodoContainer;

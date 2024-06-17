import { useEffect, useState } from "react";

import AddTodoForm from "../AddTodoForm/AddTodoForm";
import FilterList from "../Filter/Filter";
import Search from "../Search/Search";
import Sorting from "../Sorting/Sorting";
import Spinner from "../Spinner/Spinner";
import TodoList from "../TodoList/TodoList";
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
    const [filter, setFilter] = useState('All');

    const FILTER_MAP = {
        All: () => true,
        Active: (todo) => !todo.completed,
        Completed: (todo) => todo.completed,
    };

    const _apiBase = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`;

    useEffect(() => {
        getTodos();
    }, []);

    const getTodos = () => {
        setIsLoading(true);
        request('GET', null, null, _apiBase)
            .then(data => {
                const todos = data.records.sort((a, b) => a.fields.title < b.fields.title ? -1 : 1)
                    .map((todo) => {
                        return todo.fields.completed
                            ? { id: todo.id, title: todo.fields.title, completed: todo.fields.completed, date: todo.createdTime }
                            : { id: todo.id, title: todo.fields.title, completed: false, date: todo.createdTime };
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
                    title: data.fields.title,
                    date: new Date(data.createdTime).toLocaleString("en-US", { year: 'numeric', month: 'numeric', day: 'numeric' })
                }
                setTodoList([...todoList, postedTodo].sort((a, b) => a.title < b.title ? -1 : 1));
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

    const editTodo = (id, newTitle) => {
        const editedTodo = {
            fields: {
                title: newTitle,
            },
        };

        request("PATCH", "application/json", JSON.stringify(editedTodo), `${_apiBase}\/${id}`)
            .then(data => {
                const editedTodoList = todoList.map(todo => {
                    if (todo.id === data.id) {
                        return {
                            ...todo, title: data.fields.title
                        }
                    } else return todo;
                });
                setTodoList(editedTodoList);
            })
    }

    const changeTodoStatus = (id, value) => {
        const todoStatus = {
            fields: {
                completed: value,
            },
        };

        request("PATCH", "application/json", JSON.stringify(todoStatus), `${_apiBase}\/${id}`)
            .then(data => {
                const editedTodoList = todoList.map(todo => {
                    if (todo.id === data.id) {
                        return data.fields.completed ? { ...todo, completed: data.fields.completed } : { ...todo, completed: false };
                    } else return todo;
                });
                setTodoList(editedTodoList);
            })
    }

    let completedTodos = todoList.filter(todo => todo.completed);

    const sortTodos = (value) => {
        switch (value) {
            case "titleDesc":
                setTodoList(prevTodoList => [...prevTodoList].sort((a, b) => a.title < b.title ? 1 : -1));
                break;
            case "dateAsc":
                setTodoList(prevTodoList => [...prevTodoList].sort((a, b) => new Date(a.date) - new Date(b.date)));
                break;
            case "dateDesc":
                setTodoList(prevTodoList => [...prevTodoList].sort((a, b) => new Date(b.date) - new Date(a.date)));;
                break;
            default:
                //default sorting by "titleAsc"
                setTodoList(prevTodoList => [...prevTodoList].sort((a, b) => a.title < b.title ? -1 : 1));
        }
    }

    return (
        <div className={styles.todoWrapper}>
            <Search onSearch={handleSearch} searchTerm={searchTerm} />
            <AddTodoForm onAddTodo={addTodo} />
            <div className={styles.sortFilterWrapper}>
                <Sorting onSort={sortTodos} />
                <FilterList filters={FILTER_MAP} setFilter={setFilter} />
            </div>
            {todoList.length == completedTodos.length
                ? <h2>You have nothing to do</h2>
                : <h2>You have {todoList.length - completedTodos.length} more things to do, {completedTodos.length} done</h2>}
            {isLoading ? <Spinner />
                : <TodoList todoList={searchedTodos}
                    onRemoveTodo={removeTodo}
                    onEditTodo={editTodo}
                    onChangeStatus={changeTodoStatus}
                    filters={FILTER_MAP}
                    filter={filter} />
            }
        </div>
    )
}

export default TodoContainer;
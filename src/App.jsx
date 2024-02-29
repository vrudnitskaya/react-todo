import './App.css';

import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

const App = () => {
  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm />
      <TodoList />
    </>
  )
}

export default App;

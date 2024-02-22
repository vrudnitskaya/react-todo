import './App.css';

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

function App() {
  const listItems = todoList.map(item => {
    return (
      <li key={item.id}>
        {item.title}
      </li>
      );
  })

  return (
    <>
      <h1>Todo List</h1>
      <ul>
        {listItems}
      </ul>
    </>
  )
}

export default App

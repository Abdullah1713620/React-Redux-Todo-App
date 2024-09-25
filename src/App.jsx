import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <div className="todo-box">
        <h1>React Redux Todo App</h1>
        <TodoInput />
        <TodoList />
      </div>
    </div>
  );
}

export default App;

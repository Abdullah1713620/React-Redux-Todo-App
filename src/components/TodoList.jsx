import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, editTodo } from '../redux/todoSlice';
import { useState } from 'react';

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(null);
  const [newText, setNewText] = useState('');

  const handleEdit = (id, text) => {
    setEditing(id);
    setNewText(text);
  };

  const handleSave = (id) => {
    if (newText.trim()) {
      dispatch(editTodo({ id, newText }));
      setEditing(null);
    }
  };

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className="todo-item">
          {editing === todo.id ? (
            <input
              type="text"
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
            />
          ) : (
            <span>{todo.text}</span>
          )}
          {editing === todo.id ? (
            <button onClick={() => handleSave(todo.id)} className="edit-btn">
              Save
            </button>
          ) : (
            <button onClick={() => handleEdit(todo.id, todo.text)} className="edit-btn">
              Edit
            </button>
          )}
          <button onClick={() => dispatch(deleteTodo(todo.id))} className="delete-btn">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;

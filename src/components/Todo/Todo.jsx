import { useState, useEffect } from "react";
import { FiEdit, FiDelete, FiCheck } from "react-icons/fi";
import "./todo.scss";

const Todo = ({ todo, id, editTodo, removeTodo, isEditing, checkTodo }) => {
  const [editedTodo, setEditedTodo] = useState({ ...todo });

  useEffect(() => {
    setEditedTodo(editedTodo);
  }, [editedTodo]);

  return (
    <div className="todo-container">
      <section className="todo-name">
        <input
          type="checkbox"
          className="todo-checkbox"
          onClick={() => checkTodo(id)}
        />
        <input
          type="text"
          value={editedTodo.name}
          onChange={(e) => setEditedTodo(e.target.value)}
          className="todo-input"
        />
      </section>

      <section className="todo-btn">
        <button type="submit" onClick={() => editTodo(id)} className="btn">
          {editedTodo.isEditing ? <FiCheck /> : <FiEdit />}
        </button>
        <button onClick={() => removeTodo(id)} className="btn">
          <FiDelete />
        </button>
      </section>
    </div>
  );
};

export default Todo;

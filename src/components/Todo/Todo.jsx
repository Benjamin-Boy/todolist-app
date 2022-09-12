import { useState, useEffect } from "react";
import { FiEdit, FiDelete, FiCheck } from "react-icons/fi";
import "./todo.scss";

const Todo = ({ todo, id, editTodo, removeTodo, checkTodo }) => {
  const [editedTodo, setEditedTodo] = useState(todo);

  useEffect(() => {
    setEditedTodo({
      name: (editedTodo.isDone || editedTodo.isEditing) ? editedTodo.name : todo.name,
      isEditing: todo.isEditing,
      isDone: todo.isDone
    });
  }, [todo, editedTodo.name, editedTodo.isDone, editedTodo.isEditing]);

  return (
    <div className={editedTodo.isDone ? "todo-container todo-checked" : "todo-container"}>
      <section className="todo-name">
        <input
          type="checkbox"
          className="todo-checkbox"
          onClick={() => checkTodo(id)}
        />
        <input
          type="text"
          value={editedTodo.name}
          onChange={(e) => setEditedTodo({...editedTodo, name: e.target.value})}
          className="todo-input"
          disabled={editedTodo.isEditing ? false : true}
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

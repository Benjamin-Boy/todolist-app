import Todo from "../Todo/Todo";

import "./todolist.scss";

const TodoList = ({
  todo,
  isEditing,
  addTodo,
  handleChange,
  todolist,
  donelist,
  editTodo,
  removeTodo,
  checkTodo,
}) => {
  return (
    <div className="todolist-container">
      <section className="todolist-create">
        <input
          type="text"
          value={isEditing ? "" : todo.name}
          onChange={handleChange}
          className="add-todo-input"
        />
        <button onClick={() => addTodo(todo)} className="btn add-todo-btn">
          Add
        </button>
      </section>
      <section className="todolist-list">
        {todolist.map((todo, index) => {
          return (
            <Todo
              key={index}
              id={index}
              todo={todo}
              editTodo={editTodo}
              removeTodo={removeTodo}
              handleChange={handleChange}
              isEditing={isEditing}
              checkTodo={checkTodo}
            />
          );
        })}
      </section>
      <section className="donelist-list">
        {donelist.map((todo, index) => {
          return (
            <Todo
              key={index}
              id={index}
              todo={todo}
              editTodo={editTodo}
              removeTodo={removeTodo}
              handleChange={handleChange}
              isEditing={isEditing}
              checkTodo={checkTodo}
            />
          );
        })}
      </section>
    </div>
  );
};

export default TodoList;

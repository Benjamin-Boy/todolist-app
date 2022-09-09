import { useState } from "react";
import TodoList from "./components/TodoList/TodoList";

import "./app.scss";

// TODO Changer le css si elle est remplie
// TODO Renvoyer en fin de liste, ou dans une autre liste en dessous, les tâches complétées

const App = () => {
  const [todo, setTodo] = useState({
    name: "",
    isEditing: false,
    isDone: false,
  });
  const [todolist, setTodolist] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [donelist, setDonelist] = useState([]);

  const addTodo = (todo) => {
    if (todo.name !== "") {
      setTodolist((prevState) => {
        return [...prevState, todo];
      });
    }
    setTodo({
      name: "",
      isEditing: false,
      isDone: false,
    });
  };

  const handleChange = (e) => {
    setTodo({
      name: e.target.value,
      isEditing: false,
      isDone: false,
    });
  };

  const editTodo = (id) => {
    // const target = e.target
    //   .closest(".todo-container")
    //   .querySelector(".todo-input");

    if (todolist[id].isEditing) {
      // target.setAttribute("disabled", "");
      // target.removeAttribute("disabled");
      const editTodo = { ...todolist[id], isEditing: false };
      setTodo(editTodo);

      // todolist.map(todo => {
      //   if () {

      //   }
      // });
      setTodolist([...todolist, editTodo]);

      setIsEditing(false);
    } else {
      // target.removeAttribute("disabled");
      const editTodo = { ...todolist[id], isEditing: true };
      setTodo(editTodo);
      setTodolist([...todolist, editTodo]);
      setIsEditing(true);
    }
  };

  console.log(todolist);

  const removeTodo = (id) => {
    setTodolist((prevState) => {
      return prevState.filter((todo) => todolist.indexOf(todo) !== id);
    });
  };

  const checkTodo = (id) => {
    setDonelist((prevState) => [...prevState, todolist[id]]);
    setTodolist((prevState) => {
      return prevState.filter((todo) => todolist.indexOf(todo) !== id);
    });
  };

  return (
    <div className="app-container">
      <section className="app-title">
        <h1>TODO LIST</h1>
      </section>
      <TodoList
        todo={todo}
        isEditing={isEditing}
        addTodo={addTodo}
        handleChange={handleChange}
        todolist={todolist}
        donelist={donelist}
        editTodo={editTodo}
        removeTodo={removeTodo}
        checkTodo={checkTodo}
      />
    </div>
  );
};

export default App;

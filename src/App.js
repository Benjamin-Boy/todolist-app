import { useState } from "react";
import TodoList from "./components/TodoList/TodoList";

import "./app.scss";

// TODO Renvoyer en fin de liste, ou dans une autre liste en dessous, les tâches complétées

const App = () => {
  const [todo, setTodo] = useState({
    name: "",
    isEditing: false,
    isDone: false,
  });
  const [todolist, setTodolist] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  // const [donelist, setDonelist] = useState([]);

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

    if(!isEditing) {
      const newTodolist = todolist.map(todo => {
        if (todo === todolist[id]) {
          return {...todo, isEditing: true};
        }
        return todo;
      });

      setTodolist(newTodolist);
      setIsEditing(true);
    } else if(isEditing && todolist[id].isEditing){
        const newTodolist = todolist.map(todo => {
          if (todo === todolist[id]) {
            return {...todo, isEditing: false};
          }
          return todo;
        });

        setTodolist(newTodolist);
        setIsEditing(false);
    }

  };

  const removeTodo = (id) => {
    setTodolist((prevState) => {
      return prevState.filter((todo) => todolist.indexOf(todo) !== id);
    });
  };

  const checkTodo = (id) => {
    // setDonelist((prevState) => [...prevState, todolist[id]]);
    let newTodolist;

    if(todolist[id].isDone){
      newTodolist = todolist.map(todo => {
        if(todo === todolist[id]){
          return {...todo, isDone: false};
        }
        return todo;
      });
    }
    else {
      newTodolist = todolist.map(todo => {
        if(todo === todolist[id]){
          return {...todo, isDone: true};
        }
        return todo;
      });
    }

    setTodolist(newTodolist);
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
        // donelist={donelist}
        editTodo={editTodo}
        removeTodo={removeTodo}
        checkTodo={checkTodo}
      />
    </div>
  );
};

export default App;

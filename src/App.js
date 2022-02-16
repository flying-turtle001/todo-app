import { useState } from "react";

import Header from "./components/Header";
import Searchbar from "./components/Search/Searchbar";
import TodoList from "./components/Todos/TodoList";

import iconMoon from "./assets/icon-moon.svg";
import styles from "./App.module.css";

const DUMMY_TODOS = [
  {
    id: "1",
    text: "Complete online JavaScript course",
    completed: true,
  },
  {
    id: "2",
    text: "Jog around the park 3x",
    completed: false,
  },
  {
    id: "3",
    text: "10 minutes meditation",
    completed: true,
  },
  {
    id: "4",
    text: "Read for 1 hour",
    completed: false,
  },
  {
    id: "5",
    text: "Pick up groceries",
    completed: false,
  },
  {
    id: "6",
    text: "Complete Todo App from Frontend Mentor",
    completed: false,
  },
];

const App = () => {
  const [todos, setTodos] = useState(DUMMY_TODOS);

  const addTodoHandler = (newTodo) => {
    setTodos([newTodo, ...todos]);
  };

  const removeTodoHandler = (todo) => {
    setTodos((prevTodos) => [...prevTodos.filter((t) => t.id !== todo.id)]);
  };

  return (
    <div className={`${styles.wrapper} ${styles["bg-img"]}`}>
      <Header text="Todo" icon={iconMoon} />
      <Searchbar onAddTodo={addTodoHandler} />
      <TodoList todos={todos} onRemoveTodo={removeTodoHandler} />
    </div>
  );
};

export default App;

import { useState } from "react";

import Header from "./components/Header";
import CreateTodo from "./components/Todos/CreateTodo";
import TodoList from "./components/Todos/TodoList";
import TodoListFooter from "./components/Todos/TodoListFooter";

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
  const activeTodos = todos.filter((t) => !t.completed);

  const addTodoHandler = (newTodo) => {
    setTodos([newTodo, ...todos]);
  };

  const removeTodoHandler = (todo) => {
    setTodos((prevTodos) => prevTodos.filter((t) => t.id !== todo.id));
  };

  const clearCompletedTodosHandler = () => {
    setTodos((prevTodos) => prevTodos.filter((t) => !t.completed));
  };

  const changeTodoCompletedStateHandler = (todo) => {
    setTodos((prevTodos) => {
      // find index of searched todo in todos array
      const idx = prevTodos.findIndex((t) => t.id === todo.id);
      // replace old todo with new todo object and new completed state
      prevTodos.splice(idx, 1, { ...todo, completed: !todo.completed });
      // spread old todos array in a new array
      const newTodos = [...prevTodos];
      // update todos array with new todos array
      return newTodos;
    });
  };

  return (
    <div className={`${styles.wrapper} ${styles["bg-img"]}`}>
      <Header text="Todo" icon={iconMoon} />
      <CreateTodo onAddTodo={addTodoHandler} />
      <TodoList
        todos={todos}
        onRemoveTodo={removeTodoHandler}
        onChangeTodoCompletedState={changeTodoCompletedStateHandler}
      />
      <TodoListFooter
        itemsLeft={activeTodos.length}
        onClearCompletedTodos={clearCompletedTodosHandler}
      />
    </div>
  );
};

export default App;

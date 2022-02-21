import { useState } from "react";

import Header from "./components/layout/Header";
import CreateTodo from "./components/Todos/CreateTodo";
import TodoList from "./components/Todos/TodoList";
import TodoListFooter from "./components/Todos/TodoListFooter";
import Filter from "./components/Todos/Filter";

import iconMoon from "./assets/icon-moon.svg";
import iconSun from "./assets/icon-sun.svg";
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
  const [filter, setFilter] = useState("all");
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Set background color depending on active theme
  if (isDarkMode) {
    document.body.classList.add("bg--dark");
  }

  if (!isDarkMode) {
    document.body.classList.remove("bg--dark");
  }

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

  const chageFilterHandler = (filter) => {
    setFilter(filter);
  };

  const dragEndHandler = (todos) => {
    setTodos(todos);
  };

  const changeThemeHandler = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div
      className={`${
        isDarkMode ? styles["container--dark"] : styles.container
      } ${isDarkMode ? styles["bg-img--dark"] : styles["bg-img"]}`}
    >
      <div className={styles.wrapper}>
        <Header
          onChangeTheme={changeThemeHandler}
          text="Todo"
          icon={isDarkMode ? iconSun : iconMoon}
        />
        <CreateTodo isDark={isDarkMode} onAddTodo={addTodoHandler} />
        <TodoList
          todos={todos}
          filter={filter}
          isDark={isDarkMode}
          onRemoveTodo={removeTodoHandler}
          onChangeTodoCompletedState={changeTodoCompletedStateHandler}
          onDragEnd={dragEndHandler}
        />
        <TodoListFooter
          itemsLeft={activeTodos.length}
          isDark={isDarkMode}
          onClearCompletedTodos={clearCompletedTodosHandler}
        />
        <Filter
          currentFilter={filter}
          isDark={isDarkMode}
          onChangeFilter={chageFilterHandler}
        />
        {filter === "all" && (
          <p className={isDarkMode ? styles["text--dark"] : styles.text}>
            Drag and drop to reorder list
          </p>
        )}
      </div>
    </div>
  );
};

export default App;

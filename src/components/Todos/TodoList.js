import Todo from "./Todo";

import styles from "./TodoList.module.css";

const TodoList = (props) => {
  const removeTodoHandler = (todo) => {
    props.onRemoveTodo(todo);
  };

  const changeTodoCompletedStateHandler = (todo) => {
    props.onChangeTodoCompletedState(todo);
  };

  return (
    <div>
      <ul>
        {props.todos.map((todo) => {
          return (
            <li key={todo.id}>
              <Todo
                todo={todo}
                onRemoveTodo={removeTodoHandler}
                onChangeTodoCompletedState={changeTodoCompletedStateHandler}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;

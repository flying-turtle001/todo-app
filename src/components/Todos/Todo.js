import BaseRow from "../ui/BaseRow";

import iconCheck from "../../assets/icon-check.svg";
import iconCross from "../../assets/icon-cross.svg";

import styles from "./Todo.module.css";

const Todo = (props) => {
  const changeTodoCompletedStateHandler = () => {
    props.onChangeTodoCompletedState(props.todo);
  };

  const removeTodoHandler = () => {
    props.onRemoveTodo(props.todo);
  };

  return (
    <div className={styles.container}>
      <BaseRow isDark={props.isDark}>
        <div className={styles.wrapper}>
          <div
            onClick={changeTodoCompletedStateHandler}
            className={`${
              props.isDark ? styles["circle--dark"] : styles.circle
            } ${props.todo.completed && styles.completed}`}
          >
            {props.todo.completed && <img src={iconCheck} alt="icon-check" />}
          </div>
          <span
            className={`${props.isDark ? styles["text--dark"] : styles.text} ${
              props.todo.completed &&
              props.isDark &&
              styles["todo-completed--dark"]
            } ${props.todo.completed && styles["todo-completed"]}`}
          >
            {props.todo.text}
          </span>
          <img
            src={iconCross}
            alt="icon-cross"
            className={styles["icon-cross"]}
            onClick={removeTodoHandler}
          />
        </div>
      </BaseRow>
    </div>
  );
};

export default Todo;

import BaseRow from "../ui/BaseRow";

import iconCheck from "../../assets/icon-check.svg";
import iconCross from "../../assets/icon-cross.svg";

import styles from "./Todo.module.css";

const Todo = (props) => {
  const clickHandler = () => {
    props.onRemoveTodo(props.todo);
  };

  return (
    <BaseRow>
      <div className={styles.wrapper}>
        <div
          className={`${styles.circle} ${
            props.todo.completed && styles.completed
          }`}
        >
          {props.todo.completed && <img src={iconCheck} alt="icon-check" />}
        </div>
        <span className={styles.text}>{props.todo.text}</span>
        <img
          src={iconCross}
          alt="icon-cross"
          className={styles["icon-cross"]}
          onClick={clickHandler}
        />
      </div>
    </BaseRow>
  );
};

export default Todo;

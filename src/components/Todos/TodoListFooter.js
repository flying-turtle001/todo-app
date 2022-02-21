import BaseRow from "../ui/BaseRow";

import styles from "./TodoListFooter.module.css";

const TodoListFooter = (props) => {
  return (
    <div
      className={props.isDark ? styles["container--dark"] : styles.container}
    >
      <BaseRow isDark={props.isDark}>
        <div
          className={props.isDark ? styles["wrapper--dark"] : styles.wrapper}
        >
          <span>{props.itemsLeft} items left</span>
          <span className={styles.text} onClick={props.onClearCompletedTodos}>
            Clear Completed
          </span>
        </div>
      </BaseRow>
    </div>
  );
};

export default TodoListFooter;

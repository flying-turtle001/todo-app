import BaseRow from "../ui/BaseRow";

import styles from "./TodoListFooter.module.css";

const TodoListFooter = (props) => {
  return (
    <BaseRow>
      <div className={styles.wrapper}>
        <span>{props.itemsLeft} items left</span>
        <span onClick={props.onClearCompletedTodos}>Clear Completed</span>
      </div>
    </BaseRow>
  );
};

export default TodoListFooter;

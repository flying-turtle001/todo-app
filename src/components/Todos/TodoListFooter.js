import BaseRow from "../ui/BaseRow";

import styles from "./TodoListFooter.module.css";

const TodoListFooter = (props) => {
  return (
    <BaseRow>
      <div className={styles.wrapper}>
        <span>{props.itemsLeft} items left</span>
        <span>Clear Completed</span>
      </div>
    </BaseRow>
  );
};

export default TodoListFooter;

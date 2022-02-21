import BaseRow from "../ui/BaseRow";

import styles from "./CreateTodo.module.css";

const CreateTodo = (props) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && e.target.value) {
      const todo = {
        id: Math.random().toString(),
        text: e.target.value,
        completed: false,
      };
      props.onAddTodo(todo);
      e.target.value = "";
    }
  };

  return (
    <div className={styles.container}>
      <BaseRow isDark={props.isDark}>
        <div className={styles.wrapper}>
          <div
            className={props.isDark ? styles["circle--dark"] : styles.circle}
          ></div>
          <input
            type="text"
            placeholder="Create a new todo..."
            onKeyDown={handleKeyDown}
            className={props.isDark ? styles["ipt--dark"] : styles.ipt}
          />
        </div>
      </BaseRow>
    </div>
  );
};

export default CreateTodo;

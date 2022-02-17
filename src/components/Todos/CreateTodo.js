import BaseRow from "../ui/BaseRow";

import styles from "./CreateTodo.module.css";

const CreateTodo = (props) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
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
      <BaseRow>
        <div className={styles.wrapper}>
          <div className={styles.circle}></div>
          <input
            type="text"
            placeholder="Create a new todo..."
            onKeyDown={handleKeyDown}
          />
        </div>
      </BaseRow>
    </div>
  );
};

export default CreateTodo;

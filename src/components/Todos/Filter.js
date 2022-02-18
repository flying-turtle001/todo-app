import BaseRow from "../ui/BaseRow";

import styles from "./Filter.module.css";

const Filter = (props) => {
  const changeFilterToAllHandler = () => {
    props.onChangeFilter("all");
  };

  const changeFilterToActiveHandler = () => {
    props.onChangeFilter("active");
  };

  const changeFilterToCompletedHandler = () => {
    props.onChangeFilter("completed");
  };

  return (
    <div className={styles.container}>
      <BaseRow>
        <div className={styles.wrapper}>
          <span
            onClick={changeFilterToAllHandler}
            className={`${styles.text} ${
              props.currentFilter === "all" && styles["text-active"]
            }`}
          >
            All
          </span>
          <span
            onClick={changeFilterToActiveHandler}
            className={`${styles.text} ${
              props.currentFilter === "active" && styles["text-active"]
            }`}
          >
            Active
          </span>
          <span
            onClick={changeFilterToCompletedHandler}
            className={`${styles.text} ${
              props.currentFilter === "completed" && styles["text-active"]
            }`}
          >
            Completed
          </span>
        </div>
      </BaseRow>
    </div>
  );
};

export default Filter;

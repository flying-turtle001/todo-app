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
    <div
      className={props.isDark ? styles["container--dark"] : styles.container}
    >
      <BaseRow isDark={props.isDark}>
        <div className={styles.wrapper}>
          <span
            onClick={changeFilterToAllHandler}
            className={`${props.isDark ? styles["text--dark"] : styles.text} ${
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

import styles from "./BaseRow.module.css";

const BaseRow = (props) => {
  return (
    <div className={props.isDark ? styles["row--dark"] : styles.row}>
      {props.children}
    </div>
  );
};

export default BaseRow;

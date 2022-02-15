import styles from "./BaseRow.module.css";

const BaseRow = (props) => {
  return <div className={styles.row}>{props.children}</div>;
};

export default BaseRow;

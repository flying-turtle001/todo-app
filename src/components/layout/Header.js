import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>{props.text}</h1>
      <img
        className={styles.icon}
        onClick={props.onChangeTheme}
        src={props.icon}
        alt="Icon"
      />
    </div>
  );
};

export default Header;

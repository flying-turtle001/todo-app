import styles from "./App.module.css";

import iconMoon from "./assets/icon-moon.svg";

import Header from "./components/Header";
import Searchbar from "./components/Todos/Searchbar";

const App = () => {
  return (
    <div className={`${styles.wrapper} ${styles["bg-img"]}`}>
      <Header text="Todo" icon={iconMoon} />
      <Searchbar />
    </div>
  );
};

export default App;

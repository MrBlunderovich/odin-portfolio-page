import styles from "./Header.module.css";
import catPic from "../../assets/cat.jpg";
import GitHubIcon from "../../components/UI/GitHubIcon";
import { ThemeContext } from "../../context/context";
import { useContext } from "react";

export default function Header() {
  const [theme, setTheme] = useContext(ThemeContext);
  return (
    <header className={styles.header}>
      <button
        className={`${styles["theme-toggle"]}`}
        onClick={() => setTheme(theme === "DARK" ? "LIGHT" : "DARK")}
      >
        theme
      </button>
      <div className={`${styles["header__name-container"]}`}>
        <img src={catPic} alt="cat avatar" />
        <p>Maxim P</p>
        <div className={`${styles["icon-container"]}`}>
          <a
            href="https://github.com/MrBlunderovich/"
            aria-label="personal github page"
          >
            <GitHubIcon className={styles.icon} />
          </a>
        </div>
      </div>
    </header>
  );
}

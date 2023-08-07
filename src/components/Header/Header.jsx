import styles from "./Header.module.css";
import catPic from "../../assets/cat.jpg";
import GitHubIcon from "../../components/UI/GitHubIcon";
import DarkIcon from "../UI/DarkIcon";
import LightIcon from "../UI/LightIcon";
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
        {theme === "DARK" ? <LightIcon /> : <DarkIcon />}
      </button>
      <div className={`${styles["header__name-container"]}`}>
        <img src={catPic} alt="cat avatar" />
        <p>Felis Catus</p>
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

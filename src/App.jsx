import "./App.css";
import { useState } from "react";
import personIcon from "./assets/person_icon.svg";

export default function App() {
  const [theme, setTheme] = useState("DARK");

  return (
    <div
      className={`app-container ${
        theme === "DARK" ? "dark-theme" : "light-theme"
      }`}
    >
      <header className="header">
        <button
          className="theme-toggle"
          onClick={() => setTheme(theme === "DARK" ? "LIGHT" : "DARK")}
        >
          theme
        </button>

        <img className="icon" src={personIcon} alt="avatar icon" />
        <nav className="navigation"></nav>
      </header>
      <main className="content">main</main>
      <footer className="footer">footer</footer>
    </div>
  );
}

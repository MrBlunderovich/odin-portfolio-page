import "./App.css";
import { useState } from "react";
import catPic from "./assets/cat.jpg";
import projects from "./projects";
import Card from "./components/Card/Card";
import GitHubIcon from "./components/UI/GitHubIcon";

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
        <div className="header__name-container">
          <img src={catPic} alt="cat avatar" />
          <p>Maxim P</p>
          <div className="icon-container">
            <a
              href="https://github.com/MrBlunderovich/"
              aria-label="personal github page"
            >
              <GitHubIcon className="icon" />
            </a>
          </div>
        </div>
      </header>
      <main className="content">
        <h1 className="title">Welcome</h1>
        <p className="decsription">
          This page has been built as an exercise in adaptive layouts as part of{" "}
          <a href="https://www.theodinproject.com/">The Odin Project</a>{" "}
          curriculum. <br />
          Below are some examples of my other takes on TOP assignments:
        </p>
        <section className="content-container">
          <div className="grid-container">
            {projects.map((p) => (
              <Card key={p.id}>{p}</Card>
            ))}
          </div>
        </section>
      </main>
      <footer className="footer">footer</footer>
    </div>
  );
}

import "./App.css";
import { useState } from "react";
import catPic from "./assets/cat.jpg";
//import projects from "./assets/projects.json";
import projects from "./projects";
import Card from "./components/Card/Card";

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
          <img src={catPic} alt="avatar icon" />
          <p>Maxim P</p>
          <div className="icon-container">
            <i className="devicon-github-original"></i>
            <i className="devicon-linkedin-plain"></i>
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

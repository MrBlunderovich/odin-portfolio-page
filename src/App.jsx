import "./App.css";
import { useState } from "react";
import catPic from "./assets/cat.jpg";
import katzenPic from "./assets/musik-katzen.jpg";
import projects from "./projects";
import Card from "./components/Card/Card";
import GitHubIcon from "./components/UI/GitHubIcon";
import Header from "./components/Header/Header";
import { ThemeContext } from "./context/context";
import { useTheme } from "./hooks/useTheme";
import Footer from "./components/Footer/Footer";

export default function App() {
  const [theme, setTheme] = useTheme();

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <div
        className={`app-container ${
          theme === "DARK" ? "dark-theme" : "light-theme"
        }`}
      >
        <Header />
        {/* <header className="header">
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
      </header> */}
        <main className="content">
          <h1 className="decsription">
            This page has been built as an exercise in adaptive layouts as part
            of <a href="https://www.theodinproject.com/">The Odin Project</a>{" "}
            curriculum.
          </h1>
          <h2>Below are some examples of my other takes on TOP assignments:</h2>

          <section className="content-container">
            <div className="grid-container">
              {projects.map((p) => (
                <Card key={p.id}>{p}</Card>
              ))}
            </div>
          </section>
        </main>
        <Footer />
        {/* <footer className="footer">
          <div className="footer-container">
            <div className="address-container">
              <h2>Contact me (not yet)</h2>
              <address>
                <span>
                  <span className="material-icons-outlined">phone</span>{" "}
                  555-555-5555
                </span>
                <span>
                  <span className="material-icons-outlined">email</span>{" "}
                  mail@email.com
                </span>
              </address>
            </div>
            <img src={katzenPic} alt="cats playing music" />
          </div>
        </footer> */}
      </div>
    </ThemeContext.Provider>
  );
}

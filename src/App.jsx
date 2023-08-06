import "./App.css";
import { useContext } from "react";
import catPic from "./assets/cat.jpg";
import katzenPic from "./assets/musik-katzen.jpg";
import projects from "./projects";
import Card from "./components/Card/Card";
import GitHubIcon from "./components/UI/GitHubIcon";
import Header from "./components/Header/Header";
import { ThemeContext } from "./context/context";
import { useTheme } from "./hooks/useTheme";
import Footer from "./components/Footer/Footer";
import Content from "./components/Content/Content";

export default function App() {
  const [theme, setTheme] = useTheme();
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <Theme>
        <Header />
        <Content />
        <Footer />
      </Theme>
    </ThemeContext.Provider>
  );
}

function Theme({ children }) {
  const [theme, setTheme] = useContext(ThemeContext);
  const themeClass = theme === "DARK" ? "dark-theme" : "light-theme";
  return <div className={"app-container " + themeClass}>{children}</div>;
}

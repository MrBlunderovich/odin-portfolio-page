import "./App.css";
import { useContext } from "react";
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

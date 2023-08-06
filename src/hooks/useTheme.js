import { useState, useLayoutEffect } from "react";

export function useTheme() {
  const [theme, setTheme] = useState("DARK");

  /**
   *
   * @param {'LIGHT'|'DARK'} newTheme
   * @returns {void}
   */
  function setNewTheme(newTheme) {
    if (newTheme === "LIGHT" || newTheme === "DARK") {
      localStorage.setItem("theme", newTheme);
      setTheme(newTheme);
    }
  }

  useLayoutEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    console.log({ savedTheme });

    if (savedTheme === "LIGHT" || savedTheme === "DARK") {
      setTheme(savedTheme);
    } else {
      localStorage.setItem("theme", theme);
    }
  }, []);

  return [theme, setNewTheme];
}

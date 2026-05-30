"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme =
      localStorage.getItem("theme");

    if (storedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add(
        "dark"
      );
    }
  }, []);

  const toggleTheme = () => {
    const newValue = !darkMode;

    setDarkMode(newValue);

    if (newValue) {
      document.documentElement.classList.add(
        "dark"
      );

      localStorage.setItem(
        "theme",
        "dark"
      );
    } else {
      document.documentElement.classList.remove(
        "dark"
      );

      localStorage.setItem(
        "theme",
        "light"
      );
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="border px-4 py-2 rounded-lg"
    >
      {darkMode ? "☀️" : "🌙"}
    </button>
  );
}
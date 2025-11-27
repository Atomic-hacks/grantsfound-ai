"use client";

import { useState, useEffect } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    return "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return { theme, toggleTheme };
};

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle_theme"
      className="p-2 rounded-full bg-slate-700/60 hover:bg-slate-700/40 transition flex items-center justify-center"
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}

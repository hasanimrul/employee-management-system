"use client"
import { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark"); // Start with `null` to indicate it's loading
  const [isMounted, setIsMounted] = useState(false); // Track if mounted

  useEffect(() => {
    // Check localStorage for saved theme or default to 'dark'
    const savedTheme = localStorage.getItem("theme");
    setTheme(savedTheme || "dark"); // Default to 'dark' if not saved

    // Set the mounted flag to true after checking localStorage
    setIsMounted(true);
  }, []);

  useEffect(() => {
    // Apply the theme class to the HTML element after it is loaded
    if (theme) {
      localStorage.setItem("theme", theme); // Save the theme to localStorage
      document.documentElement.classList.toggle("dark", theme === "dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme); // Toggle theme on button click
  };

  if (!isMounted) {
    return null; // Return null until the theme is determined to avoid flashes of incorrect theme
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

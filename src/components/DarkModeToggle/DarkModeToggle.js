"use client";
import React, { useState } from "react";
import VisuallyHidden from "../VisuallyHidden";
import { Sun, Moon } from "react-feather";
import clsx from "clsx";
import Cookie from "js-cookie";
import { LIGHT_TOKENS, DARK_TOKENS } from "@/constants";

function DarkModeToggle({ initialTheme, className, ...delegated }) {
  const [theme, setTheme] = useState(initialTheme);

  const handleThemeChange = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    const colors = nextTheme === "light" ? LIGHT_TOKENS : DARK_TOKENS;
    Cookie.set("color-theme", nextTheme);

    const root = document.documentElement;

    root.setAttribute("data-color-theme", nextTheme);

    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  };

  return (
    <button
      onClick={handleThemeChange}
      className={clsx(className)}
      {...delegated}
    >
      {theme === "light" ? <Sun size="1.5rem" /> : <Moon />}
      <VisuallyHidden>Toggle dark / light mode</VisuallyHidden>
    </button>
  );
}

export default DarkModeToggle;

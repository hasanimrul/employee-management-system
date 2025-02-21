import React from "react";
import ToggleButton from "../elements/darkToggleButton/ToggleButton";
import Link from "next/link";
import styles from "./Header.module.css";

const Navbar = ({theme, toggleTheme, toggle, isOpen}) => {
  return (
    <div className="flex items-center justify-between border border-dotted border-gray-300 dark:border-gray-700 dark:hover:border-sky-800 rounded">
        <div className="flex items-center">
        <div data-aos="fade-down "
          id="menuToggle"
          onClick={toggle}
          className="backdrop-blur-3xl py-4 px-5 rounded lg:hidden md:hidden"
        >
          <input
            className={styles.checkbox}
            type="checkbox"
            checked={isOpen}
            onChange={toggle}
          />
          <label className={styles.toggle} htmlFor="checkbox">
            <div
              className={`  ${theme === "dark" ? styles.darkBar : styles.bar} ${
                styles.barTop
              }`}
            ></div>
            <div
              className={`${theme === "dark" ? styles.darkBar : styles.bar} ${
                styles.barMiddle
              }`}
            ></div>
            <div
              className={`${theme === "dark" ? styles.darkBar : styles.bar} ${
                styles.barBottom
              }`}
            ></div>
          </label>
        </div>
      <Link
        href="/"
        className={`  text-3xl font-thin hover:text-sky-500 dark:text-white `}
        //   style={{ display: showBtn ? "none" : "" }}
      >
        <h1 className="m-1 backdrop-blur-3xl px-5 py-2 rounded">EMS</h1>
      </Link>
        </div>
      <div className="">
        <ul
          className="flex items-center gap-10 justify-center rounded backdrop-blur-3xl  px-8 m-1 uppercase text-sm py-3"
          // style={{ display: showBtn ? "none" : "" }}
        >
          <li>
            <Link
              href="/"
              className={`text-gray-600 hover:text-sky-500 py-2 px-2 dark:text-white dark:hover:text-sky-400 cursor-pointer hover-underline-animation`}
            >
              Profile
            </Link>
          </li>

          <li>
            <ToggleButton theme={theme} toggleTheme={toggleTheme} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

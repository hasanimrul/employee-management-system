"use client";
import { ThemeContext } from "@/contexts/ThemeContext";
import Link from "next/link";
import React, { useContext, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "../Sidebar";
import SidebarWeb from "../SidebarWeb";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <Navbar toggleTheme={toggleTheme} theme={theme} toggle={toggleMenu} isOpen={isMenuOpen} />
      <Sidebar toggle={toggleMenu} isOpen={isMenuOpen} />
    
    </>
  );
};

export default Header;

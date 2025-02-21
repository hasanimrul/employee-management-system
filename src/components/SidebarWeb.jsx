"use client";
import { ThemeContext } from "@/contexts/ThemeContext";
import Link from "next/link";
import React, { useContext } from "react";

const SidebarWeb = () => {
  const { theme } = useContext(ThemeContext);



  return (
    <div
      className="flex flex-col border border-t-0 border-dotted border-gray-300 dark:border-gray-700"
    >
      <ul className="text-sm flex flex-col items-start gap-3  h-lvh pt-5 px-5">
        <li className="group w-full hover:bg-sky-800  rounded-md">
          <Link href="/employee-table-view" className="flex items-center gap-2  w-full px-3 py-2">
            <svg
              fill={theme === "dark" ? "#ffffff" : "#000000"}
              className="h-5 w-5"
              viewBox="0 0 52 52"
              data-name="Layer 1"
              id="Layer_1"
              stroke={theme === "dark" ? "#ffffff" : "#000000"}
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M50,52H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0H50a2,2,0,0,1,2,2V50A2,2,0,0,1,50,52ZM4,48H48V4H4Z"></path>
                <path d="M50,13.6H2a2,2,0,0,1,0-4H50a2,2,0,0,1,0,4Z"></path>
                <path d="M50,23.2H2a2,2,0,0,1,0-4H50a2,2,0,0,1,0,4Z"></path>
                <path d="M50,32.8H2a2,2,0,1,1,0-4H50a2,2,0,1,1,0,4Z"></path>
                <path d="M50,42.4H2a2,2,0,0,1,0-4H50a2,2,0,0,1,0,4Z"></path>
                <path d="M26,52a2,2,0,0,1-2-2V2a2,2,0,0,1,4,0V50A2,2,0,0,1,26,52Z"></path>
              </g>
            </svg>
            <span className="font-bold">Employee Table View</span>
          </Link>
        </li>
        <li className="group w-full hover:bg-sky-800  rounded-md">
          <Link href="/employee-card-view" className="flex items-center gap-2  w-full px-3 py-2">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12Z"
                  stroke={theme === "dark" ? "#ffffff" : "#000000"}
                  strokeWidth="1.5"
                ></path>{" "}
                <path
                  d="M10 16H6"
                  stroke={theme === "dark" ? "#ffffff" : "#000000"}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>{" "}
                <path
                  d="M14 16H12.5"
                  stroke={theme === "dark" ? "#ffffff" : "#000000"}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>{" "}
                <path
                  d="M2 10L22 10"
                  stroke={theme === "dark" ? "#ffffff" : "#000000"}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>{" "}
              </g>
            </svg>
            <span className="font-bold">Employee Card View</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SidebarWeb;

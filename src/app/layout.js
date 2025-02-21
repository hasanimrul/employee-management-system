"use client";
import "../styles/globals.css";
import Header from "@/components/header/Header";
import SidebarWeb from "@/components/SidebarWeb";
import { ThemeProvider } from "@/contexts/ThemeContext";

function setInitialTheme() {
  const theme = localStorage.getItem("theme") || "dark";
  document.documentElement.classList.add(theme);
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(${setInitialTheme.toString()})();`,
          }}
        />
      </head>
      <body className="p-5">
        <ThemeProvider>
          <Header />
          <main className="lg:grid md:grid grid-cols-12 gap-5 w-full">
            <div className="col-span-3 hidden lg:block md:block">
              <SidebarWeb />
            </div>
            <div className="col-span-12 lg:col-span-9 md:col-span-9">
              {children}
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

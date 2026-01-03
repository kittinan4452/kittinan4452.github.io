"use client";
import { useState, useEffect } from "react";
// นำเข้า Icon จาก Lucide แทนการใช้ Emoji ใน Desktop (ถ้าต้องการ)
import { Home, Code, Zap, Mail, Menu, X, User, Moon, Sun } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

 useEffect(() => {
  const hash = window.location.hash;

  if (hash) {
    const targetId = hash.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      const timer = setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
      }, 100);

      // ⭐ ล้าง hash ออกจาก URL
      window.history.replaceState(null, null, "/");

      return () => clearTimeout(timer);
    }
  }

  const handleScroll = () => setScrolled(window.scrollY > 20);
  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

const handleScrollToSection = (id) => {
  const targetId = id.replace("#", "");
  const el = document.getElementById(targetId);

  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }

  setIsMenuOpen(false);

  // ⭐ รีเซ็ต URL กลับเป็น root โดยไม่โหลดหน้า
  window.history.replaceState(null, null, "/");
};


  const menuItems = [
    { href: "contentinfo", label: "Home", icon: <Home className="w-4 h-4" /> },
    { href: "about", label: "About", icon: <User className="w-4 h-4" /> },
    { href: "skills", label: "Skills", icon: <Code className="w-4 h-4" /> },
    {
      href: "experiences",
      label: "Projects",
      icon: <Zap className="w-4 h-4" />,
    },
  ];

  return (
    <nav >
      <div
        className={`fixed w-full z-50 top-0 left-0 transition-all duration-300 ${
          scrolled
            ? "bg-black/60 backdrop-blur-sm border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between mx-auto px-6 py-4  max-w-screen-xl">
          {/* Logo */}
          <a href="/" className="group">
            <div className="flex items-center">
              <span className="font-mono text-2xl font-bold text-red-500">
                {"<"}
              </span>
              <h1 className="font-mono text-2xl font-bold text-red-500 mx-1">
                Tii
              </h1>
              <span className="font-mono text-2xl font-bold text-gray-300 dark:text-gray-300 max-md:hidden">
                Kittinan
              </span>
              <span className="font-mono text-2xl font-bold text-red-500 ml-1">
                {"/>"}
              </span>
            </div>
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-1">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  onClick={() => handleScrollToSection(item.href)}
                  className="flex items-center gap-2 px-4 py-2 font-mono text-sm text-gray-400 dark:text-gray-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5 dark:hover:bg-white/5"
                >
                  <span className="text-red-500">
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
            {/* Theme Toggle Button */}
            <li>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-white/5 dark:hover:bg-white/5 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-gray-400 dark:text-gray-400" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-600" />
                )}
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-300" />
            ) : (
              <Menu className="w-6 h-6 text-gray-300" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="px-6 py-4 space-y-2 border-t border-white/10 bg-black/80 dark:bg-black/80">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  onClick={() => handleScrollToSection(item.href)}
                  className="flex items-center gap-3 px-4 py-3 font-mono text-sm text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors duration-200"
                >
                  <span className="text-red-500">{item.icon}</span>
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
            {/* Theme Toggle in Mobile Menu */}
            <li>
              <button
                onClick={toggleTheme}
                className="flex items-center gap-3 px-4 py-3 font-mono text-sm text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors duration-200 w-full"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-gray-400" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-400" />
                )}
                <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

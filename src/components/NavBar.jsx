// src/components/NavBar.jsx
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "FAQs", path: "/faqs" },
    { label: "Contact Us", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-lg border-b border-cyan-500/20">
      <nav className="container mx-auto px-6 py-5 flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <h1
            className="text-3xl md:text-4xl font-bold text-cyan-400 cursor-pointer tracking-wider"
            style={{ textShadow: "0 0 15px #ff99ff, 0 0 30px #b300ff" }}
          >
            NexTech
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 text-white text-lg font-medium">
          {menuItems.map((item, index) => (
            <li key={item.path} className="flex items-center">
              <Link
                to={item.path}
                className={`hover:text-cyan-300 transition-colors duration-300 ${isActive(item.path) ? "text-cyan-300" : ""}`}
              >
                {item.label}
              </Link>
              {index < menuItems.length - 1 && (
                <span className="mx-5 text-cyan-400 text-xl">•</span>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-cyan-400 text-3xl focus:outline-none"
          style={{ textShadow: "0 0 12px #00fff7" }}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black/95 border-t border-cyan-500/30">
          <ul className="container mx-auto px-6 py-8 space-y-6 text-center">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-xl block hover:text-cyan-300 transition-colors ${isActive(item.path) ? "text-cyan-300" : "text-white"}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MenuItem {
  id: string;
  label: string;
  submenu: string[];
}

const menuItems: MenuItem[] = [
  { id: "home", label: "HOME", submenu: ["Dashboard", "Profile"] },
  { id: "about", label: "ABOUT", submenu: ["Our Story", "Team", "Vision"] },
  {
    id: "services",
    label: "SERVICES",
    submenu: ["Web Design", "Development", "Marketing"],
  },
  { id: "contact", label: "CONTACT", submenu: ["Email", "Phone", "Location"] },
];

const Navbar: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [elementHeight, setElementHeight] = useState<string>("0px");
  const timeoutRef = useRef<number | null>(null);

  const handleMouseEnter = (id: string): void => {
    setActiveItem(id);
    switch (id) {
      case "home":
        setElementHeight("100px");
        break;
      case "about":
        setElementHeight("300px");
        break;
      case "services":
        setElementHeight("150px");
        break;
      default:
        setElementHeight("250px");
        break;
    }
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleMouseLeave = (): void => {
    timeoutRef.current = window.setTimeout(() => {
      setActiveItem(null);
      setElementHeight("0px");
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <nav className="bg-white px-2 fixed top-0 left-0 w-full z-50">
      <ul className="flex relative w-1/3 md:left-48">
        {menuItems.map((item) => (
          <li key={item.id} className="relative border-none">
            <motion.div
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={handleMouseLeave}
            >
              <motion.button
                className="text-black rounded-none bg-white py-4 text-sm font-medium px-8 border-none outline-none focus:outline-none font-sans"
                whileHover={{ backgroundColor: "#800080", color: "#ffffff" }}
                transition={{
                  type: "spring",
                  duration: 0.7,
                }}
              >
                {item.label}
              </motion.button>
            </motion.div>
          </li>
        ))}
      </ul>

      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: elementHeight }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              duration: 0.5,
            }}
            className="fixed left-0 mt-2 w-screen rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"
            onMouseEnter={() => {
              if (timeoutRef.current !== null) {
                clearTimeout(timeoutRef.current);
              }
            }}
            onMouseLeave={handleMouseLeave}
          >
            <div className="py-1">
              {menuItems
                .find((item) => item.id === activeItem)
                ?.submenu.map((subItem, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block px-4 py-2 text-2xl text-gray-700 hover:bg-gray-100"
                  >
                    {subItem}
                  </a>
                ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

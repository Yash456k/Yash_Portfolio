import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";

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
    submenu: ["Development"],
  },
  { id: "contact", label: "CONTACT", submenu: ["Email", "Phone", "Location"] },
];

const Navbar: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [elementHeight, setElementHeight] = useState<string>("0px");
  const timeoutRef = useRef<number | null>(null);

  const handleMouseEnter = (id: string): void => {
    setActiveItem(id);
    const item = menuItems.find((item) => item.id === id);
    if (item) {
      setElementHeight(`${item.submenu.length * 50}px`);
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <nav className="bg-white bg-opacity-0 backdrop-blur-lg px-4 py-2 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="flex justify-between items-center">
        <div className="text-3xl font-bold text-[#b3b382]">Yash K</div>
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-gray-600">
            <Menu size={24} />
          </button>
        </div>
        <ul className="hidden md:flex">
          {menuItems.map((item) => (
            <li key={item.id} className="relative ">
              <motion.div
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
              >
                <motion.button
                  className="text-black rounded-none  py-2 text-base font-medium px-4 border-none outline-none focus:outline-none font-sans overflow-hidden"
                  whileHover={{
                    backgroundColor: "#b3b382",
                    color: "#ffffff",
                  }}
                  transition={{
                    type: "spring",
                    duration: 0.4,
                  }}
                >
                  {item.label}
                </motion.button>
              </motion.div>
            </li>
          ))}
        </ul>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-2 overflow-hidden bg-white bg-opacity-50 backdrop-blur-md"
          >
            {menuItems.map((item) => (
              <div key={item.id} className="py-2">
                <button
                  onClick={() =>
                    setActiveItem(activeItem === item.id ? null : item.id)
                  }
                  className="w-full text-left text-gray-700 font-medium py-2"
                >
                  {item.label}
                </button>
                <AnimatePresence>
                  {activeItem === item.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="pl-4 "
                    >
                      {item.submenu.map((subItem, index) => (
                        <a
                          key={index}
                          href="#"
                          className="block py-2 text-sm text-gray-600 hover:text-purple-600 overflow-hidden "
                        >
                          {subItem}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeItem && !isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: elementHeight }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              duration: 0.3,
            }}
            className="fixed left-0 mt-2 w-screen shadow-lg bg-white bg-opacity-90 backdrop-blur-md ring-1 ring-black ring-opacity-5 overflow-hidden hidden md:block"
            onMouseEnter={() => {
              if (timeoutRef.current !== null) {
                clearTimeout(timeoutRef.current);
              }
            }}
            onMouseLeave={handleMouseLeave}
          >
            <div className="py-1 container mx-auto text-center ">
              {menuItems
                .find((item) => item.id === activeItem)
                ?.submenu.map((subItem, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100 hover:bg-opacity-50 "
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

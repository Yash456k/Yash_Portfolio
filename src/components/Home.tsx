import { useEffect, useRef, useState } from "react";
import "./style.css";
import { createSwapy } from "swapy";
import { motion } from "framer-motion";

const defaultItemStyle =
  "h-full flex items-center justify-center text-white cursor-pointer relative";

function A() {
  return (
    <div
      className={`${defaultItemStyle} text-center bg-gradient-to-r from-red-500 to-red-700 rounded-lg shadow-lg`}
      data-swapy-item="a"
    >
      Quotes by Marcus Aurelius
    </div>
  );
}

function B() {
  return (
    <div
      className={`${defaultItemStyle}  bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg shadow-lg`}
      data-swapy-item="b"
    >
      B
    </div>
  );
}

function C() {
  return (
    <div
      className={`${defaultItemStyle} bg-gradient-to-r from-pink-500 to-pink-700 rounded-lg shadow-lg`}
      data-swapy-item="c"
    >
      C
    </div>
  );
}

function projectDisplay(id: string) {
  switch (id) {
    case "a":
      return <div>This is A!</div>;
    case "b":
      return <div>This is B!</div>;
    case "c":
      return <div>This is C!</div>;
    default:
      return null;
  }
}

const Home: React.FC = () => {
  const containerRef = useRef(null);
  const [project, setProject] = useState("a");

  useEffect(() => {
    if (containerRef.current) {
      const swapy = createSwapy(containerRef.current);
      swapy.onSwap(({ data }) => {
        setProject(data.object.one!);
      });
      swapy.enable(true);
    }
  }, []);

  return (
    <div className="flex flex-col-reverse md:flex-row h-screen overflow-hidden bg-gradient-to-br from-gray-100 to-gray-300">
      <div className="md:w-1/2 w-full h-[70%] md:h-full flex items-center justify-center p-10">
        <motion.div
          key={project}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="text-3xl text-gray-800 font-bold"
        >
          {projectDisplay(project)}
        </motion.div>
      </div>
      <div
        ref={containerRef}
        className="mt-10 md:w-1/2 w-full h-[30%] md:h-full flex flex-col justify-around items-center p-10  md:text-2xl text-base"
      >
        <div
          className="md:h-1/3 h-2/3 md:w-1/2 w-3/5 a rounded-lg shadow-xl transform hover:scale-105 transition duration-500 ease-in-out md:text-4xl text-2xl"
          data-swapy-slot="one"
        >
          <A />
        </div>
        <div className="flex h-1/2 w-full items-center justify-evenly space-x-8">
          <div
            className="md:h-1/2 h-2/3 b md:w-1/3 w-2/5 rounded-lg shadow-xl transform hover:scale-105 transition duration-500 ease-in-out"
            data-swapy-slot="two"
          >
            <B />
          </div>
          <div
            className="md:h-1/2 h-2/3 c md:w-1/3 w-2/5 rounded-lg shadow-xl transform hover:scale-105 transition duration-500 ease-in-out"
            data-swapy-slot="three"
          >
            <C />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

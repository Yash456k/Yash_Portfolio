import { useEffect, useRef, useState } from "react";
import { createSwapy } from "swapy";
import { motion } from "framer-motion";

const defaultItemStyle =
  "h-full w-full flex items-center justify-center text-white cursor-pointer relative";

function A() {
  return (
    <div
      className={`${defaultItemStyle} text-center rounded-lg shadow-lg overflow-hidden`}
      data-swapy-item="a"
    >
      <img
        src="https://cdn.dribbble.com/userupload/7995514/file/original-1823e321984a1e14ca26f0ee32fea988.png?resize=1200x900"
        alt="Marcus Aurelius Quote"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <span className=" font-bold">Quotes by Marcus Aurelius</span>
      </div>
    </div>
  );
}

function B() {
  return (
    <div
      className={`${defaultItemStyle} bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg shadow-lg`}
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
      return <div>This is A: Marcus Aurelius Quotes</div>;
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
    <div className="flex flex-col-reverse md:flex-row h-screen overflow-hidden bg-white">
      <div className="md:w-1/2 w-full h-[65%] md:h-full flex items-center justify-center md:p-10 p-2">
        <motion.div
          key={project}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="text-3xl text-center text-gray-800 font-bold"
        >
          {projectDisplay(project)}
        </motion.div>
      </div>
      <div
        ref={containerRef}
        className="mt-10 md:w-1/2 w-full h-[35%] md:h-full flex flex-col justify-around items-center md:p-10 p-2 md:text-2xl text-sm"
      >
        <h3 className="font-bold py-8">
          Drag and swap the items to view project details !
        </h3>
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

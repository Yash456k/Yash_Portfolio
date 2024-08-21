import { useEffect, useRef, useState } from "react";
import "./style.css";
import { createSwapy } from "swapy";
import { AnimatePresence, motion } from "framer-motion";

const defaultItemStyle =
  "w-full h-full flex items-center justify-center text-white text-4xl cursor-pointer relative";

function A() {
  return (
    <>
      <div className={` ${defaultItemStyle} bg-red-700`} data-swapy-item="a">
        <div className="handle" data-swapy-handle></div>
        <div>A</div>
      </div>
    </>
  );
}

function C() {
  return (
    <>
      <div className={`${defaultItemStyle} bg-blue-600`} data-swapy-item="c">
        <div>C</div>
      </div>
    </>
  );
}

function D() {
  return (
    <>
      <div className={`${defaultItemStyle} bg-pink-600`} data-swapy-item="d">
        <div>D</div>
      </div>
    </>
  );
}

const Home: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [project, setProject] = useState<string | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      const swapy = createSwapy(containerRef.current);
      swapy.onSwap(({ data }) => {
        setProject(data.object.one);
      });
      swapy.enable(true);
    }
  });
  return (
    <div className=" h-screen flex flex-col items-center justify-center overflow-hidden">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={project}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.5,
          }}
          className="text-7xl text-black"
        >
          {project}
        </motion.div>
      </AnimatePresence>
      <div className="container" ref={containerRef}>
        <div className="slot a" data-swapy-slot="one">
          <A />
        </div>
        <div className="second-row">
          <div className="slot b" data-swapy-slot="two"></div>
          <div className="slot c" data-swapy-slot="three">
            <C />
          </div>
        </div>
        <div className="slot d" data-swapy-slot="four">
          <D />
        </div>
      </div>
    </div>
  );
};

export default Home;

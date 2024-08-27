import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import reactPng from "../../assets/React-icon.svg.png";
import nodePng from "../../assets/nodejs.png";
import expressPng from "../../assets/expressjs.png";
import nextPng from "../../assets/nextjs.png";
import jsPng from "../../assets/javascript.png";
import typePng from "../../assets/typescript.png";
import mongoPng from "../../assets/mongodb.png";
import tailwindPng from "../../assets/tailwindcss.png";
import socketPng from "../../assets/socketio.png";
import dockerPng from "../../assets/docker.png";
import reduxPng from "../../assets/redux.png";

interface Skill {
  name: string;
  image: string;
}

const skills: Skill[] = [
  { name: "TypeScript", image: typePng },
  { name: "NextJs", image: nextPng },
  { name: "React", image: reactPng },
  { name: "Javascript", image: jsPng },
  { name: "Node.js", image: nodePng },
  { name: "MongoDb", image: mongoPng },
  { name: "Express", image: expressPng },
  { name: "Tailwind CSS", image: tailwindPng },
  { name: "Docker", image: dockerPng },
  { name: "Socket.io", image: socketPng },
  { name: "Redux", image: reduxPng },
];

const SkillCard: React.FC<{ skill: Skill; index: number }> = ({
  skill,
  index,
}) => {
  const rand: number = Math.floor(Math.random() * 15) - 7;
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { delay: index * 0.15 },
          rotate: `${rand}deg`,
        },
        hidden: { opacity: 0, y: 20 },
      }}
      className="md:bg-white bg-black rounded-lg shadow-md md:p-2 p-3 flex flex-col items-center"
    >
      <img
        src={skill.image}
        alt={skill.name}
        className="w-28 h-28 object-contain  hidden sm:block"
      />
      <p className="md:hidden text-center text-white font-semibold">
        {skill.name}
      </p>
    </motion.div>
  );
};

const SkillsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section ref={ref} className="py-16 bg-gray-100 ">
      <div className="container mx-auto px-4 max-w-screen-md">
        <motion.h2
          animate={controls}
          initial="hidden"
          variants={{
            visible: { opacity: 1, y: 0, transition: { delay: 0.15 } },
            hidden: { opacity: 0, y: -20 },
          }}
          className="text-5xl font-bold text-center mb-12 underline underline-offset-8"
        >
          Skills
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index + 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

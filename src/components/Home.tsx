import { useEffect, useRef, useState } from "react";
import { createSwapy } from "swapy";
import { motion } from "framer-motion";
import marcusPng from "../assets/quotesbymarcusaurelius.png";
import chatAppPng from "../assets/MERN_Socketio_ChatApp_Screenshot.png";
import MernNotesPng from "../assets/MERN_Notes_App.png";

const defaultItemStyle =
  "h-full w-full flex items-center justify-center text-white cursor-pointer relative";

interface AlertProps {
  title: string;
  description: string;
}

const Alert: React.FC<AlertProps> = ({ title, description }) => (
  <div
    className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mb-4 text-xs sm:text-sm"
    role="alert"
  >
    <p className="font-bold">{title}</p>
    <p>{description}</p>
  </div>
);

function A() {
  return (
    <div
      className={`${defaultItemStyle} text-center rounded-lg shadow-lg overflow-hidden`}
      data-swapy-item="a"
    >
      <img
        src={marcusPng}
        alt="Marcus Aurelius Quote"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <span className="font-bold text-xs sm:text-base">
          Quotes by Marcus Aurelius
        </span>
      </div>
    </div>
  );
}

function B() {
  return (
    <div
      className={`${defaultItemStyle} text-center rounded-lg shadow-lg overflow-hidden`}
      data-swapy-item="b"
    >
      <img
        src={chatAppPng}
        alt="Chat App"
        className="absolute inset-0 w-full h-full object-fill"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <span className="font-bold text-xs sm:text-base">
          MERN + socket.io Chat App
        </span>
      </div>
    </div>
  );
}

function C() {
  return (
    <div
      className={`${defaultItemStyle} text-center rounded-lg shadow-lg overflow-hidden`}
      data-swapy-item="c"
    >
      <img
        src={MernNotesPng}
        alt="Mern Notes App"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <span className="font-bold text-xs sm:text-base">MERN Notes App</span>
      </div>
    </div>
  );
}

function projectDisplay(id: string) {
  switch (id) {
    case "a":
      return (
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-2 sm:mb-4">
            Quotes by Marcus Aurelius
          </h2>
          <p className="text-sm sm:text-base">
            An inspiring collection of wisdom from the great Stoic philosopher
            Marcus Aurelius.
          </p>
          <ul className="list-disc list-inside space-y-1 sm:space-y-2.5 text-sm sm:text-base">
            <li>
              Features over 100 hand-picked quotes from the book "Meditations by
              Marcus Aurelius"
            </li>
            <li>
              Beautiful minimalist design, with 3 themes you can choose from
            </li>
            <li>
              A quote rotation algorithm to make sure you view unique quotes
              everytime
            </li>
            <li>Ability to bookmark favorites and create custom collections</li>
          </ul>
          <p className="text-black text-xs sm:text-sm">
            Tech used: <span className="text-[#bfbf52]">MongoDB</span>,{" "}
            <span className="text-[#bfbf52]">Express</span>,{" "}
            <span className="text-[#bfbf52]">Reactjs</span>,{" "}
            <span className="text-[#bfbf52]">NodeJS</span>,{" "}
            <span className="text-[#bfbf52]">Socket.io</span>
          </p>
          <p className="text-black text-xs sm:text-sm">
            Tools used: <span className="text-[#bfbf52]">Google OAuth2.0</span>,{" "}
            <span className="text-[#bfbf52]">Firebase</span>,{" "}
            <span className="text-[#bfbf52]">Gemini API</span>,{" "}
            <span className="text-[#bfbf52]">JWT</span>,{" "}
            <span className="text-[#bfbf52]">React Context API</span>
          </p>
          <div className="flex gap-3 sm:gap-5 items-center">
            <button className="p-1 px-2 sm:px-3 rounded-full mt-4 sm:mt-6 bg-black text-white text-xs sm:text-sm">
              View Demo
            </button>
            <button className="p-1 px-2 sm:px-3 rounded-full mt-4 sm:mt-6 bg-black text-white text-xs sm:text-sm">
              Source Code
            </button>
          </div>
        </div>
      );
    case "b":
      return (
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-2 sm:mb-4">
            MERN + socket.io Chat App
          </h2>
          <p className="text-sm sm:text-base">
            A real-time chat application built with modern web technologies.
          </p>
          <ul className="list-disc list-inside space-y-1 sm:space-y-2.5 text-sm sm:text-base">
            <li>Instant messaging website using WebSockets (Socket.io)</li>
            <li>User authentication with firebase and Google OAuth2.0</li>
            <li>
              Text with anyone on the app, with your messages being stored
              securely on a database
            </li>
            <li>You can also chat with Google Gemini</li>
          </ul>
          <p className="text-black text-xs sm:text-sm">
            Tech used: <span className="text-[#bfbf52]">MongoDB</span>,{" "}
            <span className="text-[#bfbf52]">Express</span>,{" "}
            <span className="text-[#bfbf52]">Reactjs</span>,{" "}
            <span className="text-[#bfbf52]">NodeJS</span>,{" "}
            <span className="text-[#bfbf52]">Socket.io</span>
          </p>
          <p className="text-black text-xs sm:text-sm">
            Tools used: <span className="text-[#bfbf52]">Google OAuth2.0</span>,{" "}
            <span className="text-[#bfbf52]">Firebase</span>,{" "}
            <span className="text-[#bfbf52]">Gemini API</span>,{" "}
            <span className="text-[#bfbf52]">JWT</span>,{" "}
            <span className="text-[#bfbf52]">React Context API</span>
          </p>

          <div className="flex gap-3 sm:gap-5 items-center">
            <button className="p-1 px-2 sm:px-3 rounded-full mt-4 sm:mt-6 bg-black text-white text-xs sm:text-sm">
              View Demo
            </button>
            <button className="p-1 px-2 sm:px-3 rounded-full mt-4 sm:mt-6 bg-black text-white text-xs sm:text-sm">
              Source Code
            </button>
          </div>
        </div>
      );
    case "c":
      return (
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-2 sm:mb-4">
            MERN Notes App
          </h2>
          <p className="text-sm sm:text-base">
            A powerful note-taking application built on the MERN stack.
          </p>
          <ul className="list-disc list-inside space-y-1 sm:space-y-2.5 text-sm sm:text-base">
            <li>Create, edit, and organize notes with ease</li>
            <li>Rich text editing with markdown support</li>
            <li>Tag and categorize notes for easy retrieval</li>
            <li>Secure user authentication and data encryption</li>
          </ul>
          <p className="text-black text-xs sm:text-sm">
            Tech used: <span className="text-[#bfbf52]">MongoDB</span>,{" "}
            <span className="text-[#bfbf52]">Express</span>,{" "}
            <span className="text-[#bfbf52]">Reactjs</span>,{" "}
            <span className="text-[#bfbf52]">NodeJS</span>,{" "}
          </p>
          <p className="text-black text-xs sm:text-sm">
            Tools used: <span className="text-[#bfbf52]">Bcrypt</span>,{" "}
            <span className="text-[#bfbf52]">JWT</span>,{" "}
            <span className="text-[#bfbf52]">Zustand</span>,{" "}
          </p>
          <div className="flex gap-3 sm:gap-5 items-center">
            <button className="p-1 px-2 sm:px-3 rounded-full mt-4 sm:mt-6 bg-black text-white text-xs sm:text-sm">
              View Demo
            </button>
            <button className="p-1 px-2 sm:px-3 rounded-full mt-4 sm:mt-6 bg-black text-white text-xs sm:text-sm">
              Source Code
            </button>
          </div>
        </div>
      );
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
    <div className="flex flex-col-reverse md:flex-row md:h-screen h-[110vh] overflow-hidden bg-gray-100">
      <div className="md:w-1/2 w-full h-[60%] md:h-full flex-col flex items-center justify-around p-2 md:p-4 lg:p-10">
        <motion.div
          key={project}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-2xl w-full max-w-2xl text-xs sm:text-sm md:text-base lg:text-lg"
        >
          {projectDisplay(project)}
        </motion.div>
        <button className="p-2 sm:p-3 rounded-lg border border-zinc-700 mt-4 sm:mt-6 bg-zinc-100 text-zinc-700 font-semibold shadow-lg transform hover:scale-110 transition-transform duration-300 ease-in-out text-xs sm:text-sm">
          View all my projects
        </button>
      </div>
      <div
        ref={containerRef}
        className="md:w-1/2 w-full h-[40%] md:h-full flex flex-col justify-around items-center p-2 md:p-4 lg:p-10 text-xs sm:text-sm md:text-base lg:text-xl"
      >
        <Alert
          title="Interact with the Projects!"
          description="Drag and swap the items below to view detailed project information in the showcase area."
        />
        <div
          className="h-1/2 md:h-1/3 w-3/4 md:w-1/2 rounded-lg shadow-xl transform hover:scale-105 transition duration-500 ease-in-out text-base sm:text-xl md:text-2xl lg:text-4xl border-2 border-dashed border-black flex items-center justify-center"
          data-swapy-slot="one"
        >
          <A />
        </div>
        <div className="flex h-1/3 w-full items-center justify-evenly space-x-4 sm:space-x-8">
          <div
            className="h-3/4 md:h-1/2 w-[45%] md:w-1/3 rounded-lg shadow-xl transform hover:scale-105 transition duration-500 ease-in-out"
            data-swapy-slot="two"
          >
            <B />
          </div>
          <div
            className="h-3/4 md:h-1/2 w-[45%] md:w-1/3 rounded-lg shadow-xl transform hover:scale-105 transition duration-500 ease-in-out"
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

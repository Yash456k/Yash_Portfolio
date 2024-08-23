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
    className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mb-8 text-sm"
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
        <span className="font-bold">Quotes by Marcus Aurelius</span>
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
        <span className="font-bold">MERN + socket.io Chat App</span>
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
        <span className="font-bold">MERN Notes App</span>
      </div>
    </div>
  );
}

function projectDisplay(id: string) {
  switch (id) {
    case "a":
      return (
        <div className="space-y-4">
          <h2 className="md:text-4xl text-2xl font-bold mb-4">
            Quotes by Marcus Aurelius
          </h2>
          <p>
            An inspiring collection of wisdom from the great Stoic philosopher
            Marcus Aurelius.
          </p>
          <ul className="list-disc list-inside">
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
          <p>
            Perfect for people who are inspired by stoic quotes and love to read
            and bookmark them
          </p>
          <div className="flex gap-5 items-center">
            <button className="p-1 px-3 rounded-full mt-6 bg-black text-white">
              View Demo
            </button>
            <button className="p-1 px-3 rounded-full mt-6 bg-black text-white">
              Source Code
            </button>
          </div>
        </div>
      );
    case "b":
      return (
        <div className="space-y-4 ">
          <h2 className="md:text-4xl text-2xl font-bold mb-4">
            MERN + socket.io Chat App
          </h2>
          <p>
            A real-time chat application built with modern web technologies.
          </p>
          <ul className="list-disc list-inside">
            <li>Instant messaging website using WebSockets (Socket.io)</li>
            <li>User authentication with firebase and Google OAuth2.0</li>
            <li>
              Text with anyone on the app, with your messages being stored
              securely on a database
            </li>
            <li>You can also chat with Google Gemini</li>
          </ul>
          <p>
            Experience seamless communication in this feature-rich chat
            platform.
          </p>
          <div className="flex gap-5 items-center">
            <button className="p-1 px-3 rounded-full mt-6 bg-black text-white">
              View Demo
            </button>
            <button className="p-1 px-3 rounded-full mt-6 bg-black text-white">
              Source Code
            </button>
          </div>
        </div>
      );
    case "c":
      return (
        <div className="space-y-4">
          <h2 className="md:text-4xl text-2xl font-bold mb-4">
            MERN Notes App
          </h2>
          <p>A powerful note-taking application built on the MERN stack.</p>
          <ul className="list-disc list-inside">
            <li>Create, edit, and organize notes with ease</li>
            <li>Rich text editing with markdown support</li>
            <li>Tag and categorize notes for easy retrieval</li>
            <li>Secure user authentication and data encryption</li>
          </ul>
          <p>
            Stay organized and boost your productivity with this versatile notes
            app.
          </p>
          <div className="flex gap-5 items-center">
            <button className="p-1 px-3 rounded-full mt-6 bg-black text-white">
              View Demo
            </button>
            <button className="p-1 px-3 rounded-full mt-6 bg-black text-white">
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
    <div className="flex flex-col-reverse md:flex-row h-screen overflow-hidden bg-gray-100">
      <div className="md:w-1/2 w-full h-[65%] md:h-full flex-col flex items-center justify-around md:p-10 p-2">
        <motion.div
          key={project}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-2xl md:text-lg text-sm"
        >
          {projectDisplay(project)}
        </motion.div>
        <button className="p-3 rounded-full mt-6 bg-black text-white shadow-lg transform hover:scale-110 transition-transform duration-300 ease-in-out">
          View all my projects
        </button>
      </div>
      <div
        ref={containerRef}
        className="mt-10 md:w-1/2 w-full h-[35%] md:h-full flex flex-col justify-around items-center md:p-10 p-2 md:text-2xl text-sm"
      >
        <Alert
          title="Interact with the Projects!"
          description="Drag and swap the items below to view detailed project information in the showcase area."
        />
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

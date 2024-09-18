import React from "react";
import { ExternalLink, Github } from "lucide-react";
import marcusPng from "../assets/quotesbymarcusaurelius.png";
import chatAppPng from "../assets/MERN_Socketio_ChatApp_Screenshot.png";
import MernNotesPng from "../assets/MERN_Notes_App.png";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  sourceCodeUrl: string;
  demoUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Quotes by Marcus Aurelius",
    description:
      "An inspiring collection of wisdom from the great Stoic philosopher Marcus Aurelius.",
    imageUrl: marcusPng,
    sourceCodeUrl: "https://github.com/Yash456k/Marcus_Aurelius_Fullstack",
    demoUrl: "https://quotesbymarcusaurelius.vercel.app/",
  },
  {
    id: 2,
    title: "MERN + socket.io Chat App",
    description:
      "A real-time chat application built with modern web technologies.",
    imageUrl:chatAppPng ,
    sourceCodeUrl: "https://github.com/Yash456k/SocketIO-MERN-chatApp",
    demoUrl: "https://socket-io-mern-chat-app.vercel.app/",
  },
  {
    id: 3,
    title: "MERN Notes App",
    description: "A powerful note-taking application built on the MERN stack.",
    imageUrl: MernNotesPng,
    sourceCodeUrl: "https://github.com/Yash456k/MERN_Notes_App",
    demoUrl: "https://yash456k-basic-notes-mern-app.netlify.app/",
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 flex flex-col">
    <div className="relative pb-[56.25%] overflow-hidden">
      <img
        src={project.imageUrl}
        alt={project.title}
        className="absolute top-0 left-0 w-full h-full object-contain"
      />
    </div>
    <div className="p-6 flex-grow flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
      </div>
      <div className="flex justify-between mt-4">
        <a
          href={project.sourceCodeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors duration-300"
        >
          <Github className="mr-2" size={18} />
          Source Code
        </a>
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-4 py-2 bg-[#ff8c00] text-white rounded hover:bg-[#e67e00] transition-colors duration-300"
        >
          <ExternalLink className="mr-2" size={18} />
          View Demo
        </a>
      </div>
    </div>
  </div>
);

const AllProjects: React.FC = () => (
  <div className="flex justify-center items-center flex-col container mx-auto px-4 py-8 pt-24 bg-gray-100">
    <h1 className="mb-16 text-5xl  font-sans font-semibold">My Projects</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 gap-x-32 max-w-6xl mx-auto">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  </div>
);

export default AllProjects;

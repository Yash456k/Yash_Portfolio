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
  deprecated?: boolean;
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
    deprecated: true, // This project will now have the new blood slash effect
  },
  {
    id: 2,
    title: "MERN + socket.io Chat App",
    description:
      "A real-time chat application built with modern web technologies.",
    imageUrl: chatAppPng,
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
    deprecated: true, // This project will also have the new blood slash effect
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div
    className="
      font-fancy bg-white 
      border-2 border-black 
      transition-all duration-200 
      shadow-[8px_8px_0_0_#000] 
      hover:shadow-[4px_4px_0_0_#000] 
      hover:-translate-x-1 hover:-translate-y-1 
      flex flex-col
    "
  >
    <div className="relative pb-[56.25%] overflow-hidden border-b-2 border-black">
      <img
        src={project.imageUrl}
        alt={project.title}
        className="
          absolute top-0 left-0 w-full h-full 
          object-contain 
          [image-rendering:pixelated]
        "
      />
    </div>
    <div className="p-6 flex-grow flex flex-col justify-between">
      <div>
        <h3 className="text-2xl font-semibold mb-2 text-gray-800">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
      </div>
      <div className="flex flex-wrap gap-4 mt-4">
        <a
          href={project.sourceCodeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex items-center px-4 py-2 
            bg-gray-800 text-white 
            border-2 border-black
            shadow-[2px_2px_0_0_#4a5568] 
            hover:shadow-[2px_2px_0_0_#4a5568]
            active:shadow-[0px_0px_0_0_#4a5568]  
            active:translate-x-1 active:translate-y-1 
            transition-all duration-150
          "
        >
          <Github className="mr-2" size={18} />
          Source Code
        </a>
        
        {project.deprecated ? (
          <div className="relative">
            {/* Deprecated Demo Button (Grayed Out) */}
            <div
              className="
                flex items-center px-4 py-2 
                bg-gray-400 text-gray-600 
                border-2 border-black
                shadow-[2px_2px_0_0_#9ca3af]
                cursor-not-allowed
                opacity-75
              "
            >
              <ExternalLink className="mr-2" size={18} />
              View Demo
            </div>

            {/* SVG Blood Slash Overlay */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
              <svg
                viewBox="0 0 100 40"
                className="w-full h-full overflow-visible"
              >
                <defs>
                  {/* Filter to create a liquid, distorted texture */}
                  <filter id="blood-texture">
                    <feTurbulence
                      type="fractalNoise"
                      baseFrequency="0.9"
                      numOctaves="1"
                      result="turbulence"
                    />
                    <feDisplacementMap
                      in="SourceGraphic"
                      in2="turbulence"
                      scale="2"
                      xChannelSelector="R"
                      yChannelSelector="G"
                    />
                  </filter>
                  {/* Gradient for color depth */}
                  <linearGradient id="blood-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#880808" />
                    <stop offset="100%" stopColor="#dc2626" />
                  </linearGradient>
                </defs>

                {/* Applying the filter and gradient to the blood shapes */}
                <g filter="url(#blood-texture)" fill="url(#blood-gradient)">
                  {/* Main Slash */}
                  <path d="M-5 45 Q 30 20, 105 -5" stroke="url(#blood-gradient)" strokeWidth="6" />
                  
                  {/* Splatters */}
                  <circle cx="15" cy="10" r="4" />
                  <circle cx="85" cy="30" r="5" />
                  <circle cx="95" cy="8" r="3" />
                  <circle cx="5" cy="35" r="2" />

                  {/* Drips */}
                   <path d="M 20 38 Q 22 45, 18 50" strokeWidth="1"/>
                   <path d="M 80 5 Q 78 -5, 82 -8" strokeWidth="1.5"/>
                </g>
              </svg>

              {/* Deprecated Text */}
              <div
                className="
                  absolute text-white font-extrabold text-xs uppercase
                  transform -rotate-12
                  [text-shadow:1px_1px_0px_#7f1d1d,-1px_-1px_0px_#450a0a]
                  tracking-wider
                "
              >
                Abandoned
              </div>
            </div>
          </div>
        ) : (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center px-4 py-2 
              bg-[#ff8c00] text-white 
              border-2 border-black
              shadow-[2px_2px_0_0_#e67e00]
              hover:shadow-[2px_2px_0_0_#e67e00]
              active:shadow-[0px_0px_0_0_#e67e00]
              active:translate-x-1 active:translate-y-1
              transition-all duration-150
            "
          >
            <ExternalLink className="mr-2" size={18} />
            View Demo
          </a>
        )}
      </div>
    </div>
  </div>
);

const AllProjects: React.FC = () => (
  <div className="flex justify-center items-center flex-col px-8 py-8 pt-24 bg-gray-100 ">
    <h1 className="mb-16 text-5xl font-semibold font-fancy">My Projects</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 gap-x-32 max-w-6xl mx-auto">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  </div>
);

export default AllProjects;
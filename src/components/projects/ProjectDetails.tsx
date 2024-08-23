import React from "react";

interface ProjectDetailsProps {
  projectId: string;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ projectId }) => {
  // Probably need to refactor this :(
  const getProjectDetails = (id: string) => {
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
                Features over 100 hand-picked quotes from the book "Meditations
                by Marcus Aurelius"
              </li>
              <li>
                Beautiful minimalist design, with 3 themes you can choose from
              </li>
              <li>
                A quote rotation algorithm to make sure you view unique quotes
                everytime
              </li>
              <li>
                Ability to bookmark favorites and create custom collections
              </li>
            </ul>
            <p className="text-black text-xs sm:text-sm">
              Tech used: <span className="text-[#bfbf52]">MongoDB</span>,{" "}
              <span className="text-[#bfbf52]">Express</span>,{" "}
              <span className="text-[#bfbf52]">Reactjs</span>,{" "}
              <span className="text-[#bfbf52]">NodeJS</span>,{" "}
              <span className="text-[#bfbf52]">Socket.io</span>
            </p>
            <p className="text-black text-xs sm:text-sm">
              Tools used:{" "}
              <span className="text-[#bfbf52]">Google OAuth2.0</span>,{" "}
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
              Tools used:{" "}
              <span className="text-[#bfbf52]">Google OAuth2.0</span>,{" "}
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
  };

  const details = getProjectDetails(projectId);

  return <div className="space-y-2">{details}</div>;
};

export default ProjectDetails;

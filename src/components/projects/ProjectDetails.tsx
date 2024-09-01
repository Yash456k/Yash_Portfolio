import React from "react";

type TechTool = {
  name: string;
  color: string;
};

type ProjectData = {
  id: string;
  title: string;
  description: string;
  features: string[];
  tech: TechTool[];
  tools: TechTool[];
  github: string;
  demo: string;
};

const colors = {
  primary: "#ff8c00",
  secondary: "#000000",
  text: "#000000",
  background: "#ffffff",
};

const projectsData: ProjectData[] = [
  {
    id: "a",
    title: "Quotes by Marcus Aurelius",
    description:
      "An inspiring collection of wisdom from the great Stoic philosopher Marcus Aurelius.",
    features: [
      'Features over 100 hand-picked quotes from the book "Meditations by Marcus Aurelius"',
      "Beautiful minimalist design, with 3 themes you can choose from",
      "A quote rotation algorithm to make sure you view unique quotes everytime",
      "Ability to bookmark favorites and create custom collections",
    ],
    tech: [
      { name: "MongoDB", color: colors.primary },
      { name: "Express", color: colors.primary },
      { name: "Ejs", color: colors.primary },
      { name: "NodeJS", color: colors.primary },
    ],
    tools: [{ name: "JWT", color: colors.primary }],
    github: "https://github.com/Yash456k/Marcus_Aurelius_Fullstack",
    demo: "https://quotesbymarcusaurelius.vercel.app/",
  },
  {
    id: "b",
    title: "MERN + socket.io Chat App",
    description:
      "A real-time chat application built with modern web technologies.",
    features: [
      "Instant messaging website using WebSockets (Socket.io)",
      "User authentication with firebase and Google OAuth2.0",
      "Text with anyone on the app, with your messages being stored securely on a database",
      "You can also chat with Google Gemini",
    ],
    tech: [
      { name: "MongoDB", color: colors.primary },
      { name: "Express", color: colors.primary },
      { name: "Reactjs", color: colors.primary },
      { name: "NodeJS", color: colors.primary },
      { name: "Socket.io", color: colors.primary },
    ],
    tools: [
      { name: "Google OAuth2.0", color: colors.primary },
      { name: "Firebase", color: colors.primary },
      { name: "Gemini API", color: colors.primary },
      { name: "JWT", color: colors.primary },
      { name: "React Context API", color: colors.primary },
    ],
    github: "https://github.com/Yash456k/SocketIO-MERN-chatApp",
    demo: "https://socket-io-mern-chat-app.vercel.app/",
  },
  {
    id: "c",
    title: "MERN Notes App",
    description: "A powerful note-taking application built on the MERN stack.",
    features: [
      "Create, edit, and organize notes with ease",
      "Rich text editing with markdown support",
      "Tag and categorize notes for easy retrieval",
      "Secure user authentication and data encryption",
    ],
    tech: [
      { name: "MongoDB", color: colors.primary },
      { name: "Express", color: colors.primary },
      { name: "Reactjs", color: colors.primary },
      { name: "NodeJS", color: colors.primary },
    ],
    tools: [
      { name: "Bcrypt", color: colors.primary },
      { name: "JWT", color: colors.primary },
      { name: "Zustand", color: colors.primary },
    ],
    github: "https://github.com/Yash456k/MERN_Notes_App",
    demo: "https://yash456k-basic-notes-mern-app.netlify.app/",
  },
];

const TechToolList: React.FC<{ items: TechTool[]; label: string }> = ({
  items,
  label,
}) => (
  <p className="text-black text-xs sm:text-sm">
    {label}:{" "}
    {items.map((item, index) => (
      <span key={index} style={{ color: item.color }}>
        {item.name}
        {index < items.length - 1 ? ", " : ""}
      </span>
    ))}
  </p>
);

const Button: React.FC<{ text: string; link: string }> = ({ text, link }) => (
  <a
    target="_blank"
    href={`${link}`}
    className=" cursor-pointer p-1 px-2 sm:px-3 rounded-full mt-4 sm:mt-6 bg-black text-white text-xs sm:text-sm"
  >
    {text}
  </a>
);

interface ProjectDetailsProps {
  projectId: string;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ projectId }) => {
  const project = projectsData.find((p) => p.id === projectId);

  if (!project) return null;

  return (
    <div className="space-y-2">
      <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-2 sm:mb-4">
        {project.title}
      </h2>
      <p className="text-sm sm:text-base">{project.description}</p>
      <ul className="list-disc list-inside space-y-1 sm:space-y-2.5 text-sm sm:text-base">
        {project.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <TechToolList items={project.tech} label="Tech used" />
      <TechToolList items={project.tools} label="Tools used" />
      <div className="flex gap-3 sm:gap-5 items-center">
        <Button text="View Demo" link={project.demo} />
        <Button text="Source Code" link={project.github} />
      </div>
    </div>
  );
};

export default ProjectDetails;

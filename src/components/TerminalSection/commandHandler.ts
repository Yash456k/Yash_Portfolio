interface Project {
  id: number;
  name: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "MERN Chat App",
    description:
      "A fullstack chatting website using MERN and socket.io. You can chat with Google Gemini as well.",
  },
  {
    id: 2,
    name: "MERN Notes App",
    description: "Just a simple notes app.",
  },
  {
    id: 3,
    name: "Qoutes by Marcus Aurelius",
    description:
      "A quote displaying webstie featuring hand-picked quotes from 'The Quotes by Marcus Aurelius'.",
  },
];

export const handleCommand = (cmd: string): string => {
  const trimmedCmd = cmd.trim().toLowerCase();

  switch (true) {
    case trimmedCmd === "help":
      return [
        "Available commands:",
        "- help: Show this help message",
        "- clear: Clear the terminal",
        "- echo [text]: Display the text",
        "- proj: View all my projects",
        "- proj ls: List some of my projects",
        "- proj info [id]: Show project details",
        "- about: Show information about this terminal",
        "- yash: Show information about me",
        "- date: Display current date and time",
        "- ls: List files",
      ].join("\n");

    case trimmedCmd.startsWith("echo "):
      return cmd.slice(5).trim();

    case trimmedCmd.startsWith("sudo"):
      return "Nice try buddy. No priveleges for you.";

    case trimmedCmd === "proj ls":
      return projects.map((p) => `${p.id}. ${p.name}`).join("\n");

    case /^proj info \d+$/.test(trimmedCmd):
      const id = parseInt(trimmedCmd.split(" ")[2]);
      const project = projects.find((p) => p.id === id);
      return project
        ? `Project: ${project.name}\nDescription: ${project.description}`
        : "Project not found";

    case trimmedCmd === "about":
      return "This is an TypeScript React based terminal component I made.";

    case trimmedCmd === "date":
      return new Date().toLocaleString();

    case trimmedCmd === "yash":
      return "Hey there! I'm Yash, a full-stack developer who has experience in MERN, currently learning nextJs, interested in DevOps as well.";

    case trimmedCmd === "ls":
      return "open.me   dont_open.me";

    case trimmedCmd === "cat open.me":
      window.location.href = "https://www.youtube.com/watch?v=8ScAnaU0FFE";
      return "";

    case trimmedCmd === "cat dont_open.me":
      window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
      return "You asked for it";
    case trimmedCmd === "proj":
      window.location.href = "/all-projects";
      return "have fun!";

    default:
      if (trimmedCmd.startsWith("cat ")) {
        return "Can't find file. Please mention a file that exists.";
      }
      return `Command not found: ${trimmedCmd}. Type 'help' for available commands.`;
  }
};

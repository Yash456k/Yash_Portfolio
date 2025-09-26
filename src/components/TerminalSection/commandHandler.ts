
interface Project {
  id: number;
  name: string;
  description: string;
  link?: string; // Optional link for the project
}

const projects: Project[] = [
  {
    id: 1,
    name: "MERN Chat App",
    description: "A fullstack chatting website using MERN and socket.io. You can chat with Google Gemini as well.",
    link: "https://yashchatapp.vercel.app/", // Example project link
  },
  {
    id: 2,
    name: "MERN Notes App",
    description: "Just a simple notes app.",
    link: "https://github.com/Yash456k/MERN_Notes_App",
  },
  {
    id: 3,
    name: "Quotes by Marcus Aurelius",
    description: "A quote displaying website featuring hand-picked quotes from 'Meditations by Marcus Aurelius'.",
    link: "https://github.com/Yash456k/Marcus_Aurelius_Fullstack",
  },
  // Add more projects here with links!
];

// Define a type for a command response to include potential side effects like navigation
export type CommandResponse = {
  output: string;
  navigateTo?: string; // URL to navigate to
  shouldClear?: boolean; // Indicate if the terminal should clear
};

export const handleCommand = (cmd: string): CommandResponse => {
  const trimmedCmd = cmd.trim().toLowerCase();
  let output: string = "";
  let navigateTo: string | undefined;
  let shouldClear: boolean = false;

  switch (true) {
    case trimmedCmd === "help":
      output = [
        "Available commands:",
        "  - help: Show this help message",
        "  - clear: Clear the terminal screen",
        "  - echo [text]: Display the provided text",
        "  - proj: Display a list of all projects with options",
        "  - proj ls: List brief information about some projects",
        "  - proj info [id]: Show detailed information about a project",
        "  - proj view [id]: Open a project's link (if available)", // New command
        "  - about: Show information about this terminal",
        "  - yash: Show information about me",
        "  - date: Display current date and time",
        "  - ls: List files in the current directory",
        "  - cat [file]: Display contents of a file (e.g., 'cat open.me')",
        "  - contact: Show my contact details", // New command
        "  - whoami: Display current user", // New command
      ].join("\n");
      break;

    case trimmedCmd === "clear":
      output = "Terminal cleared.";
      shouldClear = true;
      break;

    case trimmedCmd.startsWith("echo "):
      output = cmd.slice(5).trim();
      break;

    case trimmedCmd.startsWith("sudo"):
      output = "Nice try, buddy. No privileges for you.";
      break;

    case trimmedCmd === "proj" || trimmedCmd === "projects": // Added "projects" alias
      output = [
        "Welcome to my project directory!",
        "  - 'proj ls': See a quick list of projects.",
        "  - 'proj info [id]': Get details on a specific project.",
        "  - 'proj view [id]': Open the project in your browser (if link available).",
        "  - For my full portfolio, just visit the 'All Projects' page (usually linked in the navigation)."
      ].join("\n");
      break;

    case trimmedCmd === "proj ls":
      output = projects.map((p) => `${p.id}. ${p.name}`).join("\n");
      if (projects.length === 0) output = "No projects listed yet. Stay tuned!";
      break;

    case /^proj info \d+$/.test(trimmedCmd):
      const infoId = parseInt(trimmedCmd.split(" ")[2]);
      const projectInfo = projects.find((p) => p.id === infoId);
      output = projectInfo
        ? `Project: ${projectInfo.name}\nDescription: ${projectInfo.description}${projectInfo.link ? `\nLink: ${projectInfo.link}` : ''}`
        : `Project with ID ${infoId} not found. Try 'proj ls'.`;
      break;

    case /^proj view \d+$/.test(trimmedCmd): // New command to view project
      const viewId = parseInt(trimmedCmd.split(" ")[2]);
      const projectToView = projects.find((p) => p.id === viewId);
      if (projectToView && projectToView.link) {
        navigateTo = projectToView.link;
        output = `Opening project: ${projectToView.name} in a new tab...`;
      } else if (projectToView && !projectToView.link) {
        output = `Project ${projectToView.name} does not have a public link available yet.`;
      } else {
        output = `Project with ID ${viewId} not found. Try 'proj ls'.`;
      }
      break;

    case trimmedCmd === "about":
      output = "This is a minimalist, interactive terminal component built with React and TypeScript.";
      break;

    case trimmedCmd === "date":
      output = new Date().toLocaleString();
      break;

    case trimmedCmd === "yash":
      output = "Hey there! I'm Yash, a full-stack developer with experience in MERN stack. I'm currently expanding my skills with Next.js and diving deeper into DevOps.!";
      break;

    case trimmedCmd === "ls":
      output = "open.me \ndont_open.me "; // Added emojis for flair
      break;

    case trimmedCmd === "cat open.me":
      navigateTo = "https://www.youtube.com/watch?v=8ScAnaU0FFE"; // A wholesome link
      output = "A surprise awaits you...";
      break;

    case trimmedCmd === "cat dont_open.me":
      navigateTo = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"; // Rickroll!
      output = "You asked for it";
      break;
    
    case trimmedCmd === "contact": // New contact command
      output = [
        "Reach out to me! I'd love to connect.",
        "  Email: yashkhambhattak@gmail.com",
        "  Twitter/X: https://www.x.com/yash654k",
        "  LinkedIn: https://www.linkedin.com/in/yash-khambhatta (Replace with your actual URL!)"
      ].join("\n");
      break;

    case trimmedCmd === "whoami": // New command
      output = "idk";
      break;

    default:
      if (trimmedCmd.startsWith("cat ")) {
        const fileName = trimmedCmd.slice(4).trim();
        output = `Error: File not found: '${fileName}'. Type 'ls' to see available files.`;
      } else {
        output = `Command not found: '${trimmedCmd}'. Type 'help' for available commands.`;
      }
      break;
  }
  return { output, navigateTo, shouldClear };
};
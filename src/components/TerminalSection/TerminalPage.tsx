import React, { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon } from "lucide-react";

interface CommandEntry {
  id: number;
  timestamp: Date;
  input: string;
  output: string;
  isNew: boolean;
}

interface Project {
  id: number;
  name: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "Web Development",
    description: "A responsive website using React and Tailwind CSS",
  },
  {
    id: 2,
    name: "Data Analysis",
    description: "Python script for analyzing sales data",
  },
  {
    id: 3,
    name: "Machine Learning",
    description: "Image classification model using TensorFlow",
  },
];

const defaultInfo: CommandEntry[] = [
  {
    id: 0,
    timestamp: new Date(),
    input: `Type "help" to view all commands available`,
    output: `Tip: View the source code or try to navigate the terminal for some
            easter eggs!`,
    isNew: false,
  },
];

const TerminalPage: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [commandHistory, setCommandHistory] = useState<CommandEntry[]>([
    ...defaultInfo,
  ]);
  const [isProcessing, setIsProcessing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  const handleCommand = (cmd: string): string => {
    const trimmedCmd = cmd.trim().toLowerCase();

    switch (true) {
      case trimmedCmd === "help":
        return [
          "Available commands:",
          "- help: Show this help message",
          "- clear: Clear the terminal",
          "- echo [text]: Display the text",
          "- proj ls: List all projects",
          "- proj info [id]: Show project details",
          "- about: Show information about this terminal",
          "- yash: Show information about me",
          "- date: Display current date and time",
          "- history: Show command history",
          "- ls: List files",
        ].join("\n");

      case trimmedCmd === "clear":
        setCommandHistory([...defaultInfo]);
        return "";

      case trimmedCmd.startsWith("echo "):
        return cmd.slice(5).trim();

      case trimmedCmd === "proj ls":
        return projects.map((p) => `${p.id}. ${p.name}`).join("\n");

      case /^proj info \d+$/.test(trimmedCmd):
        const id = parseInt(trimmedCmd.split(" ")[2]);
        const project = projects.find((p) => p.id === id);
        return project
          ? `Project: ${project.name}\nDescription: ${project.description}`
          : "Project not found";

      case trimmedCmd === "about":
        return "This is an enhanced TypeScript React-based terminal component with structured state.";

      case trimmedCmd === "date":
        return new Date().toLocaleString();

      case trimmedCmd === "yash":
        return "Hey there! I'm Yash, a full-stack developer who has experience in MERN, currently learning nextJs, interested in DevOps as well";

      case trimmedCmd === "ls":
        return "open.me   dont_open.me";

      case trimmedCmd === "cat open.me":
        window.location.href = "https://www.youtube.com/watch?v=8ScAnaU0FFE";
        return "";

      case trimmedCmd === "cat dont_open.me":
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
        return "You asked for it";

      case trimmedCmd === "history":
        return commandHistory
          .map(
            (entry) =>
              `${entry.timestamp.toLocaleTimeString()} - ${entry.input}`
          )
          .join("\n");

      default:
        if (trimmedCmd.startsWith("cat ")) {
          return "Can't find file. Please mention a file that exists.";
        }
        return `Command not found: ${trimmedCmd}. Type 'help' for available commands.`;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isProcessing) return;

    setIsProcessing(true);
    const currentInput = input;
    console.log(currentInput);
    const output = handleCommand(currentInput);

    setTimeout(() => {
      setInput("");

      setTimeout(() => {
        const newEntry: CommandEntry = {
          id: Date.now(),
          timestamp: new Date(),
          input: currentInput,
          output,
          isNew: true,
        };
        if (currentInput != "clear")
          setCommandHistory((prev) => [...prev, newEntry]);
        setIsProcessing(false);
      }, 50);
    }, 100);
  };

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [commandHistory]);

  return (
    <div className="text-left min-h-screen w-full flex-col bg-black flex justify-center items-center p-4">
      <div className="text-left w-full max-w-2xl flex items-center justify-center flex-col break-words">
        <h2 className="text-white w-full text-4xl mb-3">Terminal</h2>
        <div className="text-white rounded-xl border-2 w-full h-[450px] border-white/30 bg-black flex flex-col">
          <div className="w-full h-12 flex flex-row justify-between items-center p-3 mb-3">
            <div className="flex space-x-3">
              <button className="bg-red-600 rounded-full h-3 w-3"></button>
              <button className="bg-yellow-600 rounded-full h-3 w-3"></button>
              <button className="bg-green-600 rounded-full h-3 w-3"></button>
            </div>
            <p>Yash@456k</p>
            <TerminalIcon />
          </div>

          <div
            ref={outputRef}
            className="flex-1 p-3 pt-0 overflow-y-auto overflow-x-hidden no-scrollbar"
          >
            {commandHistory.map((entry) =>
              entry.id === 0 ? (
                <div>
                  <p key={entry.id} className="text-lg text-white/70">
                    {entry.input}
                  </p>
                  <p className="text-xs italic text-white/70">{entry.output}</p>{" "}
                </div>
              ) : (
                <div key={entry.id}>
                  <pre className="text-gray-400 text-xs whitespace-pre-wrap break-words">
                    {entry.timestamp.toLocaleTimeString()}
                  </pre>
                  <pre className="mb-1 text-green-400 whitespace-pre-wrap break-words">
                    $ {entry.input}
                  </pre>
                  <pre className="mb-2 text-white whitespace-pre-wrap break-words">
                    {entry.output}
                  </pre>
                </div>
              )
            )}
            <form onSubmit={handleSubmit} className="mt-2">
              <div className="flex items-center">
                <span className="mr-2 text-green-400">$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-green-400 w-full"
                  disabled={isProcessing}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminalPage;

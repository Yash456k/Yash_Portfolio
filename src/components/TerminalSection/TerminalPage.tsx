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

const TerminalPage: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [commandHistory, setCommandHistory] = useState<CommandEntry[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);
  const handleCommand = (cmd: string): string => {
    const [command, ...args] = cmd.split(" ");
    switch (command.toLowerCase()) {
      case "help":
        return [
          "Available commands:",
          "- help: Show this help message",
          "- clear: Clear the terminal",
          "- echo [text]: Display the text",
          "- proj ls: List all projects",
          "- proj info [id]: Show project details",
          "- about: Show information about this terminal",
          "- date: Display current date and time",
          "- history: Show command history",
        ].join("\n");
      case "clear":
        setCommandHistory([]);
        return "Terminal cleared";
      case "echo":
        return args.join(" ");
      case "proj":
        if (args[0] === "ls") {
          return projects.map((p) => `${p.id}. ${p.name}`).join("\n");
        } else if (args[0] === "info" && args[1]) {
          const project = projects.find((p) => p.id === parseInt(args[1]));
          return project
            ? `Project: ${project.name}\nDescription: ${project.description}`
            : "Project not found";
        }
        return "Invalid proj command. Use 'proj ls' or 'proj info [id]'";
      case "about":
        return "This is an enhanced TypeScript React-based terminal component with structured state.";
      case "date":
        return new Date().toLocaleString();
      case "history":
        return commandHistory
          .map(
            (entry) =>
              `${entry.timestamp.toLocaleTimeString()} - ${entry.input}`
          )
          .join("\n");
      default:
        return `Command not found: ${command}. Type 'help' for available commands.`;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isProcessing) return;

    setIsProcessing(true);
    const currentInput = input;
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
        setCommandHistory((prev) => [...prev, newEntry]);
        setIsProcessing(false);
      }, 50);
    }, 100);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
    if (commandHistory.length > 0) {
      const timer = setTimeout(() => {
        setCommandHistory((prev) =>
          prev.map((entry) => ({ ...entry, isNew: false }))
        );
      }, 10);
      return () => clearTimeout(timer);
    }
  }, [commandHistory]);

  return (
    <div className="text-left h-screen w-screen flex-col bg-black flex justify-center items-center">
      <div className="text-left md:max-w-2xl h-[450px] md:w-full w-5/6 flex items-center justify-center flex-col break-words">
        <h2 className="text-white w-full text-4xl mb-3">Terminal</h2>
        <div className="text-white rounded-xl border-2 h-full w-full border-white/30 bg-black flex flex-col">
          <div className="w-full h-10 flex flex-row justify-between items-center p-3">
            <div className="flex space-x-3">
              <button className="bg-red-600 rounded-full h-3 w-3"></button>
              <button className="bg-yellow-600 rounded-full h-3 w-3"></button>
              <button className="bg-green-600 rounded-full h-3 w-3"></button>
            </div>
            <p>User@Terminal</p>
            <TerminalIcon />
          </div>
          <div
            ref={outputRef}
            className="flex-1 p-3 overflow-y-auto no-scrollbar max-w-full"
          >
            {commandHistory.map((entry) => (
              <div
                key={entry.id}
                className={`transition-all duration-300 ease-out ${
                  entry.isNew
                    ? "translate-y-4 opacity-0"
                    : "translate-y-0 opacity-100"
                }`}
              >
                <pre className="text-gray-400 text-xs">
                  {entry.timestamp.toLocaleTimeString()}
                </pre>
                <pre className="mb-1 text-green-400">$ {entry.input}</pre>
                <pre className="mb-2 text-white">{entry.output}</pre>
              </div>
            ))}
            <form onSubmit={handleSubmit} className="mt-2">
              <div className="flex items-center">
                <span className="mr-2 text-green-400">$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-green-400"
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

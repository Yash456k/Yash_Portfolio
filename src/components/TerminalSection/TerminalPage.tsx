import React, { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon } from "lucide-react";
import { handleCommand } from "./commandHandler";

interface CommandEntry {
  id: number;
  timestamp: Date;
  input: string;
  output: string;
  isNew: boolean;
}

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
        if (currentInput === "clear") setCommandHistory([...defaultInfo]);
        else setCommandHistory((prev) => [...prev, newEntry]);
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
    <section
      id="terminal"
      className="text-left min-h-screen w-full flex-col bg-black flex justify-center items-center p-4"
    >
      <div className="text-left w-full max-w-[55rem] flex items-center justify-center flex-col break-words">
        <h2 className="text-white w-full text-4xl mb-3">Terminal</h2>
        <div className="text-white rounded-xl border-2 w-full h-[450px] border-white/30 bg-black flex flex-col">
          <div className="w-full h-12 flex flex-row justify-between items-center p-3 mb-3">
            <div className="flex space-x-3">
              <a
                className="bg-red-600 rounded-full h-3 w-3 cursor-pointer"
                target="blank"
                href="https://www.youtube.com/watch?v=VOK4NtCkNGg"
              ></a>
              <a
                className="bg-yellow-600 rounded-full h-3 w-3 cursor-pointer"
                target="blank"
                href="https://www.youtube.com/watch?v=VOK4NtCkNGg"
              ></a>
              <a
                className="bg-green-600 rounded-full h-3 w-3 cursor-pointer"
                target="blank"
                href="https://www.youtube.com/watch?v=VOK4NtCkNGg"
              ></a>
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
                <div key={entry.id}>
                  <p className="text-lg text-white/70">{entry.input}</p>
                  <p className="text-xs italic text-white/70">{entry.output}</p>
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
    </section>
  );
};

export default TerminalPage;

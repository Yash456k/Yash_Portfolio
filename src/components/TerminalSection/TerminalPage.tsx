import React, { useState, useRef, useEffect, useCallback } from "react";
import { Terminal as TerminalIcon } from "lucide-react";
import { handleCommand, CommandResponse } from "./commandHandler";

interface CommandEntry {
  id: number;
  timestamp: Date;
  input: string;
  output: string;
}

const defaultInfo: CommandEntry[] = [
  {
    id: 0,
    timestamp: new Date(),
    input: `Hello there`,
    output: `Type "help" to view all available commands.`,  
  },
];

const TerminalPage: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [commandHistory, setCommandHistory] = useState<CommandEntry[]>([...defaultInfo]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [historyIndex, setHistoryIndex] = useState(0); // Start index at 0 for simplicity
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  // Focus on the input field whenever the user clicks inside the terminal
  const focusInput = () => {
    inputRef.current?.focus();
  };

  useEffect(() => {
    focusInput();
  });

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [commandHistory]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isProcessing || input.trim() === "") return;

    setIsProcessing(true);
    const currentInput = input.trim();
    
    // Add command to history before clearing input, then reset history index
    const commands = commandHistory
      .filter(entry => entry.id !== 0)
      .map(entry => entry.input);
    setHistoryIndex(commands.length + 1);
    setInput("");

    const { output, navigateTo, shouldClear }: CommandResponse = handleCommand(currentInput);

    await new Promise(resolve => setTimeout(resolve, 300));

    if (shouldClear) {
      setCommandHistory([...defaultInfo]);
      setHistoryIndex(0); // Reset history index on clear
    } else {
      setCommandHistory((prev) => [
        ...prev,
        {
          id: Date.now(),
          timestamp: new Date(),
          input: currentInput,
          output,
        },
      ]);
    }

    setIsProcessing(false);

    if (navigateTo) {
      window.open(navigateTo, "_blank");
    }
  };

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (isProcessing) return;

    const commands = commandHistory
      .filter(entry => entry.id !== 0)
      .map(entry => entry.input);

    if (e.key === "ArrowUp") {
      e.preventDefault();
      const newIndex = Math.max(0, historyIndex - 1);
      setHistoryIndex(newIndex);
      setInput(commands[newIndex] || "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const newIndex = Math.min(commands.length, historyIndex + 1);
      setHistoryIndex(newIndex);
      setInput(commands[newIndex] || "");
    }
  }, [isProcessing, commandHistory, historyIndex]);

  return (
    <section
      id="terminal"
      className="text-left min-h-screen w-full flex-col bg-black flex justify-center items-center p-4"
    >
      <div className="text-left w-full max-w-[55rem] flex items-center justify-center flex-col break-words">
        <h2 className="text-white w-full text-4xl mb-3">Terminal</h2>
        <div
          className="text-white rounded-xl border-2 w-full h-[450px] border-white/30 bg-black flex flex-col font-mono"
          onClick={focusInput} // Focus input when clicking anywhere in the terminal
        >
          {/* Terminal Header */}
          <div className="w-full h-12 flex flex-row justify-between items-center p-3 mb-3">
            <div className="flex space-x-3">
              <span className="bg-red-600 rounded-full h-3 w-3"></span>
              <span className="bg-yellow-600 rounded-full h-3 w-3"></span>
              <span className="bg-green-600 rounded-full h-3 w-3"></span>
            </div>
            <p>Yash@456k</p>
            <TerminalIcon />
          </div>

          {/* Terminal Output Area */}
          <div
            ref={outputRef}
            className="flex-1 p-3 pt-0 overflow-y-auto overflow-x-hidden custom-scrollbar"
          >
            {commandHistory.map((entry) =>
              entry.id === 0 ? (
                <div key={entry.id}>
                  <p className="text-lg text-white/70">{entry.input}</p>
                  <pre className="text-xs italic text-white/70 whitespace-pre-wrap">{entry.output}</pre>
                </div>
              ) : (
                <div key={entry.id}>
                  <pre className="text-gray-400 text-xs whitespace-pre-wrap break-words">
                    {entry.timestamp.toLocaleTimeString()}
                  </pre>
                  <div className="flex items-center">
                    <span className="text-green-400 mr-2">$</span>
                    <span className="text-green-400 whitespace-pre-wrap break-words flex-1">
                      {entry.input}
                    </span>
                  </div>
                  <pre className="mb-2 text-white whitespace-pre-wrap break-words">
                    {entry.output}
                  </pre>
                </div>
              )
            )}
            {/* Current Input Line */}
            <form onSubmit={handleSubmit} className="mt-2">
              <div className="flex items-center">
                <span className="mr-2 text-green-400">$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent outline-none text-green-400 w-full caret-green-400"
                  disabled={isProcessing}
                  autoCapitalize="off"
                  autoComplete="off"
                  spellCheck="false"
                />
              </div>
            </form>
             {isProcessing && (
              <div className="mt-2 flex items-center text-gray-400">
                <span className="animate-pulse mr-2">...</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TerminalPage;
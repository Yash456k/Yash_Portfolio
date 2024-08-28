import React, { useEffect, useState } from "react";

interface TypeWriterProps {
  texts: string[];
  color: string;
}

const TypeWriter: React.FC<TypeWriterProps> = ({ texts, color }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(60);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = texts[currentIndex];
      const nextText = isDeleting
        ? currentWord.substring(0, currentText.length - 1)
        : currentWord.substring(0, currentText.length + 1);
      setCurrentText(nextText);

      if (!isDeleting && nextText === currentWord) {
        // The time it waits after the word has finished typing

        setIsDeleting(true);
        setTypingSpeed(2000);
      } else if (isDeleting && nextText === "") {
        //writing part
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setTypingSpeed(60);
      } else if (isDeleting && nextText !== currentWord) {
        //deleting part
        setTypingSpeed(40);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, currentIndex, isDeleting, typingSpeed, texts]);

  return (
    <>
      <span className={`text-[${color}] transition-colors duration-300`}>
        {currentText}
      </span>
      <span className="animate-pulse">|</span>
    </>
  );
};

export default TypeWriter;

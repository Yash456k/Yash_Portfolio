import React, { useEffect, useRef, useState } from "react";

const GlossyHeroSection: React.FC = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const texts = ["Full Stack Developer", "Freelancer"];
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = texts[currentIndex];
      const nextText = isDeleting
        ? currentWord.substring(0, currentText.length - 1)
        : currentWord.substring(0, currentText.length + 1);
      setCurrentText(nextText);
      if (!isDeleting && nextText === currentWord) {
        setIsDeleting(true);
        setTypingSpeed(2000);
      } else if (isDeleting && nextText === "") {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setTypingSpeed(90);
      } else if (isDeleting && nextText !== currentWord) {
        setTypingSpeed(60);
      }
    };
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, currentIndex, isDeleting, typingSpeed, texts]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#F5F5E6] to-white font-sans">
      <canvas ref={canvasRef} className="absolute inset-0" />

      <div className="relative z-10 flex h-screen flex-col items-center justify-center px-4 text-[#8a8a6f]">
        <div className="text-center">
          <h1 className="mb-4 text-6xl font-bold text-[#b3b382] md:text-7xl">
            Hi, I'm Yash
          </h1>
          <p className="mb-8 text-4xl font-semibold text-[#b1b1a2]">
            I am a{" "}
            <span className="text-[#a9a94c] transition-colors duration-300">
              {currentText}
            </span>
            <span className="animate-pulse">|</span>
          </p>
          <button className="rounded-full bg-gradient-to-r from-[#A8A890] to-[#DCDCCD] px-8 py-3 text-xl font-semibold text-white shadow-lg transition-all duration-300 hover:from-[#919180] hover:to-[#c8c8ba] hover:shadow-xl">
            View Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default GlossyHeroSection;

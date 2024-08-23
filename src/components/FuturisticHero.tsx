import React, { useEffect, useRef, useState } from "react";
import { Github, Twitter, MailPlus } from "lucide-react";

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
        // the part where the word is typed out and it waits before deleting
        setIsDeleting(true);
        setTypingSpeed(2000);
      } else if (isDeleting && nextText === "") {
        //writing part
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setTypingSpeed(60);
      } else if (isDeleting && nextText !== currentWord) {
        setTypingSpeed(40);
        //deleting part
      }
    };
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, currentIndex, isDeleting, typingSpeed, texts]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gray-100 font-sans">
      <canvas ref={canvasRef} className="absolute inset-0" />

      <div className=" relative z-10 flex h-screen flex-col items-center justify-center px-4 text-[#8a8a6f] w-full">
        <div className="md:text-left text-center md:w-5/12 ">
          <h1 className="mb-4 text-6xl font-bold text-black md:text-8xl">
            Hey, I'm Yash
          </h1>
          <p className="my-4 text-4xl font-semibold text-[#8a8a6f]  ">
            I am a{" "}
            <span className="text-[#a9a94c] transition-colors duration-300">
              {currentText}
            </span>
            <span className="animate-pulse">|</span>
          </p>
          <p className="my-4 text-2xl break-words text-black">
            I develop <span className="text-[#bfbf52]">Full-stack</span>{" "}
            websites/ applications, currently learning about{" "}
            <span className="text-[#bfbf52]">DevOps </span> + freelance
            sometimes
          </p>
          <div className="flex flex-col md:flex-row items-center gap-10">
            <button className="rounded-full bg-gradient-to-r from-[#bebe98] to-[#DCDCCD] px-8 py-3 text-xl font-semibold text-white shadow-lg transition-all duration-300 hover:from-[#919180] hover:to-[#c8c8ba] hover:shadow-xl">
              View Projects
            </button>
            <div className="gap-3 flex items-center">
              <button className="rounded-full bg-gradient-to-r from-[#bebe98] to-[#DCDCCD] p-3 text-xl font-semibold text-white shadow-lg transition-all duration-300 hover:from-[#919180] hover:to-[#c8c8ba] hover:shadow-xl">
                <Github />
              </button>
              <button className="rounded-full bg-gradient-to-r from-[#bebe98] to-[#DCDCCD] p-3 text-xl font-semibold text-white shadow-lg transition-all duration-300 hover:from-[#919180] hover:to-[#c8c8ba] hover:shadow-xl">
                <Twitter />
              </button>
              <button className="rounded-full bg-gradient-to-r from-[#bebe98] to-[#DCDCCD] p-3 text-xl font-semibold text-white shadow-lg transition-all duration-300 hover:from-[#919180] hover:to-[#c8c8ba] hover:shadow-xl">
                <MailPlus />
                {/* A8A890
                ccccb1 */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlossyHeroSection;

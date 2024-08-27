import React from "react";
import { Github, Twitter, MailPlus } from "lucide-react";
import TypeWriter from "./TypeWriter";

interface SocialButtonProps {
  icon: React.ReactNode;
  ariaLabel: string;
  link: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({
  icon,
  ariaLabel,
  link,
}) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-full bg-gradient-to-r from-[#bebe98] to-[#DCDCCD] p-3 text-xl font-semibold text-white shadow-lg transition-all duration-300 hover:from-[#919180] hover:to-[#c8c8ba] hover:shadow-xl"
    aria-label={ariaLabel}
  >
    {icon}
  </a>
);

const HeroSection: React.FC = () => {
  const texts = ["Full Stack Developer", "Freelancer"];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gray-100 font-sans">
      <div className="relative z-10 flex h-screen flex-col items-center justify-center px-4 text-[#8a8a6f] w-full">
        <div className="text-center md:text-left md:w-5/12">
          <h1 className="mb-4 text-6xl font-bold text-black md:text-8xl">
            Hey, I'm Yash
          </h1>
          <p className="my-4 text-4xl font-semibold">
            I am a <TypeWriter texts={texts} />
          </p>
          <p className="my-4 text-2xl break-words text-black">
            I develop <span className="text-[#bfbf52]">Full-stack</span>{" "}
            websites/applications, currently learning about{" "}
            <span className="text-[#bfbf52]">DevOps</span> + freelance sometimes
          </p>
          <div className="flex flex-col md:flex-row items-center gap-10">
            <button className="rounded-full bg-gradient-to-r from-[#bebe98] to-[#DCDCCD] px-8 py-3 text-xl font-semibold text-white shadow-lg transition-all duration-300 hover:from-[#919180] hover:to-[#c8c8ba] hover:shadow-xl">
              View Projects
            </button>
            <div className="flex gap-3 items-center">
              <SocialButton
                icon={<Github />}
                ariaLabel="GitHub"
                link="https://github.com/Yash456k"
              />
              <SocialButton
                icon={<Twitter />}
                ariaLabel="Twitter"
                link="https://x.com/yash654k"
              />
              <SocialButton
                icon={<MailPlus />}
                ariaLabel="Email"
                link="mailto:yash456k@gmail.com"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

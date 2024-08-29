import React from "react";
import { MailPlus, GitFork } from "lucide-react";
import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import TypeWriter from "./TypeWriter";
// {
//   name: "Autumn Leaf",
//   primary: "#d2691e",
//   secondary: "#ff8c00",
//   gradient: ["#d2691e", "#ff8c00"],
// },

interface SocialButtonProps {
  icon: React.ReactNode;
  ariaLabel: string;
  link: string;
  color: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({
  icon,
  ariaLabel,
  link,
  color,
}) => (
  <motion.a
    initial={{ y: 0 }}
    whileHover={{ y: -8, transition: { duration: 0.3 } }}
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className={`text-${color} transition-colors duration-300 hover:text-${color}`}
    aria-label={ariaLabel}
  >
    {icon}
  </motion.a>
);

const HeroSection: React.FC = () => {
  const texts = ["Full Stack Developer", "Freelancer"];
  const colorSet = {
    primary: "#d2691e",
    secondary: "#ff8c00",
    gradient: ["#d2691e", "#ff8c00"],
  };

  return (
    <section
      className="relative min-h-screen overflow-hidden bg-gray-100 font-sans"
      id="home"
    >
      <div
        className="relative z-10 flex h-screen flex-col items-center justify-center px-4 w-full"
        style={{ color: colorSet.primary }}
      >
        <div className="text-center md:text-left md:w-5/12">
          <p className="text-xl flex items-center">
            <GitFork /> git commit -m "Initial portfolio"
          </p>
          <h1 className="mb-4 text-6xl font-bold text-black md:text-8xl">
            Hey, I'm Yash
          </h1>
          <p className="my-4 text-black text-4xl font-semibold">
            I am a <TypeWriter texts={texts} color={colorSet.primary} />
          </p>
          <p className="my-4 text-2xl break-words text-black">
            I develop{" "}
            <span style={{ color: colorSet.secondary }}>Full-stack</span>{" "}
            websites/applications, currently learning about{" "}
            <span style={{ color: colorSet.secondary }}>DevOps</span> +
            freelance sometimes
          </p>
          <div className="flex flex-col md:flex-row items-center gap-10">
            <button
              onClick={() => {
                const element = document.querySelector("#highlighted-projects");
                console.log(element);
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="rounded-full px-8 py-3 text-xl font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl"
              style={{
                background: `linear-gradient(to right, ${colorSet.gradient[0]}, ${colorSet.gradient[1]})`,
              }}
            >
              View Projects
            </button>
            <div className="flex gap-6 items-center">
              <SocialButton
                icon={<GitHubLogoIcon className="w-10 h-10" />}
                ariaLabel="GitHub"
                link="https://github.com/Yash456k"
                color={colorSet.primary}
              />
              <SocialButton
                icon={<TwitterLogoIcon className="w-10 h-10" />}
                ariaLabel="Twitter"
                link="https://x.com/yash654k"
                color={colorSet.primary}
              />
              <SocialButton
                icon={<MailPlus className="w-10 h-10" />}
                ariaLabel="Email"
                link="mailto:yash456k@gmail.com"
                color={colorSet.primary}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

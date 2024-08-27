import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";

import Projects from "./components/projects/Projects";
import Navbar from "./components/Navbar";
import TerminalPage from "./components/TerminalSection/TerminalPage";
import SkillsSection from "./components/skillsection/skillsection";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <TerminalPage />
      <Projects />
    </div>
  );
}

export default App;

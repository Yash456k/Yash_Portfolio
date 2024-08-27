import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";

import Projects from "./components/projects/Projects";
import Navbar from "./components/Navbar";
import TerminalPage from "./components/TerminalSection/TerminalPage";
import SkillsSection from "./components/skillsection/skillsection";
import EndSection from "./components/endSection/endSection";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <TerminalPage />
      <Projects />
      <EndSection />
    </div>
  );
}

export default App;

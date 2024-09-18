import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection/HeroSection";
import Projects from "./components/projects/Projects";
import Navbar from "./components/Navbar";
import TerminalPage from "./components/TerminalSection/TerminalPage";
import SkillsSection from "./components/skillsection/skillsection";
import EndSection from "./components/endSection/EndSection";
import AllProjects from "./pages/AllProjects";
import About from "./pages/About";
import { inject } from "@vercel/analytics";

function MainContent() {
  // inject();
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <TerminalPage />
      <Projects />
      <EndSection />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/all-projects" element={<AllProjects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

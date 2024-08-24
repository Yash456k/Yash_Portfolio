import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";

import Projects from "./components/projects/Projects";
import Navbar from "./components/Navbar";
import TerminalPage from "./components/TerminalSection/TerminalPage";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <TerminalPage />
      <Projects />
    </div>
  );
}

export default App;

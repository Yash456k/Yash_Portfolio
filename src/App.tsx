import "./App.css";
import HeroSection from "./components/HeroSection";

import Projects from "./components/projects/Projects";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Projects />
    </div>
  );
}

export default App;

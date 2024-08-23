import "./App.css";
import GlossyHeroSection from "./components/FuturisticHero";

import Projects from "./components/projects/Projects";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <GlossyHeroSection />
      <Projects />
    </div>
  );
}

export default App;

import "./App.css";
import GlossyHeroSection from "./components/FuturisticHero";

import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className=" w-screen bg-blue-900">
      <Navbar />
      <GlossyHeroSection />
      <Home />
    </div>
  );
}

export default App;

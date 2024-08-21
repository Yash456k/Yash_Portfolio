import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className=" w-screen bg-blue-900">
      <Navbar />
      {/* <div className="bg-red-400 h-screen w-screen"></div> */}
      <Home />
    </div>
  );
}

export default App;

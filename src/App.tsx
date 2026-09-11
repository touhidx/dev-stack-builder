import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechGrid from "./components/TechGrid";

function App() {
  return (
    <>
      <div className="container mx-auto relative">
        <Navbar></Navbar>
        <Hero></Hero>
        <TechGrid></TechGrid>
      </div>
    </>
  );
}

export default App;

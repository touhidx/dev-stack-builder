import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechGrid from "./components/TechGrid";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <div className="container mx-auto relative">
        <Navbar></Navbar>
        <Hero></Hero>
        <TechGrid></TechGrid>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;

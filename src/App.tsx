import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechGrid from "./components/TechGrid";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="container mx-auto ">
        <Navbar></Navbar>
        <Hero></Hero>
        <TechGrid></TechGrid>
        <ToastContainer />
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;

import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechGrid from "./components/TechGrid";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="w-full overflow-x-clip">
        <Navbar></Navbar>

        <div className="container mx-auto">
          <Hero></Hero>
          <TechGrid></TechGrid>
          <ToastContainer />
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;

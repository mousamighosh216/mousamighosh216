import Home from "../pages/Home";
import About from "../pages/About";
import Project from "../pages/Project";
import Contact from "../pages/Contact";
import Navbar from "../components/Navbar";

export default function DesktopStack() {
  
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Navbar />
      <Home />
      <About />
      <Project />
      <Contact />
    </div>
  );
}

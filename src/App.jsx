import Preloder from "./components/preloader/preloader.jsx";
import Home from "./components/home/home.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import About from "./components/About/About.jsx";
import Skills from "./components/skills/skills.jsx";
import Projects from "./components/projects/projects.jsx";
import Experience from "./components/Experience/experience.jsx";
import Contact from "./components/Contact/contact.jsx";
import Footer from "./components/Footer/footer.jsx";

function App() {
  return (
    <>
      <Preloder />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

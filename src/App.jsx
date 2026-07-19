
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Preloder from "./components/preloader/preloader.jsx";
import Home from "./components/home/home.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import About from "./components/About/About.jsx";
import Skills from "./components/skills/skills.jsx";
import Projects from "./components/projects/projects.jsx";
import Experience from "./components/Experience/experience.jsx";
import Contact from "./components/Contact/contact.jsx";
import ScrollTop from "./components/Scrolltop/scroll.jsx";
import Footer from "./components/Footer/footer.jsx";
import Intro from "./components/Intro/intro.jsx";
import Ribbons from "./components/Ribbons.jsx";


const MainContain = () => {
  return (
    <>
      <Preloder />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <ScrollTop />
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 9999 }}>
        <Ribbons
          colors={["#FF7127"]}
          baseThickness={80}
          speedMultiplier={0.6}
          maxAge={600}
          pointCount={60}
          enableFade={false}
          enableShaderEffect={false}
        />
      </div>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainContain />} />
        <Route path="/Intro" element={<Intro />} />
      </Routes>
    </Router>
  );
}

export default App;
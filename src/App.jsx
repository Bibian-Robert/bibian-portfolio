import TopBar from './components/TopBar.jsx';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Awards from './components/Awards.jsx';
// import Skills from './components/Skills.jsx';
// import Experience from './components/Experience.jsx';
import Publications from './components/Publications.jsx';
import Community from './components/Community.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
 
export default function App() {
  return (
    <>
      <TopBar />
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Awards />
      {/* <Skills />
      <Experience /> */}
      <Publications />
      {/* <Community /> */}
      <Contact />
      <Footer />
    </>
  );
}
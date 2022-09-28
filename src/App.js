// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar'
import Header from './components/header/Header';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';


function App() {
  return (
    < >
      <Header />
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
     
    </>
  );
}

export default App;

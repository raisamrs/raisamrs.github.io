import { Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Skills from './pages/Skills/Skills';
import SentMessage from './pages/SentMessage/SentMessage';

function App() {
  return (
    <div className="main-container">
      <nav className="navbar navbar-light bg-light custom-navbar">
        <NavLink to="/" end className="nav-link">Home</NavLink>
        <NavLink to="/sobre-mim" className="nav-link">Sobre mim</NavLink>
        <NavLink to="/projetos" className="nav-link">Projetos</NavLink>
        <NavLink to="/skills" className="nav-link">Skills</NavLink>
        <NavLink to="/contato" className="nav-link">Contato</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/sobre-mim" element={ <About /> } />
        <Route path="/projetos" element={ <Projects /> } />
        <Route path="/skills" element={ <Skills /> } />
        <Route path="/contato" element={ <Contact /> } />
        <Route path="/sent-message" element={ <SentMessage /> } />

      </Routes>
    </div>
  );
}

export default App;

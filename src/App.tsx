import { useState, useEffect } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import SentMessage from './pages/SentMessage/SentMessage';
import styles from './App.module.css';
import {
  navBarClasses, navLinkClasses, mainContainerClasses,
  menuButtonClasses,
} from './classesNamesApp';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  let menuClass = '';
  if (isMobile) {
    menuClass = menuOpen ? styles.menuOpen : styles.menuClosed;
  }

  return (
    <div className={ mainContainerClasses }>
      <nav className={ navBarClasses }>
        {isMobile && (

          <button
            className={ menuButtonClasses }
            onClick={ toggleMenu }
          >
            ☰
          </button>
        )}
        <div className={ menuClass }>
          <NavLink
            to="/"
            end
            className={ navLinkClasses }
            onClick={ () => setMenuOpen(false) }
          >
            Home
          </NavLink>
          <NavLink
            to="/sobre-mim"
            className={ navLinkClasses }
            onClick={ () => setMenuOpen(false) }
          >
            Sobre mim
          </NavLink>
          <NavLink
            to="/projetos"
            className={ navLinkClasses }
            onClick={ () => setMenuOpen(false) }
          >
            Projetos
          </NavLink>
          <NavLink
            to="/contato"
            className={ navLinkClasses }
            onClick={ () => setMenuOpen(false) }
          >
            Contato
          </NavLink>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/sobre-mim" element={ <About /> } />
        <Route path="/projetos" element={ <Projects /> } />
        <Route path="/contato" element={ <Contact /> } />
        <Route path="/sent-message" element={ <SentMessage /> } />
      </Routes>
    </div>
  );
}

export default App;

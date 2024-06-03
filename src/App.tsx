import { Routes, Route, NavLink } from 'react-router-dom';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import SentMessage from './pages/SentMessage/SentMessage';
import styles from './App.module.css';
import { navBarClasses, navLinkClasses } from './classesNamesApp';

function App() {
  return (
    <div className={ styles.mainContainer }>
      <nav className={ navBarClasses }>
        <NavLink
          to="/"
          end
          className={ navLinkClasses }
        >
          Home
        </NavLink>
        <NavLink
          to="/sobre-mim"
          className={ navLinkClasses }
        >
          Sobre mim
        </NavLink>
        <NavLink
          to="/projetos"
          className={ navLinkClasses }
        >
          Projetos
        </NavLink>
        <NavLink
          to="/contato"
          className={ navLinkClasses }
        >
          Contato
        </NavLink>
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

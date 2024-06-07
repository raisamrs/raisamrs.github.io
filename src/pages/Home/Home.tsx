import { useEffect, useState, useRef } from 'react';
import classNames from 'classnames';
import {
  myNameClasses, typedTextClasses, helloWorldClasses, iAmClasses, imgProfileClasses,
  textContainerClasses, homeContainerClasses, imgContainerClasses,
  socialNetWorksContainerClasses, socialNetWorkClasses, textImageContainerClasses,
  linkedInContainerClasses, gitHubContainerClasses,
} from './classesNamesHome';
import profilePicture from '../../assets/Raisa - cabelo vermelho.jpg';
import githubIcon from '../../assets/github-icon.svg';
import linkedinIcon from '../../assets/linkedin-icon.svg';
import styles from './Home.module.css';

function Home() {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = '< Desenvolvedora Web Front-End />';
  const speed = 100;
  const indexRef = useRef(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const i = indexRef.current;
      if (i < fullText.length) {
        setText((prev) => prev + fullText.charAt(i));
        setShowCursor((prev) => !prev);
        indexRef.current += 1;
      } else {
        clearInterval(intervalId);
        setTimeout(() => {
          setText('');
          indexRef.current = 0;
        }, speed);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, fullText, speed]);

  return (
    <div className={ homeContainerClasses }>
      <div className={ textImageContainerClasses }>
        <div className={ imgContainerClasses }>
          <img
            className={ imgProfileClasses }
            src={ profilePicture }
            alt="foto de perfil"
          />
        </div>
        <div className={ textContainerClasses }>
          <h2 className={ helloWorldClasses }>&lt; Olá, Mundo! /&gt;</h2>
          <h3 className={ iAmClasses }>Eu sou</h3>
          <h1 className={ myNameClasses }>Raisa Moreno</h1>
          <h3 className={ typedTextClasses }>
            {text}
            <span
              className={ classNames(styles.cursor, { [styles.hidden]: !showCursor }) }
            />
          </h3>
          <div className={ socialNetWorksContainerClasses }>
            <div className={ linkedInContainerClasses }>
              <a
                href="https://www.linkedin.com/in/raisamrs/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className={ socialNetWorkClasses }
                  src={ linkedinIcon }
                  alt="link para perfil do LinkedIn"
                />
              </a>
            </div>
            <div className={ gitHubContainerClasses }>

              <a
                href="https://github.com/raisamrs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className={ socialNetWorkClasses }
                  src={ githubIcon }
                  alt="link para perfil do GitHub"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;

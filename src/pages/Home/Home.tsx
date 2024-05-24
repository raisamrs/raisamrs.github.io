import { useEffect, useState, useRef } from 'react';
import classNames from 'classnames';
import {
  myNameClasses, professionClasses, helloWorldClasses, iAmClasses, imgClasses,
  textContentClasses,
} from '../../helpers/classesNames';
import profilePicture from '../../assets/Raisa - cabelo lilás.png';
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
        setShowCursor((prev) => !prev); // Alterna a visibilidade do cursor
        indexRef.current += 1; // Incrementar o índice
      } else {
        clearInterval(intervalId);
        setTimeout(() => {
          setText('');
          indexRef.current = 0;
        }, speed);
      }
    }, speed);

    return () => clearInterval(intervalId); // Limpar intervalo quando o componente desmonta
  }, [text, fullText, speed]);

  return (
    <div className={ styles.homeContainer }>
      <div className={ imgClasses }>
        <img
          src={ profilePicture }
          alt="foto de perfil"
        />
      </div>
      <div className={ textContentClasses }>
        <h2 className={ helloWorldClasses }>&lt; Olá, Mundo! /&gt;</h2>
        <h3 className={ iAmClasses }>Eu sou</h3>
        <h1 className={ myNameClasses }>Raisa Moreno</h1>
        <h3 className={ professionClasses }>
          {text}
          <span
            className={ classNames(styles.cursor, { [styles.hidden]: !showCursor }) }
          />
        </h3>
      </div>
    </div>
  );
}

export default Home;

import { useEffect, useState, useRef } from 'react';
import classNames from 'classnames';
import profilePicture from '../../assets/Raisa - cabelo lilás.png';
import styles from './Home.module.css';

function Home() {
  const [text, setText] = useState('');
  const fullText = 'Desenvolvedora Web Front-End';
  const speed = 100;
  const indexRef = useRef(0); // Usar useRef para manter o índice

  useEffect(() => {
    const intervalId = setInterval(() => {
      const i = indexRef.current;
      if (i < fullText.length) {
        setText((prev) => prev + fullText.charAt(i));
        indexRef.current += 1; // Incrementar o índice
      } else {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId); // Limpar intervalo quando o componente desmonta
  }, [fullText, speed]);

  const myNameClasses = classNames(styles.myName, 'display-3', 'text-uppercase', 'mb-2');
  const professionClasses = classNames(
    styles.typedText,
    'font-weight-lighter',
    'text-white',
  );

  return (
    <div className={ styles.homeContainer }>
      <img src={ profilePicture } alt="foto de perfil" />
      <h3 className="text-white font-weight-normal mb-3">Olá, Mundo! Eu sou</h3>
      <h1 className={ myNameClasses }>Raisa Moreno</h1>
      <h3 className={ professionClasses }>
        {text}
        <span className={ styles.cursor } />
      </h3>
    </div>
  );
}

export default Home;

import profilePicture from '../../assets/Raisa - cabelo lilás.png';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={ styles.homeContainer }>
      <img src={ profilePicture } alt="foto de perfil" />
      <h3>Olá, Mundo! Eu sou</h3>
      <h1>Raisa Moreno</h1>
      <h3> Desenvolvedora Web Front-End</h3>
    </div>
  );
}

export default Home;

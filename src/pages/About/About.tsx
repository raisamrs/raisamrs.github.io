import { aboutMeContainerClasses, profilePictureClasses, textImageContainerClasses,
  textContainerClasses,
} from './classesNamesAbout';
import { titleBgClasses, titleFgClasses,
  titleContainerClasses } from '../../classesNamesApp';
import styles from './About.module.css';
import picturePurpleHair from '../../assets/Raisa - cabelo lilás.png';

function About() {
  return (
    <div className={ aboutMeContainerClasses }>
      <div className={ titleContainerClasses }>
        <h1 className={ titleBgClasses }>Sobre</h1>
        <h2 className={ titleFgClasses }>Sobre mim</h2>
      </div>
      <div className={ textImageContainerClasses }>
        <img
          className={ profilePictureClasses }
          src={ picturePurpleHair }
          alt="foto de perfil"
        />
        <div className={ textContainerClasses }>
          <h3 className={ styles.textGradient }>Oiê! Seja bem-vinde! o/</h3>
          <p>
            {/* eslint-disable-next-line max-len */}
            Tenho 32 anos, nasci e moro em Salvador - BA, sou mãe de pet 🐕, amo cores, adoro perucas e vivo mudando de cabelo!
          </p>
          <p>
            Minha história como profissional de tecnologia se iniciou em&nbsp;
            <span className={ styles.year }>2018</span>
            {/* eslint-disable-next-line max-len */}
            , quando atuei, por um curto período, na área de gerenciamento de projetos. Em&nbsp;
            <span className={ styles.year }>2019</span>
            {/* eslint-disable-next-line max-len */}
            , migrei para a área de qualidade de software e adquiri habilidades essenciais trabalhando como testadora para algumas consultorias, numa das quais tive o privilégio de contribuir em projetos desafiadores para clientes renomados como&nbsp;
            <b>B3&nbsp;</b>
            e&nbsp;
            <b>Itaú</b>
            .
            {' '}
          </p>
          <p>
            {' '}
            Recentemente, no final de&nbsp;
            <span className={ styles.year }>2023</span>
            {/* eslint-disable-next-line max-len */}
            , decidi realizar uma transição de área, percebendo que o desenvolvimento de software vai me oferecerer maior realização profissional.&nbsp;
            {/* eslint-disable-next-line max-len */}
            Eu estou empenhada em aprimorar minhas habilidades como desenvolvedora web, e para isso estou cursando a&nbsp;
            <a
              className={ styles.link }
              href="https://www.betrybe.com/formacao-desenvolvimento-web"
              target="_blank"
              rel="noopener noreferrer"
            >
              formação em Desenvolvimento Full Stack na Trybe
            </a>
            .
          </p>
          <p>
            {/* eslint-disable-next-line max-len */}
            Minha paixão pelas cores e minha experiência no mundo da arte (literalmente, pinto e bordo! Hahaha!) me impulsionam especialmente em direção ao front-end, onde é possível combinar minha criatividade com habilidades técnicas para criar boas experiências visuais impactante para os usuários. Adoro ver meus códigos dando forma a soluções tecnológicas bonitas e funcionais! 💜
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

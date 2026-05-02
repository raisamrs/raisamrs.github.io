/* eslint-disable react/jsx-max-depth */
import { aboutMeContainerClasses, profilePictureClasses, textImageContainerClasses,
  textContainerClasses, textContentClasses, titleClasses, imgContainerClasses,
  titleBgClasses, titleFgClasses,
} from './classesNamesAbout';
import { titleContainerClasses } from '../../classesNamesApp';
import styles from './About.module.css';
import profilePicture from '../../assets/Raisa - profile picture - i.png';

function About() {
  return (
    <div className={ aboutMeContainerClasses }>
      <div className={ titleContainerClasses }>
        <h1 className={ titleBgClasses }>Sobre</h1>
        <h2 className={ titleFgClasses }>Sobre mim</h2>
      </div>
      <div className={ textImageContainerClasses }>
        <div className={ imgContainerClasses }>
          <img
            className={ profilePictureClasses }
            src={ profilePicture }
            alt="foto de perfil"
          />
        </div>
        <div className={ textContainerClasses }>
          <h3 className={ titleClasses }>Oiê! Seja bem-vinde 👋</h3>
          <div className={ textContentClasses }>
            <p>
              {/* eslint-disable-next-line max-len */}
              Sou Raisa, tenho 34 anos e sou Analista de QA. Nasci e moro em Salvador - BA e sou mãe de pet 🐕!
            </p>
            <p>
              Minha história com tecnologia começou em&nbsp;
              <span className={ styles.year }>2018</span>
              , na área de gerenciamento de projetos. Em&nbsp;
              <span className={ styles.year }>2019</span>
              {/* eslint-disable-next-line max-len */}
              &nbsp;migrei para o QA, e desde então passei por consultorias onde tive o privilégio de atuar em projetos críticos do setor financeiro para clientes como&nbsp;
              <b>B3</b>
              &nbsp;e&nbsp;
              <b>Itaú</b>
              .
            </p>
            <p>
              Hoje, atuo com testes manuais e automação front-end com&nbsp;
              <span className={ styles.techStack }>Playwright</span>
              . Antes, trabalhei com&nbsp;
              <span className={ styles.techStack }>Cypress</span>
              {/* eslint-disable-next-line max-len */}
              &nbsp;em outros projetos, e venho ampliando meu repertório em ferramentas de automação. 🚀
            </p>
            <p>
              Em&nbsp;
              <span className={ styles.year }>2024</span>
              &nbsp;concluí a&nbsp;
              <a
                className={ styles.link }
                href="https://www.betrybe.com/formacao-desenvolvimento-web"
                target="_blank"
                rel="noopener noreferrer"
              >
                formação em Desenvolvimento Front-End pela Trybe
              </a>
              {/* eslint-disable-next-line max-len */}
              , que ampliou minha visão técnica e me aproximou ainda mais do desenvolvimento.
            </p>
            <p>
              {/* eslint-disable-next-line max-len */}
              Pra mim, qualidade é parte do processo de desenvolvimento e não uma etapa que começa quando o time de devs entrega o código pronto. Acredito em QA atuando desde o refinamento de requisitos, contribuindo com critérios de aceitação claros, antecipando cenários de risco e prevenindo bugs antes que eles aconteçam. Testar é o último passo de um trabalho que começa muito antes.
            </p>
            <p>
              Acredito que
              <b>qualidade é cultura, não etapa</b>
              . ✨
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

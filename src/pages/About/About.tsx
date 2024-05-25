import {
  aboutClasses, aboutMeClasses, aboutMeContainerClasses,
  aboutMeContentClasses,
} from './classesNames';

function About() {
  return (
    <div className={ aboutMeContainerClasses }>
      <div className="container">
        <div className={ aboutMeContentClasses }>
          <h1 className={ aboutClasses }>Sobre</h1>
          <h2 className={ aboutMeClasses }>Sobre mim</h2>
        </div>
        <p>Oiê! Seja bem-vinde! 😊</p>
        <p>
          {/* eslint-disable-next-line max-len */}
          Tenho 32 anos, nasci e moro em Salvador - BA, sou mãe de pet 🐕, adoro perucas e vivo mudando de cabelo!
        </p>
        <p>
          {/* eslint-disable-next-line max-len */}
          Com background na área de Qualidade de Software, adquiri habilidades essenciais trabalhando como testadora para algumas consultorias e tive o privilégio de contribuir em projetos desafiadores para clientes renomados como B3 e Itaú. Recentemente, decidi realizar uma transição de subárea, percebendo que o desenvolvimento de software me oferecerá maior realização profissional.
        </p>
        <p>
          {/* eslint-disable-next-line max-len */}
          Eu estou empenhada em aprimorar minhas habilidades como desenvolvedora web, e para isso estou cursando a
          <a href="https://www.betrybe.com/formacao-desenvolvimento-web">formação em Desenvolvimento Full Stack na Trybe</a>
          .
        </p>
        <p>
          {/* eslint-disable-next-line max-len */}
          Minha paixão pelas cores e minha experiência no mundo da arte (literalmente, pinto e bordo! Hahaha!) me impulsionam especialmente em direção ao front-end, onde é possível combinar minha criatividade com habilidades técnicas para criar boas experiências visuais impactante para os usuários.
        </p>
      </div>
    </div>
  );
}

export default About;

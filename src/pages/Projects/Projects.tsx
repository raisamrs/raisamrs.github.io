import projectsData from '../../data/projects.json';
import pixelsArt from '../../assets/pixelsArt.png';
import tryberCalendar from '../../assets/tryberCalendar.png';
import pokedexRtl from '../../assets/pokemonRtl.png';
import gitHubIcon from '../../assets/github-icon.svg';
import siteIcon from '../../assets/site-icon.svg';
import javascriptIcon from '../../assets/javascript-icon.svg';
import htmlIcon from '../../assets/html-icon.svg';
import cssIcon from '../../assets/css-icon.svg';
import bootstrapIcon from '../../assets/bootstrap-icon.svg';
import rtlIcon from '../../assets/testing-library-icon.svg';
import reactIcon from '../../assets/react-icon.svg';
import { renderDescription } from '../../helpers/renderDescription';
import { ProjectImageType } from '../../types';
import {
  cardsContainerClasses, imgProjectClasses, projectContainerClasses,
  projectCardClasses, columnCardsClasses, cardBodyClasses, projectTechContainerClasses,
  projectTitleCardClasses, projectTitleImgClasses, projectDescriptionClasses,
  btnGitAndDeployClasses, projectTitleCardContainerClasses,
  projectTitleImgContainerClasses, btnsContainerClasses, iconsClasses,
  projectTechClasses, techAndLogoContainerClasses, iconsGitHubAnDeployClasses,
  titleBgClasses, titleFgClasses, alignItemsBodyCardClasses,
} from './classesNamesProjects';
import { titleContainerClasses } from '../../classesNamesApp';
import styles from './Projects.module.css';

const techLogos: { [key: string]: string } = {
  'javascript-icon.svg': javascriptIcon,
  'html-icon.svg': htmlIcon,
  'css-icon.svg': cssIcon,
  'bootstrap-icon.svg': bootstrapIcon,
  'testing-library-icon.svg': rtlIcon,
  'react-icon.svg': reactIcon,
};

function Projects() {
  const projectImages: ProjectImageType = {
    pixelsArt, tryberCalendar, pokedexRtl,
  };

  return (
    <div className={ projectContainerClasses }>
      <div className={ titleContainerClasses }>
        <h1 className={ titleBgClasses }>Projetos</h1>
        <h2 className={ titleFgClasses }>Projetos</h2>
      </div>
      <div className={ cardsContainerClasses }>
        <div className={ columnCardsClasses }>
          {projectsData.map((project, i) => (
            <div className={ projectCardClasses } key={ i }>
              <div className={ styles.showBefore }>
                <img
                  className={ imgProjectClasses }
                  src={ projectImages[project.id] }
                  alt={ project.title }
                />
                <div className={ projectTitleImgContainerClasses }>
                  <h3 className={ projectTitleImgClasses }>{project.title}</h3>
                </div>
              </div>
              <div className={ styles.showAfter }>
                <div className={ cardBodyClasses }>
                  <div className={ projectTitleCardContainerClasses }>
                    <h3 className={ projectTitleCardClasses }>{project.title}</h3>
                  </div>
                  <div className={ alignItemsBodyCardClasses }>
                    <p className={ projectDescriptionClasses }>
                      {renderDescription(project.description)}
                    </p>
                    <div className={ projectTechContainerClasses }>
                      {project.technologies.map((tech, j) => (
                        <div key={ j } className={ techAndLogoContainerClasses }>
                          <img
                            src={ techLogos[tech.logo] }
                            alt={ `${tech.name} logo` }
                            className={ iconsClasses }
                          />
                          <span className={ projectTechClasses }>{tech.name}</span>
                        </div>
                      ))}
                    </div>
                    <div className={ btnsContainerClasses }>
                      {project && project.github !== '' && (

                        <a
                          href={ project.github }
                          className={ btnGitAndDeployClasses }
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            className={ iconsGitHubAnDeployClasses }
                            src={ gitHubIcon }
                            alt="ícone do gitHub"
                          />
                          Código
                        </a>
                      )}
                      { project && project.deploy !== '' && (
                        <a
                          href={ project.deploy }
                          className={ btnGitAndDeployClasses }
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            className={ iconsGitHubAnDeployClasses }
                            src={ siteIcon }
                            alt="ícone de site"
                          />
                          Visitar
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;

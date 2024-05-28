import projectsData from '../../data/projects.json';
import pixelsArt from '../../assets/pixelsArt.png';
import gitHubIcon from '../../assets/github-icon.svg';
import siteIcon from '../../assets/site-icon.svg';
import javascriptIcon from '../../assets/javascript-icon.svg';
import htmlIcon from '../../assets/html-icon.svg';
import cssIcon from '../../assets/css-icon.svg';
import bootstrapIcon from '../../assets/bootstrap-icon.svg';
import { renderDescription } from '../../helpers/renderDescription';
import { ProjectImageType } from '../../types';
import { cardsContainerClasses, imgProjectClasses, projectContainerClasses,
  projectCardClasses, rowCardsClasses, cardBodyClasses, projectTechContainerClasses,
  projectTitleCardClasses, projectTitleImgClasses, projectDescriptionClasses,
  btnGitHubClasses, btnDeployClasses, projectTitleCardContainerClasses,
  projectTitleImgContainerClasses, btnsContainerClasses, iconsClasses,
  projectTechClasses, techAndLogoContainerClasses } from './classesNamesProjects';
import { titleBgClasses, titleFgClasses, titleContainerClasses,
} from '../../classesNamesApp';
import styles from './Projects.module.css';

const techLogos: { [key: string]: string } = {
  'javascript-icon.svg': javascriptIcon,
  'html-icon.svg': htmlIcon,
  'css-icon.svg': cssIcon,
  'bootstrap-icon.svg': bootstrapIcon,
};

function Projects() {
  const projectImages: ProjectImageType = {
    pixelsArt,
  };

  return (
    <div className={ projectContainerClasses }>
      <div className={ titleContainerClasses }>
        <h1 className={ titleBgClasses }>Projetos</h1>
        <h2 className={ titleFgClasses }>Projetos</h2>
      </div>
      <div className={ cardsContainerClasses }>
        <div className={ rowCardsClasses }>
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

                    <a
                      href={ project.github }
                      className={ btnGitHubClasses }
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={ gitHubIcon } alt="ícone do gitHub" />
                      Repositório GitHub
                    </a>
                    <a
                      href={ project.deploy }
                      className={ btnDeployClasses }
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={ siteIcon } alt="ícone de site" />
                      Visitar aplicação
                    </a>
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

import projectsData from '../../data/projects.json';
import pixelsArt from '../../assets/pixelsArt.png';
import { ProjectImageType } from '../../types';
import { cardsContainerClasses, imgProjectClasses, projectContainerClasses,
  projectCardClasses, rowCardsClasses, cardBodyClasses, projectTechContainerClasses,
  projectTitleCardClasses, projectTitleImgClasses, projectDescriptionClasses,
  btnGitHubClasses, btnDeployClasses } from './classesNamesProjects';
import { titleBgClasses, titleFgClasses, titleContainerClasses,
} from '../../classesNamesApp';
import styles from './Projects.module.css';

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
                <h3 className={ projectTitleImgClasses }>{project.title}</h3>
              </div>
              <div className={ styles.showAfter }>
                <div className={ cardBodyClasses }>
                  <h3 className={ projectTitleCardClasses }>{project.title}</h3>
                  <p className={ projectDescriptionClasses }>{project.description}</p>
                  <div className={ projectTechContainerClasses }>
                    {project.technologies.map((tech, j) => (
                      <span key={ j } className="badge badge-info mr-1">{tech}</span>
                    ))}
                  </div>
                  <a
                    href={ project.github }
                    className={ btnGitHubClasses }
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    href={ project.deploy }
                    className={ btnDeployClasses }
                    target="_blank"
                    rel="noreferrer"
                  >
                    Deploy
                  </a>
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

import { useState } from 'react';
import projectsData from '../../data/projects.json';
import pixelsArt from '../../assets/pixelsArt.png';
import { ProjectImageType } from '../../types';
import { cardsContainerClasses, imgProjectClasses, projectContainerClasses,
  projectCardClasses, rowCardsClasses, cardBodyClasses, projectTechContainerClasses,
  projectTitleClasses, projectDescriptionClasses, btnGitHubClasses, btnDeployClasses,
} from './classesNamesProjects';
import { titleBgClasses, titleFgClasses, titleContainerClasses,
} from '../../classesNamesApp';

function Projects() {
  const projectImages: ProjectImageType = {
    pixelsArt,
  };

  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div className={ projectContainerClasses }>
      <div className={ titleContainerClasses }>
        <h1 className={ titleBgClasses }>Projetos</h1>
        <h2 className={ titleFgClasses }>Projetos</h2>
      </div>
      <div className={ cardsContainerClasses }>
        <div className={ rowCardsClasses }>
          {projectsData.map((project, i) => (
            <div
              className={ `${projectCardClasses} ${isHovered ? 'hovered' : ''}` }
              key={ i }
              onMouseEnter={ () => setIsHovered(true) }
              onMouseLeave={ () => setIsHovered(false) }
            >
              <img
                className={ `${imgProjectClasses} ${isHovered ? 'hovered' : ''}` }
                src={ projectImages[project.id] }
                alt={ project.title }
              />
              <div
                className={ `${cardBodyClasses} ${isHovered ? 'hovered' : ''}` }
              >
                <h5 className={ projectTitleClasses }>{project.title}</h5>
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
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;

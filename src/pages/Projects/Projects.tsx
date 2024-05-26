import projectsData from '../../data/projects.json';
import styles from './Projects.module.css';
import pixelsArt from '../../assets/pixelsArt.png';
import { ProjectImageType } from '../../types';
import { projectContainerClasses, titleContainerClasses } from './classesNamesProjects';
import { titleBgClasses, titleFgClasses } from '../../classesNamesApp';

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
      <div className="cards-container">
        {projectsData.map((project, i) => (
          <div key={ i } className={ styles.projectCard }>
            <h5 className="projectTitle">{ project.title }</h5>
            <p className="projectDescription">{project.description}</p>
            <img src={ projectImages[project.id] } alt={ project.title } />
            <a href={ project.github } target="_blank" rel="noreferrer">
              {' '}
              <p>GitHub</p>
            </a>
            <a href={ project.deploy } target="_blank" rel="noreferrer">
              {' '}
              <p>Deploy</p>
              {project.technologies.map((tech, j) => (
                <p className="technologies" key={ j }>{tech}</p>
              ))}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Projects;

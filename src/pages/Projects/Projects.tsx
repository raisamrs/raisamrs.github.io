import projectsData from '../../data/projects.json';
import styles from './Projects.module.css';
import pixelsArt from '../../assets/pixelsArt.png';
import { ProjectImageType } from '../../types';
import { projectContainerClasses, projectSubtitleClasses,
  projectTitleClasses, titleContainerClasses } from './classesNames';

function Projects() {
  const projectImages: ProjectImageType = {
    pixelsArt,
  };

  return (
    <div className={ projectContainerClasses }>
      <div className={ titleContainerClasses }>
        <h1 className={ projectTitleClasses }>Projetos</h1>
        <h2 className={ projectSubtitleClasses }>Projetos</h2>
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

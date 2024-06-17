import projectsData from '../../data/projects.json';
import pixelsArt from '../../assets/pixelsArt.png';
import tryberCalendar from '../../assets/tryberCalendar.png';
import pokedexRtl from '../../assets/pokemonRtl.png';
import { ProjectImageType } from '../../types';
import {
  cardsContainerClasses, imgProjectClasses, projectContainerClasses,
  projectCardClasses, columnCardsClasses,
  projectTitleImgClasses,

  projectTitleImgContainerClasses,

  titleBgClasses, titleFgClasses,
} from './classesNamesProjects';
import { titleContainerClasses } from '../../classesNamesApp';
import styles from './Projects.module.css';
import CardBody from '../../components/CardBody/CardBody';

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
                <CardBody project={ project } />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;

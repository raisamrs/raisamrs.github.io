import projectsData from '../../data/projects.json';
import {
  cardsRowClasses, projectCardClasses, projectColClasses,
  titleBgClasses, titleFgClasses,
} from './classesNamesProjects';
import { titleContainerClasses } from '../../classesNamesApp';
import CardBody from '../../components/CardBody/CardBody';

function Projects() {
  return (
    <div>
      <div className={ titleContainerClasses }>
        <h1 className={ titleBgClasses }>Projetos</h1>
        <h2 className={ titleFgClasses }>Projetos</h2>
      </div>

      {/* container fluido com padding lateral */}
      <div className="container-fluid px-3 px-md-4">
        {/* row do Bootstrap: cada filho com col-* vira uma coluna da grid */}
        <div className={ cardsRowClasses }>
          {projectsData.map((project, i) => (
            // wrapper de coluna: 1 col mobile, 2 cols tablet, 3 cols desktop
            <div className={ projectColClasses } key={ i }>
              {/* card: agora é um único bloco com todo o conteúdo visível */}
              <div className={ projectCardClasses }>
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

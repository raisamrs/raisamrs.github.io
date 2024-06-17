import { CardBodyType } from '../../types';
import {
  alignItemsBodyCardClasses,
  btnGitAndDeployClasses,
  btnsContainerClasses,
  cardBodyClasses,
  iconsClasses,
  iconsGitHubAnDeployClasses,
  projectDescriptionClasses,
  projectTechClasses,
  projectTechContainerClasses,
  projectTitleCardClasses,
  projectTitleCardContainerClasses,
  techAndLogoContainerClasses,
}
  from './classesNamesCardBody';
import { renderDescription } from '../../helpers/renderDescription';
import gitHubIcon from '../../assets/github-icon.svg';
import siteIcon from '../../assets/site-icon.svg';
import javascriptIcon from '../../assets/javascript-icon.svg';
import htmlIcon from '../../assets/html-icon.svg';
import cssIcon from '../../assets/css-icon.svg';
import bootstrapIcon from '../../assets/bootstrap-icon.svg';
import rtlIcon from '../../assets/testing-library-icon.svg';
import reactIcon from '../../assets/react-icon.svg';

const techLogos: { [key: string]: string } = {
  'javascript-icon.svg': javascriptIcon,
  'html-icon.svg': htmlIcon,
  'css-icon.svg': cssIcon,
  'bootstrap-icon.svg': bootstrapIcon,
  'testing-library-icon.svg': rtlIcon,
  'react-icon.svg': reactIcon,
};

function CardBody({ project }: CardBodyType): JSX.Element {
  return (

    <div>
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
            {project && project.deploy !== '' && (
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
  );
}

export default CardBody;

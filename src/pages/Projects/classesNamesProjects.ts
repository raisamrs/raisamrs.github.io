import classNames from 'classnames';
import styles from './Projects.module.css';
import stylesApp from '../../App.module.css';

const dFlex = 'd-flex';
const column = 'flex-column';
const row = 'flex-row';
const justifyCenter = 'justify-content-center';
const alignItemsCenter = 'align-items-center';
const justifyAround = 'justify-content-around';

export const btnsContainerClasses = classNames(
  styles.btnsContainer,
  dFlex,
  row,
  justifyAround,
  'col-10',
);

export const btnGitHubClasses = classNames(
  styles.btn,
  'btn',
  'col-4',
);

export const btnDeployClasses = classNames(
  styles.btn,
  'btn',
  'col-4',
);

export const cardBodyClasses = classNames(
  styles.cardBody,
);

export const cardsContainerClasses = classNames(
  styles.cardsContainer,
  dFlex,
  column,
  justifyCenter,
);

export const iconsClasses = classNames(
  styles.icons,
);

export const imgProjectClasses = classNames(
  'card-img-top',
);

export const projectCardClasses = classNames(
  styles.projectCard,
  'my-3',
  'col-md-10',
);

export const projectContainerClasses = classNames(
  styles.projectContainer,
);

export const projectDescriptionClasses = classNames(
  styles.projectDescription,
  'mx-2',
);

export const projectTechClasses = classNames(
  styles.projectTech,
);

export const projectTechContainerClasses = classNames(
  styles.projectTechContainer,
  dFlex,
  row,
  'flex-wrap',
  'my-2',
  'mx-2',
  'col-12',
);

export const projectTitleCardClasses = classNames(
  styles.projectTitleCard,
);

export const projectTitleCardContainerClasses = classNames(
  styles.projectTitleCardContainer,
);

export const projectTitleImgClasses = classNames(
  styles.projectTitleImg,
);

export const projectTitleImgContainerClasses = classNames(
  styles.projectTitleImgContainer,
);

export const columnCardsClasses = classNames(
  styles.columnCards,
  dFlex,
  column,
  alignItemsCenter,
);

export const techAndLogoContainerClasses = classNames(
  styles.techAndLogoContainer,
  'col-3',
  'mx-2',
  'px-2',
  'my-2',
);

export const titleContainerClasses = classNames(
  styles.titleContainer,
);

export const iconsGitHubAnDeployClasses = classNames(
  styles.iconsGitHubAnDeploy,
);

export const titleBgClasses = classNames(
  stylesApp.costumFontSizeBg,
  stylesApp.titleBgClasses,
  stylesApp.titleBg,
  'text-uppercase',
);

export const titleFgClasses = classNames(
  stylesApp.costumFontSizeFg,
  stylesApp.titleFgClasses,
  stylesApp.titleFg,
  'text-uppercase',
);

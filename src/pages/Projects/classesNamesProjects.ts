import classNames from 'classnames';
import styles from './Projects.module.css';
import stylesApp from '../../App.module.css';

const dFlex = 'd-flex';
const column = 'flex-column';
const row = 'flex-row';
const rowReverse = 'flex-row-reverse';
const justifyCenter = 'justify-content-center';
const alignItemsCenter = 'align-items-center';
const justifyAround = 'justify-content-around';

export const btnsContainerClasses = classNames(
  styles.btnsContainer,
  dFlex,
  row,
  justifyAround,
  'mb-2',
);

export const btnGitHubClasses = classNames(
  styles.btn,
  dFlex,
  'btn',
  rowReverse,
);

export const btnDeployClasses = classNames(
  styles.btn,
  dFlex,
  'btn',
  rowReverse,
);

export const cardBodyClasses = classNames(
  styles.cardBody,
  styles.scrollBar,
  dFlex,
  column,
  alignItemsCenter,
);

export const cardsContainerClasses = classNames(
  styles.cardsContainer,
  dFlex,
  column,
  justifyCenter,
);

export const iconsClasses = classNames(
  styles.icons,
  'me-1',
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
  'mx-3',
);

export const projectTechClasses = classNames(
  styles.projectTech,
);

export const projectTechContainerClasses = classNames(
  styles.projectTechContainer,
  dFlex,
  row,
  alignItemsCenter,
  'justify-content-end',
  'flex-wrap',
  'mb-3',
);

export const projectTitleCardClasses = classNames(
  styles.projectTitleCard,
  'pt-1',
  'ps-2',
  'col-6',
);

export const projectTitleCardContainerClasses = classNames(
  styles.projectTitleCardContainer,
  dFlex,
  row,
  'justify-content-start',
);

export const projectTitleImgClasses = classNames(
  styles.projectTitleImg,
  'pt-1',
  'ps-2',
  'col-6',
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
  dFlex,
  rowReverse,
  alignItemsCenter,
  justifyCenter,
  'flex-wrap',
  'mx-1',
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

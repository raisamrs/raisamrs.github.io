import classNames from 'classnames';
import styles from './CardBody.module.css';

const dFlex = 'd-flex';
const column = 'flex-column';
const row = 'flex-row';
const alignItemsCenter = 'align-items-center';
const justifyCenter = 'justify-content-center';
const rowReverse = 'flex-row-reverse';

export const alignItemsBodyCardClasses = classNames(
  dFlex,
  column,
  alignItemsCenter,
);

export const btnsContainerClasses = classNames(
  styles.btnsContainer,
  dFlex,
  row,
  justifyCenter,
  alignItemsCenter,
  'mb-2',
);

export const btnGitAndDeployClasses = classNames(
  styles.btn,
  dFlex,
  rowReverse,
  'btn',
);

export const cardBodyClasses = classNames(
  dFlex,
  column,
);

export const iconsClasses = classNames(
  styles.icons,
  'me-1',
);

export const iconsGitHubAnDeployClasses = classNames(
  styles.iconsGitHubAnDeploy,
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
  'col-12',
  justifyCenter,
  'flex-wrap',
  'mb-3',
);

export const projectTitleCardContainerClasses = classNames(
  styles.projectTitleCardContainer,
  dFlex,
  row,
  'justify-content-start',
);

export const projectTitleCardClasses = classNames(
  styles.projectTitleCard,
  'pt-1',
  'ps-2',
  'col-8',
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
  'col-4',
  'col-sm-5',
);

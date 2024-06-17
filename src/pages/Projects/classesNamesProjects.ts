import classNames from 'classnames';
import styles from './Projects.module.css';
import stylesApp from '../../App.module.css';

const dFlex = 'd-flex';
const column = 'flex-column';
const justifyCenter = 'justify-content-center';
const alignItemsCenter = 'align-items-center';

export const cardsContainerClasses = classNames(
  styles.cardsContainer,
  dFlex,
  column,
  justifyCenter,
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

export const projectTitleImgClasses = classNames(
  styles.projectTitleImg,
  'pt-1',
  'ps-2',
  'col-8',
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

export const titleContainerClasses = classNames(
  styles.titleContainer,
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

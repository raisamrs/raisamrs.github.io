import classNames from 'classnames';
import styles from './About.module.css';
import stylesApp from '../../App.module.css';

const justifyCenter = 'justify-content-center';
const alignItemsCenter = 'align-items-center';

export const aboutMeContainerClasses = classNames(
  styles.aboutMeContainer,
  'd-flex',
  'flex-column',
  justifyCenter,
  alignItemsCenter,
  'align-content-center',
);

export const imgContainerClasses = classNames(
  styles.imgContainer,
  'mt-3',
  'd-flex',
  justifyCenter,
  alignItemsCenter,
  'mb-3',
  'col-lg-3',
  'mx-lg-2',
);

export const textContentClasses = classNames(
  styles.textContent,
  'mx-3',
);

export const profilePictureClasses = classNames(
  styles.profilePicture,
  'rounded-circle',
  'shadow-lg',
);

export const titleContainerClasses = classNames(
  stylesApp.titleContainer,
  'col-12',
  alignItemsCenter,
  justifyCenter,
);

/* texto e imagem */
export const textImageContainerClasses = classNames(
  styles.textImageContainer,
  'd-flex',
  'flex-column',
  'flex-lg-row',
  alignItemsCenter,
  justifyCenter,
);

/* texto  */
export const textContainerClasses = classNames(
  styles.textContainer,
  'mt-3',
  'col-lg-9',
);

export const titleClasses = classNames(
  styles.title,
  'text-center',
  'my-4',
  'mx-3',
);

export const titleBgClasses = classNames(
  stylesApp.defaultFontSizeBg,
  stylesApp.titleBgClasses,
  stylesApp.titleBg,
  'text-uppercase',
);

export const titleFgClasses = classNames(
  stylesApp.defaultFontSizeFg,
  stylesApp.titleFgClasses,
  stylesApp.titleFg,
  'text-uppercase',
  'position-absolute',
);

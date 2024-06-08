import classNames from 'classnames';
import styles from './About.module.css';

const justifyCenter = 'justify-content-center';
const alignItemsCenter = 'align-items-center';
export const aboutClasses = classNames(
  styles.about,
  'text-uppercase',
);
export const aboutMeClasses = classNames(
  styles.aboutMe,
  'position-absolute',
  'text-uppercase',
);

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
  styles.titleContainer,
  'position-relative',
  'd-flex',
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

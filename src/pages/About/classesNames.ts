import classNames from 'classnames';
import styles from './About.module.css';

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
  'container',
  'd-flex',
  'flex-column',
  'align-items-center',
);

export const profilePictureClasses = classNames(
  'rounded-circle',
  'shadow-lg',
  'ml-5',
);

export const titleContainerClasses = classNames(
  styles.titleContainer,
  'position-relative',
  'd-flex',
  'align-items-center',
  'justify-content-center',
);

/* texto e imagem */
export const textImageContainerClasses = classNames(
  styles.textImageContainer,
);

/* texto  */
export const textContainerClasses = classNames(
  styles.textContainer,
);

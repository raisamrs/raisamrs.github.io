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
  'container',
  'd-flex',
  'flex-row',
  'align-items-center',
);

/* texto  */
export const textContainerClasses = classNames(
  styles.textContainer,
);

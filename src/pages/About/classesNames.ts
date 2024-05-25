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
);
export const aboutMeContentClasses = classNames(
  styles.aboutMeContent,
  'position-relative',
  'd-flex',
  'align-items-center',
  'justify-content-center',
);

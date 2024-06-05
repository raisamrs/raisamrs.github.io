import classNames from 'classnames';
import styles from './Home.module.css';

export const helloWorldClasses = classNames(
  styles.helloWorld,
  'font-weight-normal',
  'mb-3',
);

export const homeContainerClasses = classNames(
  styles.homeContainer,
  'col-12',
  'd-flex',
);

export const iAmClasses = classNames(
  styles.iAm,
  'mb-3',
);

export const imgContainerClasses = classNames(
  styles.imgContainer,
  'container',
  'd-flex',
  'justify-content-center',
);

export const imgProfileClasses = classNames(
  styles.imgProfile,
  'img-thumbnail',
  'col',
  'col-2',
  'shadow-lg',
);

export const myNameClasses = classNames(
  styles.myName,
  'display-3',
  'text-uppercase',
  'mb-2',
);

export const professionClasses = classNames(
  styles.typedText,
);

export const socialNetWorkClasses = classNames(
  styles.socialNetWork,
  'mx-3',
);

export const socialNetWorksContainerClasses = classNames(
  styles.socialNetWorksContainer,
  'text-center',
  'mt-3',
);

export const textContainerClasses = classNames(
  styles.textContainer,
  'col',
  'col-12',
);

export const textImageContainerClasses = classNames(
  styles.textImageContainer,
  'mt-5',
  'container',
  'd-flex',
  'flex-column',
);

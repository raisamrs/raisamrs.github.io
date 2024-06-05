import classNames from 'classnames';
import styles from './Home.module.css';

const flexColum = 'flex-column';
const justifyCenter = 'justify-content-center';
const alignItemsCenter = 'align-items-center';

export const gitHubContainerClasses = classNames(
  styles.gitHubContainer,
  'd-flex',
  justifyCenter,
  alignItemsCenter,
  'rounded-circle',
);

export const helloWorldClasses = classNames(
  styles.helloWorld,
  'font-weight-normal',
  'my-3',
);

export const homeContainerClasses = classNames(
  styles.homeContainer,
  'container',
  'col-12',
  'd-flex',
);

export const iAmClasses = classNames(
  styles.iAm,
  'my-3',
);

export const imgContainerClasses = classNames(
  styles.imgContainer,
  'container',
  'd-flex',
  justifyCenter,
);

export const imgProfileClasses = classNames(
  styles.imgProfile,
  'img-thumbnail',
  'col',
  'col-4',
  'shadow-lg',
);

export const linkedInContainerClasses = classNames(
  styles.linkedInContainer,
  'd-flex',
  justifyCenter,
  alignItemsCenter,
  'rounded-circle',
);

export const myNameClasses = classNames(
  styles.myName,
  'display-3',
  'text-uppercase',
  'my-3',
);

export const professionClasses = classNames(
  styles.typedText,
  'my-2',
);

export const socialNetWorkClasses = classNames(
  styles.socialNetWork,
  'mx-3',
);

export const socialNetWorksContainerClasses = classNames(
  styles.socialNetWorksContainer,
  'd-flex',
  'flex-row',
  'text-center',
  justifyCenter,
  'mt-3',
);

export const textContainerClasses = classNames(
  styles.textContainer,
  'col-12',
  'd-flex',
  flexColum,
  alignItemsCenter,
);

export const textImageContainerClasses = classNames(
  styles.textImageContainer,
  'my-5',
  'container',
  'd-flex',
  flexColum,
);

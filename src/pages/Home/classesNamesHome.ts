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
  'mt-3',
  'my-lg-3',
  'py-lg-3',
  'my-xl-4',
  'py-xl-4',
);

export const homeContainerClasses = classNames(
  styles.homeContainer,
  'container',
  'd-flex',
  'col-12',
);

export const iAmClasses = classNames(
  styles.iAm,
  'my-3',
  'py-3',
);

export const imgContainerClasses = classNames(
  styles.imgContainer,
  'align-items-lg-center',
  'mt-3',
  'mt-lg-0',
  'd-flex',
  'col-lg-3',
  justifyCenter,
);

export const imgProfileClasses = classNames(
  styles.imgProfile,
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
  'py-3',
);

export const socialNetWorkClasses = classNames(
  styles.socialNetWork,
);

export const socialNetWorksContainerClasses = classNames(
  styles.socialNetWorksContainer,
  'd-flex',
  'flex-row',
  'text-center',
  justifyCenter,
  'my-3',
  'py-3',
);

export const textContainerClasses = classNames(
  styles.textContainer,
  'col-12',
  'col-lg-9',
  'd-flex',
  flexColum,
  alignItemsCenter,
  'justify-content-lg-start',
);

export const typedTextClasses = classNames(
  styles.typedText,
  'my-3',
  'py-3',
);

export const textImageContainerClasses = classNames(
  styles.textImageContainer,
  'container',
  'col-12',
  'd-flex',
  'flex-lg-row',
  flexColum,
  'justify-content-start',
);

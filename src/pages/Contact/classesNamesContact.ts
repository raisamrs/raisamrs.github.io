import classNames from 'classnames';
import styles from './Contact.module.css';

const formControl = 'form-control';
const formRow = 'form-row';

export const containerFormClasses = classNames(
  'container',
  'mt-4',
);

export const nameClasses = classNames(
  styles.label,
  formRow,
  formControl,
);

export const formRowClasses = classNames(
  formRow,
);

export const lastNameClasses = classNames(
  formRow,
  formControl,

);

export const emailClasses = classNames(
  formRow,
  formControl,

);

export const subjectClasses = classNames(
  formRow,
  formControl,

);

export const messageClasses = classNames(
  formRow,
  formControl,

);

export const btnClasses = classNames(
  styles.button,
  'btn',
  'btn-success',
);

export const formGroupClasses = classNames(
  'form-group',
  'col-6',
  'my-3',
);

export const formGroupCol12Classes = classNames(
  'form-group',
  'col-12',
  'my-3',
);

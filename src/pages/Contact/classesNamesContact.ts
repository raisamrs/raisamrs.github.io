import classNames from 'classnames';
import styles from './Contact.module.css';
import stylesApp from '../../App.module.css';

const formControl = 'form-control';
const formRow = 'form-row';

export const containerFormClasses = classNames(
  'container',
  'mt-4',
);

export const nameClasses = classNames(
  styles.label,
  styles.input,
  formRow,
  formControl,
);

export const formRowClasses = classNames(
  formRow,
);

export const lastNameClasses = classNames(
  formRow,
  formControl,
  styles.input,
);

export const emailClasses = classNames(
  formRow,
  formControl,
  styles.input,
);

export const subjectClasses = classNames(
  formRow,
  formControl,
  styles.input,
);

export const messageClasses = classNames(
  formRow,
  formControl,
  styles.input,
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

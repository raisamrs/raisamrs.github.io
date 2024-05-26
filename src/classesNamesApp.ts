import classNames from 'classnames';
import styles from './App.module.css';

export const navBarClasses = classNames(
  styles.navbar,
  'navbar-light',
  'bg-light',
  'custom-navbar',
);

export const navLinkClasses = classNames(
  styles.navLink,
  styles.navLinkHover,
);

export const titleBgClasses = classNames(
  styles.titleBg,
  'text-uppercase',
);

export const titleFgClasses = classNames(
  styles.titleFg,
  'text-uppercase',
);

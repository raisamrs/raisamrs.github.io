// src/classesNamesApp.ts
import classNames from 'classnames';
import styles from './App.module.css';

export const mainContainerClasses = classNames(
  styles.mainContainer,
);

export const menuButtonClasses = classNames(
  styles.menuButton,
);

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
export const titleContainerClasses = classNames(
  styles.titleContainer,
  'position-relative',
  'd-flex',
  'align-items-center',
  'justify-content-center',
);

export const titleBgClasses = classNames(
  styles.titleBg,
  'text-uppercase',
);

export const titleFgClasses = classNames(
  styles.titleFg,
  'text-uppercase',
);

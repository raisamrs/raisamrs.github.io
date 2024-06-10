import classNames from 'classnames';
import styles from './ScrollIndicator.module.css';

export const chevronClasses = classNames(
  styles.scrollIndicator,
  'bi',
  'bi-chevron-down',
);

export const chevronContainerClasses = classNames(
  styles.scrollIndicatorContainer,
);

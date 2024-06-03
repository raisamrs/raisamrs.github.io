import classNames from 'classnames';
import styles from './SentMessage.module.css';

export const sucessMsgClasses = classNames(
  'text-center',
);

export const sentMsgContainerClasses = classNames(
  'd-flex',
  'flex-column',
  'justify-content-start',
  'align-items-center',
  'align-content-center',
  'my-5',
  'py-5',
  styles.sentMessageContainer,
);

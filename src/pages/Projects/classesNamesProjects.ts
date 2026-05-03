import classNames from 'classnames';
import styles from './Projects.module.css';
import stylesApp from '../../App.module.css';

// row do Bootstrap: distribui filhos em colunas conforme col-*
// g-4 = gap (espaçamento) de 1.5rem entre os cards
// justify-content-center centraliza linha incompleta (ex: 2 cards na última fileira)
export const cardsRowClasses = classNames(
  styles.cardsRow,
  'row',
  'g-4',
  'justify-content-center',
);

// wrapper de coluna: define quantos cards por linha em cada breakpoint
// col-12       -> 1 card por linha (mobile)
// col-md-6     -> 2 cards por linha (≥768px)
// col-lg-4     -> 3 cards por linha (≥992px)
// d-flex justify-content-center -> centraliza o card dentro da coluna
export const projectColClasses = classNames(
  'col-12',
  'col-md-6',
  'col-lg-4',
  'd-flex',
  'justify-content-center',
);

// w-100 garante que o card preencha o col- ao redor
export const projectCardClasses = classNames(
  styles.projectCard,
  'w-100',
);

export const titleContainerClasses = classNames(
  styles.titleContainer,
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

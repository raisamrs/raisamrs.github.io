import classNames from 'classnames';
import styles from './CardBody.module.css';

const dFlex = 'd-flex';
const column = 'flex-column';
const row = 'flex-row';
const alignItemsCenter = 'align-items-center';
const justifyCenter = 'justify-content-center';
const rowReverse = 'flex-row-reverse';
const justifyContentStart = 'justify-content-start';

// alinhamento dos itens no corpo do card: agora começam à esquerda (não centralizados)
export const alignItemsBodyCardClasses = classNames(
  dFlex,
  column,
  'align-items-start',
  'w-100',
);

export const btnsContainerClasses = classNames(
  styles.btnsContainer,
  dFlex,
  row,
  // botões alinhados à esquerda, não centralizados
  justifyContentStart,
  alignItemsCenter,
  'mt-2',
);

export const btnGitAndDeployClasses = classNames(
  styles.btn,
  dFlex,
  rowReverse,
  alignItemsCenter,
  'btn',
);

export const cardBodyClasses = classNames(
  dFlex,
  column,
  'h-100',
);

export const iconsClasses = classNames(
  styles.icons,
);

export const iconsGitHubAnDeployClasses = classNames(
  styles.iconsGitHubAnDeploy,
);

export const projectDescriptionClasses = classNames(
  styles.projectDescription,
  // removido mx-3 (não precisa mais de margem horizontal forçada)
  'my-2',
);

export const projectTechClasses = classNames(
  styles.projectTech,
);

// container das tags: removidos col-12 e a borda verde
// flex-wrap permite que tags quebrem linha se necessário
export const projectTechContainerClasses = classNames(
  styles.projectTechContainer,
  dFlex,
  row,
  alignItemsCenter,
  justifyContentStart,
  'flex-wrap',
  'mb-2',
);

export const projectTitleCardContainerClasses = classNames(
  styles.projectTitleCardContainer,
  dFlex,
  row,
  justifyContentStart,
);

// removido pt-1 ps-2 col-8 (sem necessidade de offset horizontal agora)
export const projectTitleCardClasses = classNames(
  styles.projectTitleCard,
);

// tag individual: removidos col-4 e col-sm-5 (largura fixa em coluna)
// agora cada tag tem largura automática (do conteúdo)
export const techAndLogoContainerClasses = classNames(
  styles.techAndLogoContainer,
  dFlex,
  rowReverse,
  alignItemsCenter,
  justifyCenter,
);

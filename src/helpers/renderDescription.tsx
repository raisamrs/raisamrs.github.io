import styles from '../pages/Projects/Projects.module.css';

export const renderDescription = (description: string) => {
  const parts = description.split(/(Limpar quadro|Gerar cores aleatórias)/);
  return parts.map((part, index) => {
    if (part === 'Limpar quadro' || part === 'Gerar cores aleatórias') {
      return <span key={ index } className={ styles.highlight }>{part}</span>;
    }
    return part;
  });
};

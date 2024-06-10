import { useEffect, useRef } from 'react';
import chevronIcon from '../../assets/chevron-down-icon.svg';
import { chevronClasses, chevronContainerClasses } from './classNamesScrollIndicator';
import { ScrollIndicatorType } from '../../types';

function ScrollIndicator({ children }: ScrollIndicatorType) {
  const scrollabRef = useRef<HTMLDivElement | null>(null);
  const indicatorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollableElement = scrollabRef.current;
    const indicator = indicatorRef.current;

    if (!scrollableElement || !indicator) return;

    const updateIndicator = () => {
      const { scrollHeight, clientHeight } = scrollableElement;
      if (scrollHeight > clientHeight) {
        indicator.style.display = 'block';
        indicator.style.top = `${clientHeight - indicator.offsetHeight - 10}px`;
      } else {
        indicator.style.display = 'none';
      }
    };

    const handleScroll = () => {
      if (scrollableElement.scrollTop + scrollableElement.clientHeight
        >= scrollableElement.scrollHeight) {
        indicator.style.display = 'none';
      } else {
        indicator.style.display = 'block';
      }
    };

    scrollableElement.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updateIndicator);
    updateIndicator();

    return () => {
      scrollableElement.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateIndicator);
    };
  }, []);

  return (
    <div ref={ scrollabRef } className={ chevronContainerClasses }>
      {children}
      <i className={ chevronClasses }>
        <img src={ chevronIcon } alt="seta para baixo" />
      </i>
    </div>
  );
}

export default ScrollIndicator;

import React, { RefObject, useEffect, useState } from 'react';

const isBrowser = typeof window !== `undefined`;

export const useDetectScrollReachedElement = (
  target: RefObject<HTMLElement>
): boolean => {
  if (!isBrowser) return false;
  const [reached, setReached] = useState(false);

  useEffect(() => {
    if (!target || typeof target === 'undefined') return;
    const handleScroll = () => {
      const windowScrollYOffset = window.pageYOffset + window.innerHeight;
      const targetOffsetTop = target?.current?.offsetTop;
      if (typeof targetOffsetTop !== 'undefined')
        setReached(windowScrollYOffset > targetOffsetTop);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [target]);

  return reached;
};

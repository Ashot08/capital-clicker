import { useLayoutEffect, useState } from 'react';

export const useWindowSize = () => {
  const [size, setSize] = useState([
    typeof window !== 'undefined' ? window.innerWidth : 0,
    typeof window !== 'undefined' ? window.innerHeight : 0,
  ]);

  useLayoutEffect(() => {
    const updateSize = () => {
      const width =
        window.visualViewport?.width ?? window.innerWidth;

      const height =
        window.visualViewport?.height ?? window.innerHeight;

      setSize([width, height]);
    };

    updateSize();

    window.visualViewport?.addEventListener(
      'resize',
      updateSize
    );

    window.addEventListener(
      'resize',
      updateSize
    );

    return () => {
      window.visualViewport?.removeEventListener(
        'resize',
        updateSize
      );

      window.removeEventListener(
        'resize',
        updateSize
      );
    };
  }, []);

  return size;
};

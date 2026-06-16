// hooks/useViewportHeight.ts

import { useLayoutEffect } from 'react';

export const useViewportHeight = () => {
    useLayoutEffect(() => {
        const setHeight = () => {
            const height =
                window.visualViewport?.height ??
                window.innerHeight;

            document.documentElement.style.setProperty(
                '--vh',
                `${height}px`
            );
        };

        setHeight();

        const viewport = window.visualViewport;

        viewport?.addEventListener(
            'resize',
            setHeight
        );

        viewport?.addEventListener(
            'scroll',
            setHeight
        );

        return () => {
            viewport?.removeEventListener(
                'resize',
                setHeight
            );

            viewport?.removeEventListener(
                'scroll',
                setHeight
            );
        };
    }, []);
};

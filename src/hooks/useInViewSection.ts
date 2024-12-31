"use client";
import { useState, useEffect } from 'react';

export function useInViewSection(ref: React.RefObject<HTMLElement | HTMLDivElement | null>) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref?.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2 } // 20% of the element must be visible
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isInView;
}

'use client';

import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    // Add class BEFORE setting up observer so CSS opacity-0 activates
    // only after JS is ready — prevents FOUC
    document.body.classList.add('reveal-ready');

    // Immediately activate elements already in viewport
    const revealElements = document.querySelectorAll<HTMLElement>('.reveal:not(.active)');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      document.body.classList.remove('reveal-ready');
    };
  }, []);
}

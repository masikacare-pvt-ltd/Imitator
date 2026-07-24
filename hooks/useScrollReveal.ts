'use client';

import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    // Add class BEFORE setting up observer so CSS opacity-0 activates
    // only after JS is ready — prevents FOUC
    document.body.classList.add('reveal-ready');

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
      // Only remove reveal-ready if no other scroll-reveal instance is active.
      // Check if any .reveal elements still lack .active — if so, another
      // instance may be running. Safe to always remove here since each page
      // re-adds it immediately on mount.
      document.body.classList.remove('reveal-ready');
    };
  }, []);
}

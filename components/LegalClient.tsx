'use client';

import { useEffect } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useBlurTypeText } from '@/hooks/useBlurTypeText';
import { useReturnToTop } from '@/hooks/useReturnToTop';

export default function LegalClient() {
  useScrollReveal();
  useReturnToTop();

  useBlurTypeText({
    selector: '.blur-type-legal',
    triggerDelay: 600,
    wordDelay: 30,
  });

  // Smooth scroll for anchor links
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;
      const hash = anchor.getAttribute('href');
      if (!hash || hash === '#') return;
      const el = document.querySelector(hash);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth' });
      history.pushState(null, '', hash);
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return null;
}

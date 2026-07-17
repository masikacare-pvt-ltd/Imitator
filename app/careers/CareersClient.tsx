'use client';

import { useEffect } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useBlurTypeText } from '@/hooks/useBlurTypeText';
import { useReturnToTop } from '@/hooks/useReturnToTop';

export default function CareersClient() {
  useScrollReveal();
  useReturnToTop();

  useBlurTypeText({
    selector: '.blur-type-careers',
    triggerDelay: 800,
    wordDelay: 40,
  });

  // Magnetic effect on email link
  useEffect(() => {
    const el = document.querySelector<HTMLElement>('.magnetic-email');
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
    };

    const handleLeave = () => {
      el.style.transform = 'translate(0px, 0px)';
    };

    el.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseleave', handleLeave);

    return () => {
      el.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return null;
}

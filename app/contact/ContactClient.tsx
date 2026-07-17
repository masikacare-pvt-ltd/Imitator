'use client';

import { useEffect } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useBlurTypeText } from '@/hooks/useBlurTypeText';
import { useReturnToTop } from '@/hooks/useReturnToTop';

export default function ContactClient() {
  useScrollReveal();
  useReturnToTop();

  useBlurTypeText({
    selector: '.blur-type-contact',
    triggerDelay: 600,
    wordDelay: 30,
  });

  // Magnetic submit button
  useEffect(() => {
    const el = document.querySelector<HTMLElement>('.magnetic-submit');
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

  // Form submit handler
  useEffect(() => {
    const form = document.getElementById('contactForm') as HTMLFormElement | null;
    if (!form) return;

    const handleSubmit = (e: Event) => {
      e.preventDefault();
      const btnText = form.querySelector<HTMLElement>('.submit-btn-text, [class*="submitBtnText"]');
      if (!btnText) return;
      const original = btnText.innerText;
      btnText.innerText = 'TRANSMITTING...';
      setTimeout(() => {
        btnText.innerText = 'LINK ESTABLISHED';
        form.reset();
        setTimeout(() => {
          btnText.innerText = original;
        }, 3000);
      }, 1500);
    };

    form.addEventListener('submit', handleSubmit);
    return () => form.removeEventListener('submit', handleSubmit);
  }, []);

  return null;
}

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

  // Form submit handler — mailto fallback until backend endpoint exists
  useEffect(() => {
    const form = document.getElementById('contactForm') as HTMLFormElement | null;
    if (!form) return;

    const handleSubmit = (e: Event) => {
      e.preventDefault();

      const nameInput = form.querySelector<HTMLInputElement>('#name');
      const emailInput = form.querySelector<HTMLInputElement>('#email');
      const entityInput = form.querySelector<HTMLInputElement>('#entity');
      const messageInput = form.querySelector<HTMLTextAreaElement>('#message');
      const btnText = form.querySelector<HTMLElement>('[class*="submitBtnText"]');

      // Basic validation
      if (!nameInput?.value.trim() || !emailInput?.value.trim() || !messageInput?.value.trim()) {
        if (btnText) {
          const original = btnText.innerText;
          btnText.innerText = 'FILL ALL FIELDS';
          setTimeout(() => { btnText.innerText = original; }, 2000);
        }
        return;
      }

      const subject = encodeURIComponent(`[IMITATOR Inquiry] ${nameInput.value.trim()} — ${entityInput?.value.trim() ?? ''}`);
      const body = encodeURIComponent(
        `Name: ${nameInput.value.trim()}\nEnterprise: ${entityInput?.value.trim() ?? 'N/A'}\nEmail: ${emailInput.value.trim()}\n\nMessage:\n${messageInput.value.trim()}`
      );

      if (btnText) {
        const original = btnText.innerText;
        btnText.innerText = 'TRANSMITTING...';
        setTimeout(() => {
          window.open(`mailto:imitator.in@gmail.com?subject=${subject}&body=${body}`, '_self');
          form.reset();
          btnText.innerText = 'LINK ESTABLISHED ✓';
          setTimeout(() => { btnText.innerText = original; }, 3000);
        }, 600);
      } else {
        window.open(`mailto:imitator.in@gmail.com?subject=${subject}&body=${body}`, '_self');
        form.reset();
      }
    };

    form.addEventListener('submit', handleSubmit);
    return () => form.removeEventListener('submit', handleSubmit);
  }, []);

  return null;
}

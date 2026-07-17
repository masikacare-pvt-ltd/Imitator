'use client';

import { useEffect } from 'react';

interface BlurTypeOptions {
  selector: string;
  triggerDelay?: number;
  wordDelay?: number;
}

export function useBlurTypeText({
  selector,
  triggerDelay = 600,
  wordDelay = 30,
}: BlurTypeOptions) {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(selector);

    elements.forEach((el) => {
      // Guard: skip if already processed
      if (el.querySelector('.blur-word')) return;
      const text = el.innerText.trim();
      if (!text) return;
      const words = text.split(/\s+/);
      el.innerHTML = '';
      words.forEach((word) => {
        const span = document.createElement('span');
        span.className = 'blur-word';
        span.innerText = word;
        el.appendChild(span);
        el.appendChild(document.createTextNode(' '));
      });
    });

    const timer = setTimeout(() => {
      const words = document.querySelectorAll<HTMLElement>(`${selector} .blur-word`);
      words.forEach((word, index) => {
        setTimeout(() => {
          word.classList.add('revealed');
        }, index * wordDelay);
      });
    }, triggerDelay);

    return () => clearTimeout(timer);
  }, [selector, triggerDelay, wordDelay]);
}

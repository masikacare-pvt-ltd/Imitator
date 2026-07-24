'use client';

import { useEffect } from 'react';

export function useReturnToTop() {
  useEffect(() => {
    const btn = document.getElementById('return-to-top');
    if (!btn) return;

    // Scope the progress circle query to the button itself — avoids
    // grabbing a wrong element if multiple RTT buttons exist
    const progressEl = btn.querySelector<SVGCircleElement>('.rtt-circle-progress');
    if (!progressEl) return;

    const circleLength = progressEl.getTotalLength();
    progressEl.style.strokeDasharray = String(circleLength);
    progressEl.style.strokeDashoffset = String(circleLength);

    const handleScroll = () => {
      if (window.scrollY > 400) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }

      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        const scrollPercent = scrollTop / docHeight;
        const drawLength = circleLength * scrollPercent;
        progressEl.style.strokeDashoffset = String(circleLength - drawLength);
      }
    };

    const handleClick = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    btn.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      btn.removeEventListener('click', handleClick);
    };
  }, []);
}

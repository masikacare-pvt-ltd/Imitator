'use client';

import { useEffect } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useReturnToTop } from '@/hooks/useReturnToTop';

export default function HomeClient() {
  useScrollReveal();
  useReturnToTop();

  // 0. Smooth scroll for anchor hash links (next/link doesn't trigger scroll-behavior:smooth)
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;
      const hash = anchor.getAttribute('href');
      if (!hash || hash === '#') return;
      const el = document.querySelector(hash);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth' });
      // Update URL without triggering navigation
      history.pushState(null, '', hash);
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  // 1. Navbar scroll state — applied to body, matching original
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        document.body.classList.add('nav-scrolled');
      } else {
        document.body.classList.remove('nav-scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. Services curve scroll animation — exact match to original JS
  useEffect(() => {
    const serviceItems = document.querySelectorAll<HTMLElement>('.service-list-item');
    const dynamicIcons = document.querySelectorAll<HTMLElement>('.dynamic-icon');
    let activeServiceIndex = -1;

    function animateServices() {
      if (window.innerWidth <= 1024) return;

      const windowHeight = window.innerHeight;
      const centerY = windowHeight / 2;
      let closestIndex = 0;
      let minDistance = Infinity;

      serviceItems.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const itemCenterY = rect.top + rect.height / 2;
        const distFromCenter = itemCenterY - centerY;
        const absDist = Math.abs(distFromCenter);

        const curveStrength = 0.0008;
        const translateX = Math.pow(absDist, 2) * curveStrength;
        const scale = Math.max(0.7, 1 - absDist / 1200);
        const opacity = Math.max(0.15, 1 - absDist / 400);

        item.style.transform = `translateX(${translateX}px) scale(${scale})`;
        item.style.opacity = String(opacity);

        if (absDist < minDistance) {
          minDistance = absDist;
          closestIndex = index;
        }
      });

      if (activeServiceIndex !== closestIndex) {
        activeServiceIndex = closestIndex;

        dynamicIcons.forEach((icon, i) => {
          icon.classList.toggle('active', i === activeServiceIndex);
        });

        serviceItems.forEach((item, i) => {
          item.classList.toggle('active-service', i === activeServiceIndex);
        });
      }
    }

    const onScroll = () => requestAnimationFrame(animateServices);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', animateServices);
    animateServices();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', animateServices);
      // Reset inline styles on unmount
      serviceItems.forEach((item) => {
        item.style.transform = '';
        item.style.opacity = '';
      });
    };
  }, []);

  // 3. Blur-type text — IntersectionObserver trigger at threshold 0.3, 35ms per word
  useEffect(() => {
    const blurTextElements = document.querySelectorAll<HTMLElement>('.blur-type-text');

    blurTextElements.forEach((el) => {
      // Guard: skip if already processed
      if (el.querySelector('.blur-word')) return;
      const text = el.innerText.trim();
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

    const blurObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const words = entry.target.querySelectorAll<HTMLElement>('.blur-word');
            words.forEach((word, index) => {
              setTimeout(() => {
                word.classList.add('revealed');
              }, index * 35);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    blurTextElements.forEach((el) => blurObserver.observe(el));

    return () => blurObserver.disconnect();
  }, []);

  // 4. Magnetic effect on buttons
  useEffect(() => {
    const magnets = document.querySelectorAll<HTMLElement>('.magnetic-wrap');
    magnets.forEach((el) => {
      el.addEventListener('mousemove', (e: Event) => {
        const ev = e as MouseEvent;
        const rect = el.getBoundingClientRect();
        const x = ev.clientX - rect.left - rect.width / 2;
        const y = ev.clientY - rect.top - rect.height / 2;
        el.style.transform = `translate(${x * 0.08}px, ${y * 0.08}px)`;
      });
      el.addEventListener('mouseleave', () => {
        el.style.transform = '';
      });
    });
  }, []);

  return null;
}

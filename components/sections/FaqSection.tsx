'use client';

import { useState } from 'react';
import styles from './FaqSection.module.css';

const faqs = [
  {
    q: 'What constitutes your "Elite AI Edition" approach?',
    a: 'It is the convergence of top-tier product design (UI/UX) with deep engineering. We don\'t just bolt an API onto a generic template. We train custom models, design cinematic interfaces, and ensure the entire ecosystem feels like a luxury product.',
  },
  {
    q: 'Do you build for startups or enterprise?',
    a: 'Both, provided the ambition is high. We partner with funded startups looking to disrupt industries and established enterprises requiring digital transformation to maintain dominance.',
  },
  {
    q: 'How is intellectual property handled?',
    a: 'You retain 100% ownership of the custom code, models, and design assets we produce. We operate under strict NDAs and construct zero-trust security environments for your data.',
  },
  {
    q: 'What is the typical timeframe for a full integration?',
    a: 'Precision takes time. Standard AI integrations average between 12 to 16 weeks, while bespoke neural architecture and autonomous workflows may span 6 months. We deploy in staged milestones to deliver continuous value.',
  },
  {
    q: 'How do you ensure AI model accuracy and compliance?',
    a: 'Our engineering standards require rigorous testing protocols, edge-case mitigation, and continuous feedback loops. Every model is calibrated with specific industry guardrails to ensure output accuracy, data compliance, and operational safety.',
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setActiveIndex(activeIndex === i ? null : i);
  };

  return (
    <section className={`container ${styles.faqSectionWrap}`}>
      <div className="reveal" style={{ textAlign: 'left', marginBottom: '60px' }}>
        <span className="t-caps">Inquiries</span>
        <h2 className={`${styles.hAboutCinematic} mt-16`}>
          <span className="font-serif italic-text">Intelligence,</span>
          <br />
          <span className="font-sans highlight-text">Clarified.</span>
        </h2>
        <div className={styles.aboutPremiumLine} />
      </div>

      <div className={styles.faqWrapper}>
        {faqs.map((faq, i) => (
          <div
            key={i}
            className={`${styles.faqItem} reveal${i > 0 ? ` delay-${Math.min(i, 3)}` : ''} ${activeIndex === i ? styles.faqActive : ''}`}
          >
            <button
              className={styles.faqHeader}
              onClick={() => toggle(i)}
              aria-expanded={activeIndex === i}
            >
              {faq.q}
              <svg
                className={styles.faqIconSvg}
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" strokeOpacity="0.2" />
                <line x1="12" y1="8" x2="12" y2="16" className={styles.faqLineV} />
                <line x1="8" y1="12" x2="16" y2="12" className={styles.faqLineH} />
              </svg>
            </button>
            <div className={styles.faqContentGrid}>
              <div className={styles.faqContentInner}>
                <p>{faq.a}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

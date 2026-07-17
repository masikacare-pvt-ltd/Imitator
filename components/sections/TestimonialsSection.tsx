import styles from './TestimonialsSection.module.css';

const testimonials = [
  {
    quote:
      'The neural architecture they designed didn\'t just improve our metrics; it fundamentally altered how we operate as an enterprise. Pure cinematic genius backed by ruthless logic.',
    author: 'Aarav Desai',
    role: 'Chief Architect, Reliance Neural',
  },
  {
    quote:
      'We asked for a standard digital transformation. IMITATOR delivered an autonomous ecosystem. Their ability to fuse luxury aesthetics with deep tech is unmatched in the industry.',
    author: 'Priya Sharma',
    role: 'VP of Engineering, Tata Advanced Systems',
  },
  {
    quote:
      'Working with them feels like peering five years into the future. From the zero-trust security models to the bespoke UI, every pixel and line of code is engineered perfectly.',
    author: 'Rohan Kapoor',
    role: 'Director of AI, Wipro Innovation Labs',
  },
];

export default function TestimonialsSection() {
  return (
    <section className={styles.feedbackSectionWrap}>
      <div className={`container reveal`} style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
        <span className="t-caps">Testimonials</span>
        <h2 className={`${styles.hAboutCinematic} mt-16`}>
          <span className="font-serif italic-text">Industry</span>
          <br />
          <span className="font-sans highlight-text">Consensus.</span>
        </h2>
        <div className={styles.aboutPremiumLine} style={{ margin: '0 auto' }} />
      </div>

      <div className={styles.feedbackHologram} role="region" aria-label="Testimonials">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className={styles.fbCard}
            style={{ animationDelay: `${i * 7}s` }}
          >
            <span className={styles.fbQuoteMark} aria-hidden="true">&ldquo;</span>
            <p className={styles.fbQuote}>{t.quote}</p>
            <div className={styles.fbAuthorWrap}>
              <div
                className={styles.fbAuthorLine}
                style={{ animationDelay: `${i * 7}s` }}
              />
              <p className={styles.fbAuthor}>
                <span>{t.author}</span>
                {t.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import styles from './MissionSection.module.css';

export default function VisionSection() {
  return (
    <section id="vision" className={`container ${styles.mvSection}`}>
      <div className={styles.mvWatermark} aria-hidden="true">VISION</div>
      <div className={`${styles.mvCentered} reveal delay-1`}>
        <div className={styles.mvPremiumSvgWrap}>
          <svg viewBox="0 0 100 100" aria-hidden="true">
            <polygon
              points="50,10 90,50 50,90 10,50"
              fill="none"
              stroke="var(--c-text-primary)"
              strokeWidth="1"
              className={styles.mvSpinSlow}
              opacity="0.3"
            />
            <polygon
              points="50,25 75,50 50,75 25,50"
              fill="none"
              stroke="var(--c-accent)"
              strokeWidth="1.5"
              className={styles.mvSpinFastRev}
            />
            <circle
              cx="50" cy="50" r="4"
              fill="var(--c-bg)"
              stroke="var(--c-accent)"
              strokeWidth="2"
              className={styles.wfAnimGlow}
            />
            <path
              d="M 50 10 L 50 -10 M 50 90 L 50 110"
              stroke="var(--c-text-primary)"
              strokeWidth="1"
              opacity="0.5"
            />
          </svg>
        </div>

        <span className="t-caps">Our Vision</span>
        <h2 className={`${styles.hAboutCinematic} mt-16`}>
          <span className="font-serif italic-text">Future</span>
          <br />
          <span className="font-sans highlight-text">States.</span>
        </h2>
        <div className={styles.mvPremiumLine} />

        <p className={`${styles.mvCinematicText} blur-type-text`}>
          A world where enterprise friction is entirely eradicated by algorithmic intelligence.
          We foresee IMITATOR as the unseen, powerful nervous system running the world&apos;s
          most elite organizations—setting the standard for what tomorrow&apos;s digital
          infrastructure looks and feels like.
        </p>
      </div>
    </section>
  );
}

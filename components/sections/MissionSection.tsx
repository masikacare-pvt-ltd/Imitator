import styles from './MissionSection.module.css';

export default function MissionSection() {
  return (
    <section id="mission" className={`container ${styles.mvSection}`}>
      <div className={styles.mvWatermark} aria-hidden="true">MISSION</div>
      <div className={`${styles.mvCentered} reveal`}>
        <div className={styles.mvPremiumSvgWrap}>
          <svg viewBox="0 0 100 100" aria-hidden="true">
            <circle
              cx="50" cy="50" r="40"
              fill="none"
              stroke="var(--c-accent)"
              strokeWidth="1"
              strokeDasharray="2 6"
              className={styles.mvSpinSlow}
              opacity="0.5"
            />
            <circle
              cx="50" cy="50" r="25"
              fill="none"
              stroke="var(--c-text-primary)"
              strokeWidth="0.5"
              strokeDasharray="20 10"
              className={styles.mvSpinFastRev}
            />
            <circle cx="50" cy="50" r="10" fill="var(--c-accent)" className={styles.wfAnimPulse} />
            <line x1="50" y1="0" x2="50" y2="10" stroke="var(--c-accent)" strokeWidth="2" />
            <line x1="50" y1="90" x2="50" y2="100" stroke="var(--c-accent)" strokeWidth="2" />
            <line x1="0" y1="50" x2="10" y2="50" stroke="var(--c-accent)" strokeWidth="2" />
            <line x1="90" y1="50" x2="100" y2="50" stroke="var(--c-accent)" strokeWidth="2" />
          </svg>
        </div>

        <span className="t-caps">Our Mission</span>
        <h2 className={`${styles.hAboutCinematic} mt-16`}>
          <span className="font-serif italic-text">Global</span>
          <br />
          <span className="font-sans highlight-text">Impact.</span>
        </h2>
        <div className={styles.mvPremiumLine} />

        <p className={`${styles.mvCinematicText} blur-type-text`}>
          To architect an autonomous, ultra-efficient digital ecosystem for visionary enterprises.
          We strive to bridge the gap between complex algorithmic mechanics and flawless user
          experiences, proving that industrial power and luxury design are intrinsically linked.
        </p>
      </div>
    </section>
  );
}

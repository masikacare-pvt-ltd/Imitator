import Image from 'next/image';
import Link from 'next/link';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  return (
    <section id="about" className={`container ${styles.aboutSection}`}>
      <div className={styles.aboutAmbientGlow} aria-hidden="true" />
      <div className={styles.aboutDataStream} aria-hidden="true">
        SYS.NEURAL.ARCH // V.2.0.4
      </div>

      <div className={styles.aboutCinematicFrame} aria-hidden="true">
        <div className={`${styles.acCorner} ${styles.acTl}`}>
          <div className={`${styles.acDot} ${styles.adTl}`} />
        </div>
        <div className={`${styles.acCorner} ${styles.acTr}`} />
        <div className={`${styles.acCorner} ${styles.acBl}`} />
        <div className={`${styles.acCorner} ${styles.acBr}`}>
          <div className={`${styles.acDot} ${styles.adBr}`} />
        </div>
      </div>

      <div className={styles.aboutGrid}>
        <div className={`${styles.aboutVisualWrap} reveal`}>
          <div className={styles.aboutImgInner}>
            <Image
              src="/about.png"
              alt=""
              fill
              style={{ objectFit: 'contain', mixBlendMode: 'multiply' }}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="reveal delay-1">
          <span className="t-caps">The Paradigm Shift</span>
          <h2 className={`${styles.hAboutCinematic} mt-16`}>
            <span className={`font-serif italic-text`}>Beyond Automation.</span>
            <br />
            <span className={`font-sans highlight-text`}>True Intelligence.</span>
          </h2>
          <div className={styles.aboutPremiumLine} />
          <p className="t-lead">
            IMITATOR does not deploy generic solutions. We architect bespoke neural
            infrastructures that embed deep learning into the very DNA of your enterprise.
          </p>
          <p className={styles.aboutDescText}>
            From predictive cloud engineering to autonomous workflow agents, our systems are
            designed with cinematic precision and mathematical rigor. We transform legacy
            constraints into algorithmic advantages.
          </p>
          <div className={`${styles.magneticWrap} mt-40`}>
            <Link href="#mission" className={`${styles.btn} ${styles.btnSecondary} ${styles.btnCompact}`}>
              Read the Manifesto
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

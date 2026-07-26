'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={`${styles.hero} container`}>
      {/* Background elements */}
      <div className={styles.heroGridPattern} aria-hidden="true" />
      <div className={styles.heroAmbientGlow} aria-hidden="true" />

      {/* Crosshairs */}
      <div className={styles.heroCrosshairs} aria-hidden="true">
        <div className={`${styles.crosshair} ${styles.ch1}`} />
        <div className={`${styles.crosshair} ${styles.ch2}`} />
        <div className={`${styles.crosshair} ${styles.ch3}`} />
        <div className={`${styles.crosshair} ${styles.ch4}`} />
      </div>

      {/* Cinematic Frame */}
      <div className={styles.heroFrame} aria-hidden="true">
        <div className={`${styles.hfCorner} ${styles.hfTl}`}>
          <div className={`${styles.hfDot} ${styles.hdTl}`} />
        </div>
        <div className={`${styles.hfCorner} ${styles.hfTr}`}>
          <div className={`${styles.hfDot} ${styles.hdTr}`} />
        </div>
        <div className={`${styles.hfCorner} ${styles.hfBl}`}>
          <div className={`${styles.hfDot} ${styles.hdBl}`} />
        </div>
        <div className={`${styles.hfCorner} ${styles.hfBr}`}>
          <div className={`${styles.hfDot} ${styles.hdBr}`} />
        </div>
      </div>

      <div className={styles.heroStatusTag} aria-hidden="true">
        Sys.Node_Active
      </div>
      <div className={styles.heroDataStream} aria-hidden="true">
        HASH: 0x99A.F1 // SEQ: 4902
      </div>
      <div className={styles.heroMicroText} aria-hidden="true">
        SYS.ARCH.2026 // LAT:40.7128 LNG:-74.0060
      </div>

      <div className={styles.heroGrid}>
        {/* Content */}
        <div className={`${styles.heroContent} reveal active`}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            2026 Elite AI Edition
          </div>
          <h1 className={`${styles.hDisplay} h-display`}>
            Architecting
            <br />
            Intelligent
            <br />
            <span className="text-accent">Futures.</span>
          </h1>
          <p className={`t-lead ${styles.heroLeadText}`}>
            We engineer world-class digital products and transform traditional enterprises into
            autonomous, AI-powered organizations. Precision logic meets luxury design.
          </p>
          <div className={styles.heroBtns}>
            <div className={styles.magneticWrap}>
              <Link href="#about" className={`${styles.btn} ${styles.btnPrimary} ${styles.btnCompact}`}>
                About us
              </Link>
            </div>
            <div className={styles.magneticWrap}>
              <Link href="#workflow" className={`${styles.btn} ${styles.btnSecondary} ${styles.btnCompact}`}>
                Process
              </Link>
            </div>
          </div>
        </div>

        {/* Visual */}
        <div className={`${styles.heroVisualClip} reveal delay-1`} aria-hidden="true">
          <div className={styles.heroVisual}>
            <div className={styles.cineLineH} />
            <div className={styles.cineLineV} />
            <div className={styles.heroImageWrapper}>
              <Image
                src="/hero.png"
                alt="Elite AI Interface Presentation"
                fill
                className={styles.heroImg}
                sizes="(max-width: 1024px) 100vw, 55vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <Link href="#about" className={styles.heroScrollDown} aria-label="Scroll down">
        <span className={styles.scrollDownText}>Explore</span>
        <div className={styles.scrollDownTrack}>
          <div className={styles.scrollDownThumb} />
        </div>
      </Link>
    </section>
  );
}

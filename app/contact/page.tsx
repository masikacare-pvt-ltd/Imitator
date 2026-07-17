import type { Metadata } from 'next';
import Image from 'next/image';
import BackLink from '@/components/BackLink';
import ReturnToTop from '@/components/ReturnToTop';
import ContactClient from './ContactClient';
import styles from './contact.module.css';

export const metadata: Metadata = {
  title: 'Contact | Initiate Connection',
  description:
    'Establish contact with IMITATOR. Whether you seek to architect an autonomous enterprise or embed neural infrastructures, our secure nodes are standing by.',
  alternates: { canonical: 'https://imitator.in/contact' },
};

export default function ContactPage() {
  return (
    <>
      <div className={styles.pageWatermark} aria-hidden="true">TRANSMIT</div>
      <BackLink label="Abort / Return" />

      <main>
        {/* Hero Panorama */}
        <section className={styles.contactHero}>
          <div className={styles.heroHudTop} aria-hidden="true">
            SYS.COMM.NODE<br />LAT: 40.7128 LNG: -74.0060
          </div>
          <div className={styles.contactImgWrap}>
            <Image
              src="/contact.jpg"
              alt="Cinematic Abstract Transmission"
              fill
              style={{ objectFit: 'contain', objectPosition: 'center' }}
              className={styles.contactImg}
              priority
            />
          </div>
        </section>

        {/* Communication Interface */}
        <section className={`container-contact ${styles.commInterface}`}>

          {/* Left: Context */}
          <div className={`${styles.commContext} reveal`}>
            <span className={`t-caps ${styles.textAccent}`}>Protocol Initiated</span>
            <h1 className={`${styles.contactTitle} ${styles.fontSerif}`}>
              Establish <br />
              <span className={`${styles.italicText} ${styles.textAccent}`}>Connection.</span>
            </h1>
            <p className={`${styles.contactDesc} blur-type-contact`}>
              Whether you seek to architect an autonomous enterprise or embed neural
              infrastructures into your operations, our secure nodes are standing by.
              Transmit your coordinates.
            </p>

            <div className={`${styles.directLines} reveal delay-1`}>
              <div className={styles.lineItem}>
                <span className={styles.lineLabel}>Secure Comm Channel</span>
                <a
                  href="mailto:imitator.in@gmail.com"
                  className={`${styles.lineValue} ${styles.emailLink}`}
                >
                  imitator.in@gmail.com
                </a>
              </div>
              <div className={styles.lineItem}>
                <span className={styles.lineLabel}>Global HQ Coordinates</span>
                <span className={styles.lineValue} style={{ fontSize: '1.2rem', marginTop: '4px' }}>
                  Stealth Mode // CLASSIFIED
                </span>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className={`${styles.commFormWrapper} reveal delay-2`}>
            <div className={`${styles.fCorner} ${styles.fTl}`} aria-hidden="true" />
            <div className={`${styles.fCorner} ${styles.fTr}`} aria-hidden="true" />
            <div className={`${styles.fCorner} ${styles.fBl}`} aria-hidden="true" />
            <div className={`${styles.fCorner} ${styles.fBr}`} aria-hidden="true" />

            <form action="#" method="POST" id="contactForm" noValidate>
              <div className={`${styles.formGroup} reveal delay-3`}>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={styles.formInput}
                  placeholder=" "
                  required
                  autoComplete="off"
                />
                <label htmlFor="name" className={styles.formLabel}>
                  Identifier (Name)
                </label>
              </div>

              <div className={`${styles.formGroup} reveal delay-3`}>
                <input
                  type="text"
                  id="entity"
                  name="entity"
                  className={styles.formInput}
                  placeholder=" "
                  required
                  autoComplete="off"
                />
                <label htmlFor="entity" className={styles.formLabel}>
                  Enterprise / Entity
                </label>
              </div>

              <div className={`${styles.formGroup} reveal delay-3`}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={styles.formInput}
                  placeholder=" "
                  required
                  autoComplete="off"
                />
                <label htmlFor="email" className={styles.formLabel}>
                  Return Frequency (Email)
                </label>
              </div>

              <div className={`${styles.formGroup} reveal delay-3`}>
                <textarea
                  id="message"
                  name="message"
                  className={`${styles.formInput} ${styles.formTextarea}`}
                  placeholder=" "
                  required
                  autoComplete="off"
                />
                <label htmlFor="message" className={styles.formLabel}>
                  Transmission Data (Message)
                </label>
              </div>

              <div className="reveal delay-3">
                <button type="submit" className={`${styles.submitBtn} magnetic-submit`}>
                  <span className={styles.submitBtnText}>Initialize Link</span>
                  <svg
                    className={styles.submitIcon}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <ReturnToTop />
      <ContactClient />
    </>
  );
}

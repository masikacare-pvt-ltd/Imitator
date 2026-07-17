import Image from 'next/image';
import BackLink from './BackLink';
import ReturnToTop from './ReturnToTop';
import LegalClient from './LegalClient';
import styles from './LegalPageLayout.module.css';

interface LegalPageLayoutProps {
  watermark: string;
  heroImg: string;
  heroImgAlt: string;
  heroHud: string;
  sectionLabel: string;
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  children: React.ReactNode;
}

export default function LegalPageLayout({
  watermark,
  heroImg,
  heroImgAlt,
  heroHud,
  sectionLabel,
  titleLine1,
  titleLine2,
  subtitle,
  children,
}: LegalPageLayoutProps) {
  return (
    <>
      <div className={styles.ambientFlare} aria-hidden="true" />
      <div className={styles.pageWatermark} aria-hidden="true">{watermark}</div>
      <BackLink label="Return" />

      <main>
        {/* Hero */}
        <div className={styles.heroBanner}>
          <div className={styles.heroImageWrap}>
            <div className={styles.heroMicroHud} aria-hidden="true">
              {heroHud.split('\n').map((line, i) => (
                <span key={i}>{line}{i < heroHud.split('\n').length - 1 && <br />}</span>
              ))}
            </div>
            <Image
              src={heroImg}
              alt={heroImgAlt}
              width={1400}
              height={800}
              className={styles.heroImg}
              priority
            />
          </div>

          <div className={`container-sm ${styles.heroTextBlock} reveal active`}>
            <div className="t-caps" style={{ marginBottom: '16px' }}>
              {sectionLabel}
            </div>
            <h1 className={styles.heroTitle}>
              <span className={styles.fontSans}>{titleLine1}</span>
              <br />
              <span className={`${styles.fontSerif} ${styles.italicText} ${styles.textAccent}`}>
                {titleLine2}
              </span>
            </h1>
            <p className={`${styles.heroSubtitle} blur-type-legal`}>{subtitle}</p>
          </div>
        </div>

        {/* Legal Content */}
        <section className={`container-sm ${styles.legalDocument}`}>
          <div className={`${styles.premiumLine} reveal`} />
          {children}
        </section>
      </main>

      <ReturnToTop />
      <LegalClient />
    </>
  );
}

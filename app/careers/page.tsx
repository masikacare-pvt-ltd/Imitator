import type { Metadata } from 'next';
import Image from 'next/image';
import BackLink from '@/components/BackLink';
import ReturnToTop from '@/components/ReturnToTop';
import CareersClient from './CareersClient';
import styles from './careers.module.css';

export const metadata: Metadata = {
  title: 'Careers | Join the Vanguard',
  description:
    'IMITATOR is seeking elite pioneers for our inaugural internship protocols. Join us in constructing next-generation enterprise intelligence.',
  alternates: { canonical: 'https://imitator.in/careers' },
};

const roles = [
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="11" width="18" height="11" rx="2" className={styles.sMain} />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" className={styles.sMain} />
        <circle cx="12" cy="16" r="1" className={styles.sAccent} />
      </svg>
    ),
    title: 'Full-Stack Developer Intern',
    dept: 'Node 01 // IT & Infrastructure',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="9" className={styles.sMain} />
        <circle cx="12" cy="12" r="3" className={styles.sAccent} />
        <line x1="12" y1="1" x2="12" y2="3" className={styles.sMain} />
        <line x1="12" y1="21" x2="12" y2="23" className={styles.sMain} />
        <line x1="1" y1="12" x2="3" y2="12" className={styles.sMain} />
        <line x1="21" y1="12" x2="23" y2="12" className={styles.sMain} />
      </svg>
    ),
    title: 'AI & Robotics Engineering Intern',
    dept: 'Node 02 // Physical Intelligence',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" className={styles.sMain} />
        <circle cx="15" cy="21" r="1.5" className={styles.sAccent} />
      </svg>
    ),
    title: 'Growth & Digital Strategy Intern',
    dept: 'Node 03 // Marketing & E-Commerce',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <polygon points="12 2 2 7 12 12 22 7 12 2" className={styles.sMain} />
        <polyline points="2 17 12 22 22 17" className={styles.sMain} />
        <polyline points="2 12 12 17 22 12" className={styles.sAccent} />
      </svg>
    ),
    title: 'Operations & EdTech Intern',
    dept: 'Node 04 // Enterprise BPO',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="2" className={styles.sMain} />
        <circle cx="8" cy="12" r="3" className={styles.sAccent} />
        <line x1="14" y1="10" x2="18" y2="10" className={styles.sMain} />
        <line x1="14" y1="14" x2="18" y2="14" className={styles.sMain} />
      </svg>
    ),
    title: 'Cinematic Media & Design Intern',
    dept: 'Node 05 // Media & Publishing',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="6" y="6" width="12" height="12" rx="1" className={styles.sMain} />
        <path d="M6 12H2 M22 12h-4 M12 6V2 M12 22v-4" className={styles.sMain} />
        <rect x="9" y="9" width="6" height="6" className={styles.sAccent} />
      </svg>
    ),
    title: 'Hardware & IoT Intern',
    dept: 'Node 06 // Smart Manufacturing',
  },
];

export default function CareersPage() {
  return (
    <>
      <div className={styles.ambientFlare} aria-hidden="true" />
      <div className={styles.pageWatermark} aria-hidden="true">VANGUARD</div>
      <BackLink label="Return" />

      <main>
        {/* Hero */}
        <div className={styles.heroBanner}>
          <div className={styles.heroImageWrap}>
            <div className={styles.heroMicroHud} aria-hidden="true">
              SYS.CAREER.NODE<br />SEC: ALPHA
            </div>
            <Image
              src="/career.jpg"
              alt="Step into the Vanguard"
              width={1600}
              height={900}
              className={styles.heroImg}
              priority
            />
          </div>

          <div className={`container-md ${styles.heroTextBlock} reveal active`}>
            <div className="t-caps" style={{ marginBottom: '16px' }}>Initiative 2026</div>
            <h1 className={styles.heroTitle}>
              <span className={styles.fontSans}>Architect the </span>
              <br />
              <span className={`${styles.fontSerif} ${styles.italicText} ${styles.textAccent}`}>
                Autonomous.
              </span>
            </h1>
            <p className={`${styles.heroSubtitle} blur-type-careers`}>
              We are currently in stealth mode, constructing the foundation of next-generation
              enterprise intelligence. We are seeking elite pioneers for our inaugural internship
              protocols.
            </p>
          </div>
        </div>

        {/* Positions */}
        <div className={`container-md ${styles.positionsWrapper} reveal`}>
          <div className={styles.positionsHeader}>
            <span className="t-caps">Current Directives</span>
            <div className={styles.posCount}>
              06 <span>/ Nodes</span>
            </div>
          </div>

          {roles.map((role, i) => (
            <div key={i} className={styles.roleRow}>
              <div className={styles.roleIcon}>{role.icon}</div>
              <div className={styles.roleInfo}>
                <h3 className={styles.roleTitle}>{role.title}</h3>
                <span className={styles.roleDept}>{role.dept}</span>
              </div>
              <div className={styles.roleType}>Internship</div>
              <div className={styles.statusBadge}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                Coming Soon
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`container-md ${styles.contactWrapper} reveal`}>
          <div className={styles.premiumLine} />
          <h2 className={styles.contactH}>
            Are you the anomaly
            <br />
            <span className={`${styles.fontSerif} ${styles.italicText} ${styles.textAccent}`}>
              we are looking for?
            </span>
          </h2>
          <p className={styles.ctaSubtext}>
            For early access inquiries, initiate transmission via email.
          </p>
          <a
            href="mailto:imitator.in@gmail.com"
            className={`${styles.emailLink} magnetic-email`}
          >
            imitator.in@gmail.com
          </a>
        </div>
      </main>

      <ReturnToTop />
      <CareersClient />
    </>
  );
}

import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={`footer-dark ${styles.footerDark}`}>
      <div className={styles.footerWatermark} aria-hidden="true">IMITATOR</div>

      <div className={`container ${styles.footerGrid}`}>
        {/* Brand Column */}
        <div className={styles.footerBrand}>
          <Link href="/" className={`${styles.logo} ${styles.footerLogo}`}>
            <Image src="/logo.jpg" alt="IMITATOR Logo" width={24} height={24} className={styles.logoImg} />
            IMITATOR
          </Link>
          <p className="mt-24">
            Architecting the digital future through luxury design and artificial intelligence.
          </p>

          <div className={styles.footerSocials}>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/imitator.in"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialBtn}
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7 2C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2H7ZM7 4H17C18.6569 4 20 5.34315 20 7V17C20 18.6569 18.6569 20 17 20H7C5.34315 20 4 18.6569 4 17V7C4 5.34315 5.34315 4 7 4ZM12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9ZM17.5 5.5C16.6716 5.5 16 6.17157 16 7C16 7.82843 16.6716 8.5 17.5 8.5C18.3284 8.5 19 7.82843 19 7C19 6.17157 18.3284 5.5 17.5 5.5Z" />
              </svg>
            </a>
            {/* YouTube */}
            <a
              href="https://youtube.com/@imitator_ai"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialBtn}
              aria-label="YouTube"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M21.582 6.186a2.636 2.636 0 0 0-1.85-1.871C18.106 3.882 12 3.882 12 3.882s-6.106 0-7.732.433A2.636 2.636 0 0 0 2.418 6.186C2 7.834 2 12 2 12s0 4.166.418 5.814a2.636 2.636 0 0 0 1.85 1.871C5.894 20.118 12 20.118 12 20.118s6.106 0 7.732-.433a2.636 2.636 0 0 0 1.85-1.871C22 16.166 22 12 22 12s0-4.166-.418-5.814zM9.993 15.385V8.615L15.86 12l-5.867 3.385z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/imitatorprivatelimited"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialBtn}
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/1Bd9rYe68o/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialBtn}
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            {/* X (Twitter) */}
            <a
              href="https://x.com/imitator_ai"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialBtn}
              aria-label="X"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* Email */}
            <a
              href="mailto:imitator.in@gmail.com"
              className={`${styles.socialBtn} ${styles.iconStroke}`}
              aria-label="Email"
            >
              <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
          </div>
        </div>

        {/* Navigation Column */}
        <div>
          <h3 className={styles.footerTitle}>Navigation</h3>
          <ul className={styles.footerLinks}>
            <li><Link href="/#about"><span className={styles.fNum}>01.</span> About Us</Link></li>
            <li><Link href="/#services"><span className={styles.fNum}>02.</span> Services</Link></li>
            <li><Link href="/#work"><span className={styles.fNum}>03.</span> Case Studies</Link></li>
            <li><Link href="/#workflow"><span className={styles.fNum}>04.</span> Methodology</Link></li>
          </ul>
        </div>

        {/* Company Column */}
        <div>
          <h3 className={styles.footerTitle}>Company</h3>
          <ul className={styles.footerLinks}>
            <li><Link href="/contact"><span className={styles.fNum}>05.</span> Contact</Link></li>
            <li><Link href="/careers"><span className={styles.fNum}>06.</span> Careers</Link></li>
          </ul>
        </div>
      </div>

      <div className={`container ${styles.footerBottom}`}>
        <div>&copy; {year} IMITATOR Inc. All rights reserved.</div>
        <div className={styles.footerLegalLinks}>
          <Link href="/privacy" className={styles.textPrimaryLink}>Privacy Policy</Link>
          <Link href="/terms" className={styles.textPrimaryLink}>Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}

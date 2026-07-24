'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useMagneticEffect } from '@/hooks/useMagneticEffect';
import { useRef } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  useMagneticEffect(ctaRef as React.RefObject<HTMLElement>);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className={styles.navWrapper}>
      <nav className={styles.navbar} id="navbar">
        <Link href="/" className={styles.logo}>
          <Image
            src="/logo.jpg"
            alt="IMITATOR Logo"
            width={24}
            height={24}
            className={styles.logoImg}
          />
          IMITATOR
        </Link>
        <ul className={styles.navLinks}>
          <li>
            <Link href="/#about" className={styles.navLink}>
              About
            </Link>
          </li>
          <li>
            <Link href="/#services" className={styles.navLink}>
              Services
            </Link>
          </li>
          <li>
            <Link href="/#workflow" className={styles.navLink}>
              Process
            </Link>
          </li>
        </ul>
        <div className={styles.magneticWrap}>
          <Link
            href="/contact"
            className={`${styles.btn} ${styles.btnPrimary}`}
            ref={ctaRef}
          >
            Contact us
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className={styles.hamburger}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className={`${styles.hamburgerLine} ${menuOpen ? styles.hamburgerLineOpen1 : ''}`} />
          <span className={`${styles.hamburgerLine} ${menuOpen ? styles.hamburgerLineOpen2 : ''}`} />
          <span className={`${styles.hamburgerLine} ${menuOpen ? styles.hamburgerLineOpen3 : ''}`} />
        </button>
      </nav>

      {/* Mobile dropdown — slides down from the navbar, not full screen */}
      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}
        role="navigation"
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        <ul className={styles.mobileNavLinks}>
          <li><Link href="/#about" className={styles.mobileNavLink} onClick={closeMenu}>About</Link></li>
          <li><Link href="/#services" className={styles.mobileNavLink} onClick={closeMenu}>Services</Link></li>
          <li><Link href="/#workflow" className={styles.mobileNavLink} onClick={closeMenu}>Process</Link></li>
          <li><Link href="/careers" className={styles.mobileNavLink} onClick={closeMenu}>Careers</Link></li>
          <li>
            <Link href="/contact" className={`${styles.mobileNavLink} ${styles.mobileNavCta}`} onClick={closeMenu}>
              Contact us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

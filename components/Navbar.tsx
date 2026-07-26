'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useMagneticEffect } from '@/hooks/useMagneticEffect';
import styles from './Navbar.module.css';

export default function Navbar() {
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useMagneticEffect(ctaRef as React.RefObject<HTMLElement>);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Close menu on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <div className={styles.navWrapper}>
        <nav className={styles.navbar} id="navbar">
          <Link href="/" className={styles.logo} onClick={closeMenu}>
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
            <li><Link href="/#about" className={styles.navLink}>About</Link></li>
            <li><Link href="/#services" className={styles.navLink}>Services</Link></li>
            <li><Link href="/#workflow" className={styles.navLink}>Process</Link></li>
          </ul>

          <div className={styles.navActions}>
            <div className={`${styles.magneticWrap} ${styles.desktopCta}`}>
              <Link href="/contact" className={`${styles.btn} ${styles.btnPrimary}`} ref={ctaRef}>
                Contact us
              </Link>
            </div>
            <button 
              className={styles.hamburgerBtn} 
              onClick={toggleMenu} 
              aria-label="Toggle menu" 
              aria-expanded={isMobileMenuOpen}
            >
              <span className={styles.hamburgerLine}></span>
              <span className={styles.hamburgerLine}></span>
              <span className={styles.hamburgerLine}></span>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <div className={styles.mobileMenuBackdrop} onClick={closeMenu}></div>
        <div className={styles.mobileMenuContent}>
          <div className={styles.mobileMenuHeader}>
            <span className={styles.mobileMenuTitle}>Navigation</span>
            <button className={styles.closeBtn} onClick={closeMenu} aria-label="Close menu">
              &times;
            </button>
          </div>
          <ul className={styles.mobileNavList}>
            <li><Link href="/" className={styles.mobileNavLink} onClick={closeMenu}>Home</Link></li>
            <li><Link href="/#about" className={styles.mobileNavLink} onClick={closeMenu}>About</Link></li>
            <li><Link href="/#services" className={styles.mobileNavLink} onClick={closeMenu}>Services</Link></li>
            <li><Link href="/#workflow" className={styles.mobileNavLink} onClick={closeMenu}>Process</Link></li>
            <li><Link href="/#testimonials" className={styles.mobileNavLink} onClick={closeMenu}>Testimonials</Link></li>
            <li><Link href="/#faq" className={styles.mobileNavLink} onClick={closeMenu}>FAQ</Link></li>
          </ul>
          <div className={styles.mobileMenuFooter}>
            <Link href="/contact" className={`${styles.btn} ${styles.btnPrimary} ${styles.w100}`} onClick={closeMenu}>
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

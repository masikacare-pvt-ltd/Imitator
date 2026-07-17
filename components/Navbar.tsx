'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useMagneticEffect } from '@/hooks/useMagneticEffect';
import styles from './Navbar.module.css';

export default function Navbar() {
  const ctaRef = useRef<HTMLAnchorElement>(null);
  useMagneticEffect(ctaRef as React.RefObject<HTMLElement>);

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
      </nav>
    </div>
  );
}

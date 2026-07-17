import Link from 'next/link';
import styles from './BackLink.module.css';

interface BackLinkProps {
  label?: string;
}

export default function BackLink({ label = 'Return' }: BackLinkProps) {
  return (
    <Link href="/" className={styles.backLink}>
      {label}
    </Link>
  );
}

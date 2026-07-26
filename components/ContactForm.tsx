'use client';

import { useState, useRef, useEffect } from 'react';
import styles from '../app/contact/contact.module.css';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', entity: '', email: '', message: '' });
  const submitBtnRef = useRef<HTMLButtonElement>(null);

  // Magnetic button effect
  useEffect(() => {
    const el = submitBtnRef.current;
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
    };
    const handleLeave = () => {
      el.style.transform = 'translate(0px, 0px)';
    };

    el.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseleave', handleLeave);
    return () => {
      el.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseleave', handleLeave);
    };
  }, [status]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setStatus('loading');

    // Simulate transmission request
    setTimeout(() => {
      // 80% success probability, 20% error probability to test retry flow
      const isSuccess = Math.random() > 0.2;
      if (isSuccess) {
        setStatus('success');
        setFormData({ name: '', entity: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    }, 2000);
  };

  if (status === 'success') {
    return (
      <div className={styles.successNode} role="alert">
        <div className={styles.successGlow} />
        <svg className={styles.successIcon} viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" stroke="var(--c-accent)" />
          <polyline points="9 11 12 14 22 4" stroke="var(--c-accent)" />
        </svg>
        <h3 className={styles.successTitle}>LINK ESTABLISHED</h3>
        <p className={styles.successText}>
          Transmission received. Coordinates recorded and secure channel sync initiated.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className={styles.resetBtn}
        >
          Transmit New Data
        </button>
      </div>
    );
  }

  return (
    <div className={`${styles.commFormWrapper} reveal delay-2 active`}>
      <div className={`${styles.fCorner} ${styles.fTl}`} aria-hidden="true" />
      <div className={`${styles.fCorner} ${styles.fTr}`} aria-hidden="true" />
      <div className={`${styles.fCorner} ${styles.fBl}`} aria-hidden="true" />
      <div className={`${styles.fCorner} ${styles.fBr}`} aria-hidden="true" />

      {status === 'error' && (
        <div className={styles.errorAlert} role="alert">
          <svg className={styles.errorAlertIcon} viewBox="0 0 24 24" fill="none" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <div className={styles.errorAlertText}>
            <strong>TRANSMISSION ERROR:</strong> Node handshake interrupted. Please retry.
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className={`${styles.formGroup} reveal delay-3 active`}>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={styles.formInput}
            placeholder=" "
            required
            disabled={status === 'loading'}
            autoComplete="off"
          />
          <label htmlFor="name" className={styles.formLabel}>
            Identifier (Name)
          </label>
        </div>

        <div className={`${styles.formGroup} reveal delay-3 active`}>
          <input
            type="text"
            id="entity"
            name="entity"
            value={formData.entity}
            onChange={handleChange}
            className={styles.formInput}
            placeholder=" "
            required
            disabled={status === 'loading'}
            autoComplete="off"
          />
          <label htmlFor="entity" className={styles.formLabel}>
            Enterprise / Entity
          </label>
        </div>

        <div className={`${styles.formGroup} reveal delay-3 active`}>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={styles.formInput}
            placeholder=" "
            required
            disabled={status === 'loading'}
            autoComplete="off"
          />
          <label htmlFor="email" className={styles.formLabel}>
            Return Frequency (Email)
          </label>
        </div>

        <div className={`${styles.formGroup} reveal delay-3 active`}>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={`${styles.formInput} ${styles.formTextarea}`}
            placeholder=" "
            required
            disabled={status === 'loading'}
            autoComplete="off"
          />
          <label htmlFor="message" className={styles.formLabel}>
            Transmission Data (Message)
          </label>
        </div>

        <div className="reveal delay-3 active">
          <button
            type="submit"
            ref={submitBtnRef}
            disabled={status === 'loading'}
            className={`${styles.submitBtn} ${status === 'loading' ? styles.submitBtnDisabled : ''}`}
          >
            <span className={styles.submitBtnContent}>
              {status === 'loading' && (
                <span className={styles.spinner} aria-hidden="true" />
              )}
              <span className={styles.submitBtnText}>
                {status === 'loading' ? 'Transmitting...' : status === 'error' ? 'Retry Handshake' : 'Initialize Link'}
              </span>
            </span>
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
  );
}

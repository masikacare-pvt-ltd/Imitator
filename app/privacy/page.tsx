import type { Metadata } from 'next';
import LegalPageLayout from '@/components/LegalPageLayout';
import styles from '@/components/legal.module.css';

export const metadata: Metadata = {
  title: 'Privacy Policy | Security Protocols',
  description:
    'IMITATOR engineers systems with a zero-trust architecture. This document details how your data is harvested, encrypted, and governed within our ecosystem.',
  alternates: { canonical: 'https://imitator.in/privacy' },
};

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      watermark="PRIVACY"
      heroImg="/privacy.jpg"
      heroImgAlt="IMITATOR Data Security & Privacy"
      heroHud={'SYS.PRIVACY.NODE\nSEC: ENCRYPTED_A256'}
      sectionLabel="Security Protocols"
      titleLine1="Privacy "
      titleLine2="Policy."
      subtitle="At IMITATOR, we engineer systems with a zero-trust architecture. This document details how your data is harvested, encrypted, and governed within our ecosystem."
    >
      <div className={`${styles.legalSection} reveal`}>
        <div className={styles.legalSectionNum}>01</div>
        <h2 className={styles.legalH}>Information Ingestion (Data Collection)</h2>
        <p className={styles.legalP}>
          To engineer bespoke digital transformations and maintain communication channels,
          IMITATOR collects specific subsets of data. This ingestion is strictly limited to what
          is mathematically necessary to fulfill our operational directives.
        </p>
        <ul className={styles.legalList}>
          <li>
            <strong>Identity Metrics:</strong> Names, enterprise affiliations, and professional
            contact coordinates provided during transmission.
          </li>
          <li>
            <strong>Technical Telemetry:</strong> IP addresses, browser archetypes, device
            frameworks, and interaction patterns tracked via our secure web nodes.
          </li>
          <li>
            <strong>Proprietary Assets:</strong> Intellectual property, internal databases, or
            secure credentials temporarily shared under strict NDA for project execution.
          </li>
        </ul>
      </div>

      <div className={`${styles.legalSection} reveal`}>
        <div className={styles.legalSectionNum}>02</div>
        <h2 className={styles.legalH}>Algorithmic Utilization (How We Use Data)</h2>
        <p className={styles.legalP}>
          Data acts as the raw material for our engineering pipelines. We utilize collected
          information solely for the following explicit directives:
        </p>
        <p className={styles.legalP}>
          <strong>Project Execution:</strong> To architect, develop, and deploy the digital
          products and AI integrations contracted by your enterprise.
          <br />
          <strong>System Optimization:</strong> To monitor the health, security, and performance
          telemetry of our digital assets and communication networks.
          <br />
          <strong>Security Forensics:</strong> To detect anomalies, prevent fraudulent
          transmissions, and maintain the integrity of our zero-trust architecture.
        </p>
        <div className={styles.highlightBox}>
          <p className={styles.legalP} style={{ marginBottom: 0, fontSize: '0.95rem' }}>
            <strong>Machine Learning Constraint:</strong> IMITATOR strictly guarantees that
            client-specific Proprietary Assets and Personally Identifiable Information (PII) are{' '}
            <em>never</em> used to train external or generic AI models without explicit, written
            authorization. Your data remains isolated.
          </p>
        </div>
      </div>

      <div className={`${styles.legalSection} reveal`}>
        <div className={styles.legalSectionNum}>03</div>
        <h2 className={styles.legalH}>Zero-Trust Architecture (Data Protection)</h2>
        <p className={styles.legalP}>
          We treat all external data as a potential vulnerability. Therefore, all information
          ingested by IMITATOR is protected behind a rigorous{' '}
          <strong>Zero-Trust Security Architecture</strong>.
        </p>
        <p className={styles.legalP}>
          Data at rest and in transit is secured using <strong>AES-256 encryption</strong>. Access
          to client databases and project repositories is strictly role-based, requiring
          multi-factor authentication (MFA) and is continuously audited by automated internal
          security agents.
        </p>
      </div>

      <div className={`${styles.legalSection} reveal`}>
        <div className={styles.legalSectionNum}>04</div>
        <h2 className={styles.legalH}>Node Synchronization (Third-Party Sharing)</h2>
        <p className={styles.legalP}>
          IMITATOR does not sell, trade, or maliciously distribute your data to unauthorized
          external entities. We only synchronize data with highly vetted third-party subprocessors
          (e.g., secure cloud infrastructure providers like AWS or GCP) necessary for hosting and
          computational power.
        </p>
        <p className={styles.legalP}>
          All external nodes are bound by stringent{' '}
          <strong>Data Processing Agreements (DPAs)</strong> that mirror the security standards
          enforced within our own infrastructure.
        </p>
      </div>

      <div className={`${styles.legalSection} reveal`}>
        <div className={styles.legalSectionNum}>05</div>
        <h2 className={styles.legalH}>Data Sovereignty (Your Rights)</h2>
        <p className={styles.legalP}>
          In compliance with global data protection frameworks (including GDPR and CCPA), you
          maintain absolute sovereignty over your digital footprint within our systems.
        </p>
        <ul className={styles.legalList}>
          <li>
            <strong>The Right to Access:</strong> You may request a complete cryptographic export
            of all personal data held by our agency.
          </li>
          <li>
            <strong>The Right to Erasure:</strong> You may trigger a &quot;Right to be
            Forgotten&quot; protocol, prompting the permanent deletion of your PII from our active
            databases (barring data required for strict legal compliance).
          </li>
          <li>
            <strong>The Right to Rectification:</strong> You may correct or recalibrate any
            inaccurate data metrics.
          </li>
        </ul>
        <p className={styles.legalP} style={{ marginTop: '16px' }}>
          To execute any of these sovereignty protocols, initiate a transmission to our Data
          Protection Officer at:{' '}
          <a href="mailto:imitator.in@gmail.com">imitator.in@gmail.com</a>.
        </p>
      </div>

      <div className={`${styles.legalSection} reveal`}>
        <div className={styles.legalSectionNum}>06</div>
        <h2 className={styles.legalH}>Protocol Updates</h2>
        <p className={styles.legalP}>
          As our technological capabilities evolve, so too must our security and privacy
          parameters. IMITATOR reserves the right to patch or upgrade this Privacy Policy at our
          discretion. Significant architectural changes to how we process data will be communicated
          via direct transmission to active clients.
        </p>
      </div>
    </LegalPageLayout>
  );
}

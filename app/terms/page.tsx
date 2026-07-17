import type { Metadata } from 'next';
import LegalPageLayout from '@/components/LegalPageLayout';
import styles from '@/components/legal.module.css';

export const metadata: Metadata = {
  title: 'Terms of Service | System Protocols',
  description:
    'This document outlines the governing protocols, operational agreements, and financial structures for initiating enterprise partnerships with IMITATOR.',
  alternates: { canonical: 'https://imitator.in/terms' },
};

export default function TermsPage() {
  return (
    <LegalPageLayout
      watermark="PROTOCOL"
      heroImg="/terms.jpg"
      heroImgAlt="IMITATOR Legal Protocol & Terms"
      heroHud={'SYS.LEGAL.NODE\nDOC: PROTOCOL_01'}
      sectionLabel="System Protocols"
      titleLine1="Terms of "
      titleLine2="Service."
      subtitle="This document outlines the governing protocols, operational agreements, and financial structures for initiating enterprise partnerships with IMITATOR."
    >
      <div className={`${styles.legalSection} reveal`}>
        <div className={styles.legalSectionNum}>01</div>
        <h2 className={styles.legalH}>Agreement Overview</h2>
        <p className={styles.legalP}>
          By engaging with IMITATOR (hereafter referred to as the &quot;Agency&quot;) for design,
          engineering, artificial intelligence integration, or digital transformation services, the
          Client agrees to be bound by the protocols stipulated within this document.
        </p>
        <p className={styles.legalP}>
          These terms govern all project pipelines and serve to ensure absolute clarity, precision,
          and mutual protection throughout the lifecycle of our partnership.
        </p>
      </div>

      <div className={`${styles.legalSection} reveal`}>
        <div className={styles.legalSectionNum}>02</div>
        <h2 className={styles.legalH}>Financial Protocols &amp; Payment Terms</h2>
        <p className={styles.legalP}>
          To guarantee the allocation of our elite engineering and design resources, IMITATOR
          operates strictly on a dual-phase financial protocol. Work does not commence until the
          initial system initialization deposit is secured.
        </p>

        <div className={styles.paymentBox}>
          <div className={styles.paymentRow}>
            <span className={styles.paymentLabel}>Initialization Retainer</span>
            <span className={styles.paymentVal}>50% Advance</span>
          </div>
          <p className={styles.legalP} style={{ marginBottom: 0, marginTop: '12px', fontSize: '0.9rem' }}>
            Required to secure project scheduling, initiate discovery phases, and begin
            architectural development. This deposit is strictly non-refundable once architectural
            work commences.
          </p>
          <div className={styles.paymentDivider} />
          <div className={styles.paymentRow} style={{ paddingTop: 0, paddingBottom: 0, borderBottom: 'none' }}>
            <span className={styles.paymentLabel}>Deployment Handover</span>
            <span className={styles.paymentVal}>50% Completion</span>
          </div>
          <p className={styles.legalP} style={{ marginBottom: 0, marginTop: '12px', fontSize: '0.9rem' }}>
            The remaining balance is due immediately upon the completion of the project, strictly
            prior to the migration of final assets to the Client&apos;s live production servers and
            the transfer of Intellectual Property rights.
          </p>
        </div>

        <p className={styles.legalP}>
          Delays in the clearance of the final 50% invoice will result in the suspension of
          deployment protocols. The Agency retains full ownership of all assets until the financial
          ledger is cleared.
        </p>
      </div>

      <div className={`${styles.legalSection} reveal`}>
        <div className={styles.legalSectionNum}>03</div>
        <h2 className={styles.legalH}>Project Timelines &amp; Client Friction</h2>
        <p className={styles.legalP}>
          We engineer with cinematic precision, which requires strict adherence to timelines.
          Project schedules outlined in the initial proposal are estimates based on continuous
          workflow.
        </p>
        <p className={styles.legalP}>
          Should the Client delay in providing necessary data, feedback, or approvals (exceeding 5
          business days), the project timeline will be recalibrated. IMITATOR reserves the right
          to pause the project and reassign resources, which may incur a project restart fee.
        </p>
      </div>

      <div className={`${styles.legalSection} reveal`}>
        <div className={styles.legalSectionNum}>04</div>
        <h2 className={styles.legalH}>Intellectual Property Rights</h2>
        <p className={styles.legalP}>
          Upon absolute clearance of the final 50% invoice, the Client is granted 100% exclusive
          ownership of the final deliverables, bespoke source code, and design assets engineered
          specifically for their project.
        </p>
        <p className={styles.legalP}>
          However, IMITATOR retains the right to utilize underlying, pre-existing libraries,
          algorithms, and non-bespoke foundational code developed prior to the engagement. We also
          reserve the right to feature the completed project within our portfolio architecture,
          unless a strict Non-Disclosure Agreement (NDA) overrides this clause.
        </p>
      </div>

      <div className={`${styles.legalSection} reveal`}>
        <div className={styles.legalSectionNum}>05</div>
        <h2 className={styles.legalH}>Revisions &amp; Scope Creep</h2>
        <p className={styles.legalP}>
          Our methodology relies on calculated milestones. Revisions are permitted within the
          boundaries of the approved initial scope documentation.
        </p>
        <p className={styles.legalP}>
          Requests for additional features, structural redesigns after architectural approval, or
          AI model scope expansions will be classified as &quot;Scope Creep.&quot; These anomalies
          will be paused, audited, and billed under a separate addendum at our standard hourly
          engineering rate before implementation.
        </p>
      </div>

      <div className={`${styles.legalSection} reveal`}>
        <div className={styles.legalSectionNum}>06</div>
        <h2 className={styles.legalH}>Limitation of Liability</h2>
        <p className={styles.legalP}>
          While IMITATOR engineers highly secure, autonomous systems, the digital landscape is
          inherently volatile. The Agency shall not be held liable for indirect, incidental, or
          consequential damages, including data loss or business interruption, arising
          post-deployment.
        </p>
        <p className={styles.legalP}>
          Once the system is handed over and accepted by the Client, routine maintenance, security
          patching, and server health become the Client&apos;s liability, unless a continuous
          &quot;Neural Maintenance Protocol&quot; (retainer) has been actively secured.
        </p>
      </div>

      <div className={`${styles.legalSection} reveal`}>
        <div className={styles.legalSectionNum}>07</div>
        <h2 className={styles.legalH}>Termination of Protocol</h2>
        <p className={styles.legalP}>
          Either entity may terminate the partnership with written notice if a material breach of
          these terms occurs. If the Client terminates the project prematurely without cause, the
          50% initialization retainer is forfeited. If the work completed exceeds the value of the
          retainer, IMITATOR will invoice for the uncompensated architectural labor.
        </p>
      </div>
    </LegalPageLayout>
  );
}

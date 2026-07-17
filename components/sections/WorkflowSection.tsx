import styles from './WorkflowSection.module.css';

const steps = [
  {
    phase: 'PHASE 01',
    title: 'Discovery & Synthesis',
    desc: 'We analyze your business architecture, identifying friction points and opportunities for AI intervention.',
    icon: (
      <svg className={styles.wfIconSvg} viewBox="0 0 24 24" fill="none" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="3" className={styles.wfAnimPulse} />
        <path d="M12 3a9 9 0 0 1 9 9" strokeDasharray="2 4" className={styles.wfAnimSpin} />
        <path d="M12 21a9 9 0 0 1-9-9" strokeDasharray="2 4" className={styles.wfAnimSpin} />
        <path d="M3 12a9 9 0 0 1 9-9" strokeOpacity="0.3" />
        <path d="M21 12a9 9 0 0 1-9 9" strokeOpacity="0.3" />
        <line x1="12" y1="6" x2="12" y2="9" />
        <line x1="12" y1="15" x2="12" y2="18" />
        <line x1="6" y1="12" x2="9" y2="12" />
        <line x1="15" y1="12" x2="18" y2="12" />
      </svg>
    ),
  },
  {
    phase: 'PHASE 02',
    title: 'UX/UI Blueprinting',
    desc: 'Crafting wireframes and design systems. Every interaction is mapped to ensure a luxurious user experience.',
    icon: (
      <svg className={styles.wfIconSvg} viewBox="0 0 24 24" fill="none" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="12 2 22 7 12 12 2 7 12 2" className={styles.wfAnimFloat1} />
        <polyline points="2 12 12 17 22 12" strokeOpacity="0.5" className={styles.wfAnimFloat2} />
        <polyline points="2 17 12 22 22 17" strokeOpacity="0.2" className={styles.wfAnimFloat3} />
        <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
        <circle cx="12" cy="7" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    phase: 'PHASE 03',
    title: 'Neural Development',
    desc: 'Writing pristine, modular code while training custom AI models specific to your operational needs.',
    icon: (
      <svg className={styles.wfIconSvg} viewBox="0 0 24 24" fill="none" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="6" y="6" width="12" height="12" rx="2" className={styles.wfAnimGlow} />
        <path d="M6 12H2" strokeDasharray="2 2" />
        <path d="M22 12h-4" strokeDasharray="2 2" />
        <path d="M12 6V2" strokeDasharray="2 2" />
        <path d="M12 22v-4" strokeDasharray="2 2" />
        <circle cx="12" cy="12" r="2" className={styles.wfAnimPulse} />
        <path d="M9 9l2 2" strokeOpacity="0.5" />
        <path d="M15 15l-2-2" strokeOpacity="0.5" />
        <path d="M9 15l2-2" strokeOpacity="0.5" />
        <path d="M15 9l-2 2" strokeOpacity="0.5" />
      </svg>
    ),
  },
  {
    phase: 'PHASE 04',
    title: 'Deployment & Scaling',
    desc: 'Launching into production with CI/CD pipelines, ensuring zero downtime and infinite scalability.',
    icon: (
      <svg className={styles.wfIconSvg} viewBox="0 0 24 24" fill="none" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M6 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4v8c0 2.21 1.79 4 4 4s4-1.79 4-4-1.79-4-4-4-4 1.79-4 4" className={styles.wfAnimDash} strokeDasharray="50" strokeDashoffset="50" />
        <polyline points="18 4 22 4 22 8" />
        <polyline points="6 20 2 20 2 16" />
        <circle cx="20" cy="6" r="1.5" fill="currentColor" stroke="none" className={styles.wfAnimBlink} />
        <circle cx="4" cy="18" r="1.5" fill="currentColor" stroke="none" className={styles.wfAnimBlinkAlt} />
      </svg>
    ),
  },
];

export default function WorkflowSection() {
  return (
    <section id="workflow" className={`container ${styles.workflowSection} pb-40`}>
      <div className="reveal" style={{ textAlign: 'left', marginBottom: '80px' }}>
        <span className="t-caps">The Methodology</span>
        <h2 className={`${styles.hAboutCinematic} mt-16`}>
          <span className="font-serif italic-text">Algorithmic</span>
          <br />
          <span className="font-sans highlight-text">Precision.</span>
        </h2>
        <div className={styles.aboutPremiumLine} />
      </div>

      <div className={`${styles.workflowProcessContainer} reveal delay-1`}>
        {/* Animated Pipeline SVG */}
        <div className={styles.advancedPipelineWrap} aria-hidden="true">
          <svg width="100%" height="120px" style={{ display: 'block', overflow: 'visible' }}>
            <defs>
              <linearGradient id="photon-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(255, 49, 27, 0)" />
                <stop offset="90%" stopColor="rgba(255, 49, 27, 1)" />
                <stop offset="100%" stopColor="#ffffff" />
              </linearGradient>
            </defs>
            <line x1="0" y1="50%" x2="100%" y2="50%" className={styles.pipeBase} />
            <line x1="0" y1="30%" x2="100%" y2="30%" className={styles.pipeBaseLight} />
            <line x1="0" y1="70%" x2="100%" y2="70%" className={styles.pipeBaseLight} />
            <line x1="0" y1="50%" x2="100%" y2="50%" pathLength="100" className={styles.pipePulseMain} />
            <line x1="0" y1="30%" x2="100%" y2="30%" pathLength="100" className={styles.pipePulseFast} />
            <line x1="0" y1="70%" x2="100%" y2="70%" pathLength="100" className={styles.pipePulseRev} />
            {/* Sync nodes */}
            {[
              'translateX(36px)',
              'translateX(calc(25% + 43.5px))',
              'translateX(calc(50% + 51px))',
              'translateX(calc(75% + 58.5px))',
            ].map((tx, i) => (
              <g key={i} style={{ transform: tx }}>
                <line x1="0" y1="10%" x2="0" y2="90%" className={styles.syncLine} />
                <circle cx="0" cy="50%" r="6" className={styles.syncDotCore} />
                <circle cx="0" cy="50%" r="12" className={styles.syncDotRing} />
              </g>
            ))}
          </svg>
        </div>

        {steps.map((step) => (
          <div key={step.phase} className={styles.workflowStep}>
            <div className={styles.workflowStepIcon}>
              {step.icon}
            </div>
            <div className={styles.wfContent}>
              <span className={styles.wfIdx}>{step.phase}</span>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

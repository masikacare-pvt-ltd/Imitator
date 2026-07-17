'use client';

import styles from './ServicesSection.module.css';

const services = [
  {
    num: '01',
    title: '01. Web & APP Development',
    desc: 'We build fast, reliable web and mobile applications tailored to your needs while protecting your infrastructure with proactive threat monitoring, zero-trust architectures, and advanced encryption. Custom SaaS solutions ensuring digital platforms scale seamlessly and securely.',
    icon: (<svg viewBox="0 0 100 100" aria-hidden="true"><polygon points="50,20 80,35 50,50 20,35" className={styles.sMain} /><polygon points="50,40 80,55 50,70 20,55" className={styles.sDash} /><polyline points="20,35 20,55 50,70 80,55 80,35" className={styles.sMain} /><line x1="50" y1="50" x2="50" y2="70" className={styles.sAccent} /><circle cx="50" cy="20" r="3" className={styles.sDot} /></svg>),
    dyn: (<svg viewBox="0 0 100 100" aria-hidden="true"><polygon points="50,20 80,35 50,50 20,35" className={styles.sMain} /><polygon points="50,40 80,55 50,70 20,55" className={styles.sDash} /><polyline points="20,35 20,55 50,70 80,55 80,35" className={styles.sMain} /><line x1="50" y1="50" x2="50" y2="70" className={styles.sAccent} /><circle cx="50" cy="20" r="3" className={styles.sDot} /></svg>),
  },
  {
    num: '02',
    title: '02. IoT, AI & Robotics',
    desc: 'Connect physical devices to powerful digital intelligence. From machine learning insights to autonomous industrial robots, our systems improve safety, reduce human error, and automate environments so you operate smarter and faster.',
    icon: (<svg viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="15" className={styles.sAccent} /><circle cx="50" cy="50" r="30" className={styles.sDash} /><path d="M50,20 A30,30 0 0,1 80,50" className={styles.sMain} /><path d="M50,80 A30,30 0 0,1 20,50" className={styles.sMain} /><circle cx="50" cy="50" r="4" className={styles.sDot} /><line x1="50" y1="35" x2="50" y2="10" className={styles.sMain} /><line x1="65" y1="65" x2="85" y2="85" className={styles.sMain} /></svg>),
    dyn: (<svg viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="15" className={styles.sAccent} /><circle cx="50" cy="50" r="30" className={`${styles.sDash} ${styles.animSpin}`} /><path d="M50,20 A30,30 0 0,1 80,50" className={styles.sMain} /><path d="M50,80 A30,30 0 0,1 20,50" className={styles.sMain} /><circle cx="50" cy="50" r="4" className={styles.sDot} /><line x1="50" y1="35" x2="50" y2="10" className={styles.sMain} /><line x1="65" y1="65" x2="85" y2="85" className={styles.sMain} /></svg>),
  },
  {
    num: '03',
    title: '03. Marketing & E-Commerce',
    desc: 'Grow your brand through data-driven campaigns, social media strategies, and highly profitable marketplace ecosystems. We design scalable e-commerce platforms with smart inventory management to turn visitors into loyal customers globally.',
    icon: (<svg viewBox="0 0 100 100" aria-hidden="true"><path d="M20,50 A30,30 0 0,1 80,50" className={styles.sDash} /><path d="M30,50 A20,20 0 0,1 70,50" className={styles.sMain} /><circle cx="50" cy="50" r="5" className={styles.sDot} /><line x1="50" y1="10" x2="50" y2="40" className={styles.sAccent} /><line x1="50" y1="60" x2="50" y2="90" className={styles.sAccent} /><polygon points="45,20 55,20 50,10" className={styles.sDot} /></svg>),
    dyn: (<svg viewBox="0 0 100 100" aria-hidden="true"><path d="M20,50 A30,30 0 0,1 80,50" className={`${styles.sDash} ${styles.animSpin}`} /><path d="M30,50 A20,20 0 0,1 70,50" className={styles.sMain} /><circle cx="50" cy="50" r="5" className={styles.sDot} /><line x1="50" y1="10" x2="50" y2="40" className={styles.sAccent} /><line x1="50" y1="60" x2="50" y2="90" className={styles.sAccent} /><polygon points="45,20 55,20 50,10" className={styles.sDot} /></svg>),
  },
  {
    num: '04',
    title: '04. Enterprise BPO & Education',
    desc: 'Streamline back-office support and elevate workforce training. We use intelligent outsourcing to cut costs and improve accuracy, alongside advanced corporate EdTech solutions to bridge skills gaps and prepare your teams for tomorrow.',
    icon: (<svg viewBox="0 0 100 100" aria-hidden="true"><circle cx="35" cy="50" r="20" className={styles.sMain} /><circle cx="65" cy="50" r="20" className={styles.sDash} /><path d="M45,50 A10,10 0 0,1 55,50" className={styles.sAccent} /><path d="M45,50 A10,10 0 0,0 55,50" className={styles.sAccent} /><circle cx="50" cy="50" r="4" className={styles.sDot} /><circle cx="15" cy="50" r="2" className={styles.sDot} /><circle cx="85" cy="50" r="2" className={styles.sDot} /></svg>),
    dyn: (<svg viewBox="0 0 100 100" aria-hidden="true"><circle cx="35" cy="50" r="20" className={`${styles.sMain} ${styles.animSpin}`} /><circle cx="65" cy="50" r="20" className={`${styles.sDash} ${styles.animSpinRev}`} /><path d="M45,50 A10,10 0 0,1 55,50" className={styles.sAccent} /><path d="M45,50 A10,10 0 0,0 55,50" className={styles.sAccent} /><circle cx="50" cy="50" r="4" className={styles.sDot} /><circle cx="15" cy="50" r="2" className={styles.sDot} /><circle cx="85" cy="50" r="2" className={styles.sDot} /></svg>),
  },
  {
    num: '05',
    title: '05. Media & Publishing',
    desc: "Tell your brand's story through cinematic video production and premium graphic design. We blend digital precision with traditional craftsmanship to create high-quality physical and visual assets that captivate audiences worldwide.",
    icon: (<svg viewBox="0 0 100 100" aria-hidden="true"><rect x="30" y="20" width="30" height="40" className={styles.sMain} /><rect x="40" y="30" width="30" height="40" className={styles.sDash} /><rect x="50" y="40" width="30" height="40" className={styles.sAccent} /><line x1="20" y1="20" x2="30" y2="20" className={styles.sMain} /><line x1="30" y1="10" x2="30" y2="20" className={styles.sMain} /><circle cx="65" cy="60" r="3" className={styles.sDot} /></svg>),
    dyn: (<svg viewBox="0 0 100 100" aria-hidden="true"><rect x="30" y="20" width="30" height="40" className={styles.sMain} /><rect x="40" y="30" width="30" height="40" className={styles.sDash} /><rect x="50" y="40" width="30" height="40" className={styles.sAccent} /><line x1="20" y1="20" x2="30" y2="20" className={styles.sMain} /><line x1="30" y1="10" x2="30" y2="20" className={styles.sMain} /><circle cx="65" cy="60" r="3" className={styles.sDot} /></svg>),
  },
  {
    num: '06',
    title: '06. Electronics & Smart Manufacturing',
    desc: 'Research, design, and maintain smart hardware systems. From consumer electronics to automated textile production, we handle the engineering, technical support, and sustainable practices to keep your physical operations state-of-the-art.',
    icon: (<svg viewBox="0 0 100 100" aria-hidden="true"><polygon points="50,20 70,50 50,80 30,50" className={styles.sMain} /><polygon points="50,35 60,50 50,65 40,50" className={styles.sDash} /><circle cx="50" cy="50" r="3" className={styles.sDot} /><path d="M20,50 A30,30 0 0,1 50,20" className={styles.sAccent} /><path d="M80,50 A30,30 0 0,1 50,80" className={styles.sAccent} /><polygon points="50,20 45,15 45,25" className={styles.sDot} /><polygon points="50,80 55,75 55,85" className={styles.sDot} /></svg>),
    dyn: (<svg viewBox="0 0 100 100" aria-hidden="true"><polygon points="50,20 70,50 50,80 30,50" className={styles.sMain} /><polygon points="50,35 60,50 50,65 40,50" className={`${styles.sDash} ${styles.animSpin}`} /><circle cx="50" cy="50" r="3" className={styles.sDot} /><path d="M20,50 A30,30 0 0,1 50,20" className={styles.sAccent} /><path d="M80,50 A30,30 0 0,1 50,80" className={styles.sAccent} /><polygon points="50,20 45,15 45,25" className={styles.sDot} /><polygon points="50,80 55,75 55,85" className={styles.sDot} /></svg>),
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.servicesWrapper}>
        {/* Sticky Left */}
        <div className={styles.servicesLeft}>
          <span className="t-caps">Our Services</span>
          <h2 className={`${styles.hAboutCinematic} mt-16`}>
            <span className="font-serif italic-text">End-to-End</span>
            <br />
            <span className="font-sans highlight-text">Excellence.</span>
          </h2>
          <div className={styles.aboutPremiumLine} />
          <p className={`t-lead ${styles.servicesLeadText}`}>
            Delivering highly specialized operations across key digital and industrial sectors.
            Absolute precision in every execution.
          </p>
          <div className={styles.servicesIconContainer}>
            {services.map((svc, i) => (
              <div
                key={svc.num}
                className={`${styles.dynamicIcon} dynamic-icon${i === 0 ? ' ' + styles.active + ' active' : ''}`}
                data-icon={i}
              >
                {svc.dyn}
              </div>
            ))}
          </div>
        </div>

        {/* Scrollable Right */}
        <div className={styles.servicesRight} id="services-scroll-track">
          {services.map((svc) => (
            <div key={svc.num} className={`${styles.serviceListItem} service-list-item`}>
              <div className={styles.srvWatermark} aria-hidden="true">{svc.num}</div>
              <div className={`${styles.srvHudCorner} ${styles.tl}`} aria-hidden="true" />
              <div className={`${styles.srvHudCorner} ${styles.br}`} aria-hidden="true" />
              <div className={styles.srvMicroIndicator} aria-hidden="true">
                <span className={styles.pulseNode} />
                {` SYS.OP.${svc.num} // ACTIVE`}
              </div>
              <div className={styles.serviceContentFlex}>
                <div className={styles.serviceInlineIcon}>{svc.icon}</div>
                <div className={styles.serviceTextWrap}>
                  <h3 className={styles.serviceTitle}>{svc.title}</h3>
                  <p className={styles.serviceDesc}>{svc.desc}</p>
                </div>
              </div>
              <div className={styles.srvDialWrap} aria-hidden="true">
                <svg className={styles.srvDialSvg} viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" className={styles.dialTrack} />
                  <path d="M 50 5 A 45 45 0 0 1 95 50" className={styles.dialArc} />
                  <circle cx="50" cy="50" r="25" className={styles.dialInner} />
                  <g className={styles.dialNeedleWrap}>
                    <line x1="50" y1="50" x2="50" y2="25" className={styles.dialNeedle} />
                  </g>
                  <circle cx="50" cy="50" r="4" className={styles.dialDot} />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

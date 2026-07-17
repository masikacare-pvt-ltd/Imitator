import Image from 'next/image';
import styles from './WorkSection.module.css';

const projects = [
  { id: 1, img: '/work01.jpg', cat: 'Autonomous AI', title: 'Project Genesis', span: 'large' },
  { id: 2, img: '/work02.jpg', cat: 'Cloud Engineering', title: 'Neural Compute', span: 'wide' },
  { id: 3, img: '/work03.jpg', cat: 'Cyber Security', title: 'Zero Trust', span: 'standard' },
  { id: 4, img: '/work04.jpg', cat: 'UI/UX Design', title: 'Aero Interface', span: 'standard' },
  { id: 5, img: '/work05.jpg', cat: 'Robotics', title: 'Automata Labs', span: 'wideCustom' },
  { id: 6, img: '/work06.jpg', cat: 'Data Analytics', title: 'Quantum Insights', span: 'wide' },
];

const spanClass: Record<string, string> = {
  large: styles.wLarge,
  wide: styles.wWide,
  standard: styles.wStandard,
  wideCustom: styles.wWideCustom,
};

export default function WorkSection() {
  return (
    <section id="work" className={styles.workSectionWrap}>
      <div className={`container reveal`} style={{ textAlign: 'center' }}>
        <span className="t-caps">Our Portfolio</span>
        <h2 className={`${styles.hAboutCinematic} mt-16`}>
          <span className="font-serif italic-text">Architected</span>
          <br />
          <span className="font-sans highlight-text">Perfection.</span>
        </h2>
        <div className={`${styles.aboutPremiumLine}`} style={{ margin: '0 auto' }} />
      </div>

      <div className={`container ${styles.workGrid} reveal delay-1`}>
        {projects.map((proj) => (
          <div key={proj.id} className={`${styles.workItem} ${spanClass[proj.span]}`}>
            <Image
              src={proj.img}
              alt={proj.title}
              fill
              className={styles.workImg}
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            <div className={styles.workOverlay}>
              <span className={styles.workCat}>{proj.cat}</span>
              <h3 className={styles.workTitle}>{proj.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

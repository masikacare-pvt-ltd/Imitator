/**
 * ReturnToTop — render-only component.
 * The scroll behaviour is wired up by each page's Client component
 * (HomeClient, CareersClient, ContactClient, LegalClient).
 */
export default function ReturnToTop() {
  return (
    <button id="return-to-top" className="return-to-top" aria-label="Return to top">
      <svg className="rtt-circle-svg" viewBox="0 0 52 52" aria-hidden="true">
        <circle className="rtt-circle-bg" cx="26" cy="26" r="24" />
        <circle className="rtt-circle-progress" cx="26" cy="26" r="24" />
      </svg>
      <svg className="rtt-arrow" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}

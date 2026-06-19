import styles from "./MapCompass.module.css";

export function MapCompass() {
  return (
    <div
      data-testid="map-compass"
      aria-hidden="true"
      className={styles.compass}
      style={{ pointerEvents: "none" }}
    >
      <svg
        viewBox="0 0 120 120"
        className={styles.svg}
        focusable="false"
      >
        <defs>
          <linearGradient id="compass-primary" x1="34" y1="20" x2="86" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="#A78BFA" />
            <stop offset="0.52" stopColor="#4F7CFF" />
            <stop offset="1" stopColor="#67E8F9" />
          </linearGradient>
          <linearGradient id="compass-secondary" x1="26" y1="26" x2="94" y2="94" gradientUnits="userSpaceOnUse">
            <stop stopColor="#8B5CF6" />
            <stop offset="1" stopColor="#EDE9FE" />
          </linearGradient>
        </defs>

        <circle cx="60" cy="60" r="34" className={styles.outerRing} />
        <circle cx="60" cy="60" r="25" className={styles.innerRing} />

        <path d="M60 17L67.5 50.5L60 60L52.5 50.5L60 17Z" className={styles.primaryPoint} />
        <path d="M60 103L67.5 69.5L60 60L52.5 69.5L60 103Z" className={styles.secondaryPoint} />
        <path d="M17 60L50.5 52.5L60 60L50.5 67.5L17 60Z" className={styles.secondaryPoint} />
        <path d="M103 60L69.5 52.5L60 60L69.5 67.5L103 60Z" className={styles.primaryPoint} />

        <path d="M32 32L51 51L60 60L45.5 57L32 32Z" className={styles.diagonalPoint} />
        <path d="M88 32L69 51L60 60L74.5 57L88 32Z" className={styles.diagonalPointAlt} />
        <path d="M32 88L51 69L60 60L45.5 63L32 88Z" className={styles.diagonalPointAlt} />
        <path d="M88 88L69 69L60 60L74.5 63L88 88Z" className={styles.diagonalPoint} />

        <line x1="60" y1="26" x2="60" y2="94" className={styles.axis} />
        <line x1="26" y1="60" x2="94" y2="60" className={styles.axis} />

        <text x="60" y="10" textAnchor="middle" className={styles.label}>N</text>
        <text x="60" y="118" textAnchor="middle" className={styles.label}>S</text>
        <text x="7" y="64" textAnchor="start" className={styles.label}>W</text>
        <text x="113" y="64" textAnchor="end" className={styles.label}>E</text>
      </svg>
    </div>
  );
}

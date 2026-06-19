import type { CSSProperties } from "react";
import {
  Bus,
  Layers3,
  Puzzle,
  ShieldCheck,
  Sparkles,
  TowerControl,
  type LucideIcon,
} from "lucide-react";
import type { ActiveDistrictState, District, DistrictIcon } from "./district-types";
import styles from "./MobileSelectedProjectCard.module.css";

const DISTRICT_ICONS: Record<DistrictIcon, LucideIcon> = {
  bus: Bus,
  shield: ShieldCheck,
  layers: Layers3,
  beacon: TowerControl,
  puzzle: Puzzle,
  sparkles: Sparkles,
};

type MobileSelectedProjectCardProps = {
  activeDistrict: ActiveDistrictState;
  district: District | null;
};

export function MobileSelectedProjectCard({
  activeDistrict,
  district,
}: MobileSelectedProjectCardProps) {
  if (!district || !activeDistrict) {
    return (
      <section
        data-testid="mobile-selected-project-card"
        className={`${styles.card} ${styles.hintCard}`}
        aria-label="Projeto selecionado"
      >
        <div className={styles.hintEyebrow}>Distrito interativo</div>
        <h2 className={styles.hintTitle}>Toque em um distrito para ver detalhes.</h2>
        <p className={styles.hintDescription}>
          O mapa continua interativo no celular, mas o conteudo abre em uma area segura
          abaixo da cidade.
        </p>
      </section>
    );
  }

  const Icon = DISTRICT_ICONS[district.icon];
  const isFuture = district.status === "future";

  return (
    <section
      data-testid="mobile-selected-project-card"
      aria-labelledby={`mobile-district-title-${district.id}`}
      className={styles.card}
      style={{ "--district-color": district.color } as CSSProperties}
    >
      <div className={styles.statusRow}>
        <span className={styles.statusPill}>
          {activeDistrict.zone === "inner" ? "Distrito em foco" : "Distrito selecionado"}
        </span>
        <span className={styles.statusMeta}>{isFuture ? "Em construcao" : "Projeto ativo"}</span>
      </div>

      <div className={styles.header}>
        <div className={styles.iconShell} aria-hidden="true">
          <Icon size={18} strokeWidth={1.8} />
        </div>

        <div className={styles.titleGroup}>
          <h2 id={`mobile-district-title-${district.id}`} className={styles.title}>
            {district.name}
          </h2>
          <p className={styles.subtitle}>{district.subtitle}</p>
        </div>
      </div>

      <p className={styles.description}>{district.description}</p>

      {isFuture ? (
        <div className={styles.futureNote}>
          Uma nova area do portfolio esta sendo preparada para entrar no mapa em breve.
        </div>
      ) : (
        <ul className={styles.highlights}>
          {district.highlights.map((highlight) => (
            <li
              key={`${district.id}-${highlight.value}-${highlight.label}`}
              className={styles.highlightItem}
            >
              <span className={styles.highlightValue}>{highlight.value}</span>
              <span className={styles.highlightLabel}>{highlight.label}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

import Link from "next/link";
import {
  Bus,
  Layers3,
  Puzzle,
  ShieldCheck,
  Sparkles,
  TowerControl,
  type LucideIcon,
} from "lucide-react";
import { getDistrictProjectHref } from "./district-project-links";
import styles from "./ProjectDistrictCard.module.css";
import type {
  ActiveDistrictState,
  District,
  DistrictIcon,
} from "./district-types";

type ProjectDistrictCardProps = {
  district: District;
  activeDistrict: ActiveDistrictState;
  isKeyboardFocused: boolean;
  isDesktopNavigationEnabled: boolean;
  onActivateExpandedDistrict: (districtId: District["id"]) => void;
  onRequestClose: () => void;
};

type DistrictCardMode = "static" | "highlighted" | "expanded";
type FutureCardMode = "label" | "expanded";

const MAP_WIDTH = 1672;
const MAP_HEIGHT = 941;
const CARD_SIDE_MARGIN_PX = 20;
const CARD_TOP_SAFE_AREA_PX = 96;
const CARD_BOTTOM_MARGIN_PX = 28;
const COMPACT_CARD_WIDTH_PX = 198;
const EXPANDED_CARD_WIDTH_PX = 304;
const COMPACT_CARD_HEIGHT_PX = 66;
const ACTIVE_EXPANDED_CARD_HEIGHT_PX = 228;
const FUTURE_EXPANDED_CARD_HEIGHT_PX = 146;

const DISTRICT_ICONS: Record<DistrictIcon, LucideIcon> = {
  bus: Bus,
  shield: ShieldCheck,
  layers: Layers3,
  beacon: TowerControl,
  puzzle: Puzzle,
  sparkles: Sparkles,
};

export function ProjectDistrictCard({
  district,
  activeDistrict,
  isKeyboardFocused,
  isDesktopNavigationEnabled,
  onActivateExpandedDistrict,
  onRequestClose,
}: ProjectDistrictCardProps) {
  const Icon = DISTRICT_ICONS[district.icon];
  const activeZone =
    activeDistrict?.districtId === district.id ? activeDistrict.zone : null;
  const activeMode: DistrictCardMode =
    activeZone === "inner"
      ? "expanded"
      : activeZone === "outer"
        ? "highlighted"
        : "static";
  const futureMode: FutureCardMode = activeZone === "inner" ? "expanded" : "label";
  const isFuture = district.status === "future";
  const mode = isFuture ? futureMode : activeMode;
  const isExpanded = mode === "expanded";
  const position = isExpanded
    ? district.cardPosition.expanded
    : district.cardPosition.compact;
  const cardWidth = isExpanded ? EXPANDED_CARD_WIDTH_PX : COMPACT_CARD_WIDTH_PX;
  const compactHeight = isFuture ? 44 : COMPACT_CARD_HEIGHT_PX;
  const cardHeight = isFuture
    ? futureMode === "expanded"
      ? FUTURE_EXPANDED_CARD_HEIGHT_PX
      : compactHeight
    : isExpanded
      ? ACTIVE_EXPANDED_CARD_HEIGHT_PX
      : compactHeight;
  const cardTestId = isFuture ? "future-district-card" : "project-district-card";
  const projectHref = getDistrictProjectHref(district.id);
  const isNavigable = Boolean(projectHref) && isDesktopNavigationEnabled;

  const cardContent = (
    <>
      {isFuture && futureMode === "label" ? (
        <div
          data-testid="future-district-label"
          className={styles.futureLabelContent}
          aria-label={`${district.name}: ${district.subtitle}`}
        >
          <span className={styles.futureGlyph}>✦</span>
          <span>Em construção</span>
        </div>
      ) : (
        <>
          <div className={styles.header}>
            <div className={styles.iconShell} aria-hidden="true">
              <Icon size={20} strokeWidth={1.8} />
            </div>
            <div className={styles.titleGroup}>
              <h2 id={`district-card-title-${district.id}`} className={styles.title}>
                {district.name}
              </h2>
              <div className={styles.subtitle}>{district.subtitle}</div>
            </div>
          </div>

          <div
            data-testid="project-district-card-expanded"
            data-expanded={isExpanded}
            aria-hidden={!isExpanded}
            className={styles.expandable}
          >
            <div className={styles.expandableInner}>
              <div className={styles.expandableContent}>
                <p className={styles.description}>{district.description}</p>

                {isFuture ? null : (
                  <ul className={styles.highlights}>
                    {district.highlights.map((highlight) => (
                      <li
                        key={`${district.id}-${highlight.value}-${highlight.label}`}
                        className={styles.highlightItem}
                      >
                        <div className={styles.highlightValue}>{highlight.value}</div>
                        <div className={styles.highlightLabel}>{highlight.label}</div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );

  return (
    <section
      data-testid={cardTestId}
      data-card-district={district.id}
      data-card-mode={mode}
      aria-labelledby={`district-card-title-${district.id}`}
      className={[
        styles.card,
        isExpanded ? styles.cardExpanded : "",
        isFuture ? styles.futureCard : styles.activeCard,
        !isFuture && activeMode === "static" ? styles.cardStatic : "",
        !isFuture && activeMode === "highlighted" ? styles.cardHighlighted : "",
        !isFuture && activeMode === "expanded" ? styles.cardExpandedActive : "",
        isFuture && futureMode === "label" ? styles.futureLabel : "",
        isFuture && futureMode === "expanded" ? styles.futureExpanded : "",
        isKeyboardFocused ? styles.cardKeyboardFocus : "",
      ].join(" ")}
      style={{
        left: `clamp(${CARD_SIDE_MARGIN_PX}px, calc(${(position.x / MAP_WIDTH) * 100}% - ${cardWidth / 2}px), calc(100% - ${cardWidth}px - ${CARD_SIDE_MARGIN_PX}px))`,
        top: `clamp(var(--city-top-safe-area, ${CARD_TOP_SAFE_AREA_PX}px), calc(${(position.y / MAP_HEIGHT) * 100}% - ${cardHeight / 2}px), calc(100% - ${cardHeight}px - ${CARD_BOTTOM_MARGIN_PX}px))`,
        ["--district-color" as string]: district.color,
        pointerEvents: isNavigable ? "auto" : "none",
      }}
    >
      {isNavigable && projectHref ? (
        <Link
          href={projectHref}
          className={`${styles.panel} ${styles.panelLink}`}
          aria-label={`Abrir ${district.name} na pagina de projetos`}
          onMouseEnter={() => onActivateExpandedDistrict(district.id)}
          onFocus={() => onActivateExpandedDistrict(district.id)}
          onMouseLeave={onRequestClose}
        >
          {cardContent}
        </Link>
      ) : (
        <div className={styles.panel}>{cardContent}</div>
      )}
    </section>
  );
}

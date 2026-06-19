import type { CSSProperties } from "react";
import styles from "./DistrictLayer.module.css";
import { districts } from "./districts";
import type {
  ActiveDistrictState,
  District,
  DistrictId,
  DistrictZone,
} from "./district-types";

const DEBUG_DISTRICTS = false;

type DistrictLayerProps = {
  activeDistrict: ActiveDistrictState;
  onActivateDistrict: (districtId: DistrictId, zone: DistrictZone) => void;
  onRequestClose: () => void;
  onFocusDistrictChange: (districtId: DistrictId | null) => void;
};

function getDistrictAriaLabel(district: District, zone: DistrictZone) {
  const zoneLabel = zone === "inner" ? "zona de foco" : "zona de aproximacao";
  const futureLabel =
    district.status === "future" ? ", projeto em construcao" : "";

  return `${district.name}, ${district.subtitle}, ${zoneLabel}${futureLabel}`;
}

function handleDistrictBlur(
  event: React.FocusEvent<SVGPolygonElement>,
  onRequestClose: () => void,
  onFocusDistrictChange: (districtId: DistrictId | null) => void,
) {
  const nextTarget = event.relatedTarget;

  if (
    nextTarget instanceof Element &&
    event.currentTarget.parentElement?.contains(nextTarget)
  ) {
    return;
  }

  onFocusDistrictChange(null);
  onRequestClose();
}

function preventPendingActions(event: React.KeyboardEvent<SVGPolygonElement>) {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
  }
}

function preventPointerFocus(event: React.PointerEvent<SVGPolygonElement>) {
  if (event.pointerType === "touch") {
    return;
  }

  event.preventDefault();
}

export function DistrictLayer({
  activeDistrict,
  onActivateDistrict,
  onRequestClose,
  onFocusDistrictChange,
}: DistrictLayerProps) {
  const activeDistrictData = activeDistrict
    ? districts.find((district) => district.id === activeDistrict.districtId) ?? null
    : null;

  const debugText = activeDistrictData
    ? {
        district: activeDistrictData.name,
        zone: activeDistrict?.zone === "inner" ? "foco" : "aproximacao",
      }
    : null;

  return (
    <>
      <svg
        data-testid="district-layer"
        viewBox="0 0 1672 941"
        preserveAspectRatio="none"
        className={styles.districtLayer}
      >
        {districts.map((district) => {
          const isOuterActive =
            activeDistrict?.districtId === district.id &&
            activeDistrict.zone === "outer";
          const isInnerActive =
            activeDistrict?.districtId === district.id &&
            activeDistrict.zone === "inner";
          const shouldRenderAura = isOuterActive || isInnerActive;

          return (
            <g
              key={district.id}
              data-testid={`district-group-${district.id}`}
              data-district-id={district.id}
              data-district-status={district.status}
              className={styles.districtGroup}
              onPointerLeave={onRequestClose}
            >
              {shouldRenderAura ? (
                <g
                  data-testid={`district-aura-${district.id}`}
                  data-aura-state={isInnerActive ? "expanded" : "highlighted"}
                  className={styles.districtAuraGroup}
                  style={{ "--district-color": district.color } as CSSProperties}
                  aria-hidden="true"
                >
                  <polygon
                    points={district.innerPoints}
                    className={[
                      styles.districtLight,
                      isInnerActive ? styles.districtLightExpanded : styles.districtLightHighlighted,
                    ].join(" ")}
                    vectorEffect="non-scaling-stroke"
                  />
                </g>
              ) : null}

              <polygon
                points={district.outerPoints}
                data-testid={`district-outer-${district.id}`}
                data-zone="outer"
                role="button"
                tabIndex={0}
                aria-label={getDistrictAriaLabel(district, "outer")}
                vectorEffect="non-scaling-stroke"
                className={[
                  styles.zone,
                  DEBUG_DISTRICTS ? styles.zoneOuter : "",
                  DEBUG_DISTRICTS && district.status === "future"
                    ? styles.zoneFutureOuter
                    : "",
                  DEBUG_DISTRICTS && isOuterActive ? styles.zoneActiveOuter : "",
                ].join(" ")}
                onPointerEnter={() => onActivateDistrict(district.id, "outer")}
                onPointerUp={() => onActivateDistrict(district.id, "outer")}
                onClick={() => onActivateDistrict(district.id, "outer")}
                onPointerDown={preventPointerFocus}
                onFocus={() => {
                  onActivateDistrict(district.id, "outer");
                  onFocusDistrictChange(district.id);
                }}
                onBlur={(event) =>
                  handleDistrictBlur(event, onRequestClose, onFocusDistrictChange)
                }
                onKeyDown={preventPendingActions}
              />

              <polygon
                points={district.innerPoints}
                data-testid={`district-inner-${district.id}`}
                data-zone="inner"
                role="button"
                tabIndex={0}
                aria-label={getDistrictAriaLabel(district, "inner")}
                vectorEffect="non-scaling-stroke"
                className={[
                  styles.zone,
                  DEBUG_DISTRICTS ? styles.zoneInner : "",
                  DEBUG_DISTRICTS && district.status === "future"
                    ? styles.zoneFutureInner
                    : "",
                  DEBUG_DISTRICTS && isInnerActive ? styles.zoneActiveInner : "",
                ].join(" ")}
                onPointerEnter={() => onActivateDistrict(district.id, "inner")}
                onPointerUp={() => onActivateDistrict(district.id, "inner")}
                onClick={() => onActivateDistrict(district.id, "inner")}
                onPointerDown={preventPointerFocus}
                onFocus={() => {
                  onActivateDistrict(district.id, "inner");
                  onFocusDistrictChange(district.id);
                }}
                onBlur={(event) =>
                  handleDistrictBlur(event, onRequestClose, onFocusDistrictChange)
                }
                onKeyDown={preventPendingActions}
              />
            </g>
          );
        })}
      </svg>

      {DEBUG_DISTRICTS ? (
        <div data-testid="district-debug-panel" className={styles.debugPanel}>
          {debugText ? (
            <>
              <strong>Distrito</strong>
              <div>{debugText.district}</div>
              <strong className="mt-2">Zona</strong>
              <div>{debugText.zone}</div>
            </>
          ) : (
            <div>Mova o cursor sobre uma area</div>
          )}
        </div>
      ) : null}
    </>
  );
}

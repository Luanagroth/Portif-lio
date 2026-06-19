import type { ActiveDistrictId, DistrictId } from "./district-types";

const DISTRICT_PROJECT_SLUGS: Record<ActiveDistrictId, string> = {
  movi: "movi",
  atlas: "atlas",
  essenza: "essenza-bistro",
  farol: "farol",
  extensions: "extension-guard",
};

export function getDistrictProjectSlug(districtId: DistrictId) {
  if (districtId in DISTRICT_PROJECT_SLUGS) {
    return DISTRICT_PROJECT_SLUGS[districtId as ActiveDistrictId];
  }

  return null;
}

export function getDistrictProjectHref(districtId: DistrictId) {
  const projectSlug = getDistrictProjectSlug(districtId);

  return projectSlug ? `/projetos#${projectSlug}` : null;
}

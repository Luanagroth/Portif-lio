export type DistrictId =
  | "movi"
  | "atlas"
  | "essenza"
  | "farol"
  | "extensions"
  | "future-island"
  | "future-cathedral";

export type DistrictStatus = "active" | "future";

export type DistrictZone = "outer" | "inner";

export type ActiveDistrictId =
  | "movi"
  | "atlas"
  | "essenza"
  | "farol"
  | "extensions";

export type DistrictIcon =
  | "bus"
  | "shield"
  | "layers"
  | "beacon"
  | "puzzle"
  | "sparkles";

export interface DistrictHighlight {
  value: string;
  label: string;
}

export interface DistrictCardPosition {
  compact: {
    x: number;
    y: number;
  };
  expanded: {
    x: number;
    y: number;
  };
}

export type ActiveDistrictState = {
  districtId: DistrictId;
  zone: DistrictZone;
} | null;

export interface District {
  id: DistrictId;
  name: string;
  subtitle: string;
  color: string;
  status: DistrictStatus;
  icon: DistrictIcon;
  description: string;
  highlights: DistrictHighlight[];
  cardPosition: DistrictCardPosition;
  outerPoints: string;
  innerPoints: string;
}

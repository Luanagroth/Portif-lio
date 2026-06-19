import { existsSync } from "node:fs";
import { join } from "node:path";

export const PROFILE_STORY_IMAGE_CANDIDATES = [
  "/images/profile/luana-profile.jpg",
  "/images/profile/luana-profile.png",
] as const;
export const PROFILE_AVATAR_CANDIDATES = [
  "/images/profile/luana-avatar.webp",
  "/images/profile/luana-avatar.gif",
  "/images/profile/luana-avatar.png",
] as const;

function publicAssetExists(src: string) {
  const normalizedPath = src.startsWith("/") ? src.slice(1) : src;
  return existsSync(join(process.cwd(), "public", normalizedPath));
}

export function getExistingProfileStoryImage() {
  return (
    PROFILE_STORY_IMAGE_CANDIDATES.find((candidate) => publicAssetExists(candidate)) ??
    null
  );
}

export function getExistingProfileAvatar() {
  return (
    PROFILE_AVATAR_CANDIDATES.find((candidate) => publicAssetExists(candidate)) ?? null
  );
}

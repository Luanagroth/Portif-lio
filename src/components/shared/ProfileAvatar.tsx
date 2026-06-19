"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./ProfileAvatar.module.css";

type ProfileAvatarProps = {
  size?: "small" | "medium" | "large";
  animated?: boolean;
  className?: string;
  src?: string | null;
};

const SIZE_CLASS_NAMES: Record<NonNullable<ProfileAvatarProps["size"]>, string> = {
  small: styles.avatarSmall,
  medium: styles.avatarMedium,
  large: styles.avatarLarge,
};

export function ProfileAvatar({
  size = "medium",
  animated = false,
  className = "",
  src = null,
}: ProfileAvatarProps) {
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const resolvedSrc = src && src !== failedSrc ? src : null;
  const rootClassName = [styles.avatarRoot, SIZE_CLASS_NAMES[size], className]
    .filter(Boolean)
    .join(" ");

  if (!resolvedSrc) {
    return (
      <div className={rootClassName}>
        <span className={styles.avatarFallback}>LG</span>
      </div>
    );
  }

  if (animated) {
    return (
      <div className={rootClassName}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={resolvedSrc}
          alt="Avatar ilustrado de Luana Groth"
          className={styles.avatarImage}
          loading="eager"
          decoding="async"
          onError={() => setFailedSrc(resolvedSrc)}
        />
      </div>
    );
  }

  return (
    <div className={rootClassName}>
      <Image
        src={resolvedSrc}
        alt="Avatar ilustrado de Luana Groth"
        fill
        sizes={size === "small" ? "42px" : size === "medium" ? "56px" : "72px"}
        className={styles.avatarImage}
        onError={() => setFailedSrc(resolvedSrc)}
      />
    </div>
  );
}

import type { Platform, Link as PlatformLink } from "@prisma/client";

import Link from "next/link";

import { Icon } from "@/components/icon";

import styles from "./PlatformButton.module.scss";

export type PlatformButtonLink = Partial<PlatformLink> & {
  platform: Platform;
  onClick?: () => void;
};
type PlatformButtonProps = {
  link: PlatformButtonLink;
  iconSize?: number;
};

export const PlatformButton = ({
  link: {
    url,
    onClick = () => {},
    label,
    platform: {
      name,
      identifier,
      foregroundColor = "var(--white, #fff)",
      backgroundColor = "var(--primary)",
    },
  },
  iconSize = 16,
}: PlatformButtonProps) => {
  const classNames = {
    platform: styles.platform,
    icon: styles.icon,
    name: styles.name,
    arrow: styles.arrow,
  };

  return (
    <Link
      href={url || "#"}
      onClick={onClick}
      className={classNames.platform}
      style={{ backgroundColor }}
      target={"_blank"}
    >
      <Icon iconName={identifier} size={iconSize} fill={foregroundColor} />
      <span className={classNames.name} style={{ color: foregroundColor }}>
        {label || name}
      </span>
      <Icon iconName="arrow-right" size={iconSize} fill={foregroundColor} />
    </Link>
  );
};

export default PlatformButton;

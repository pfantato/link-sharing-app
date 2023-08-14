"use client";
import "client-only";

import Link from "next/link";
import { Icon } from "../icon";

import styles from "./NavLink.module.scss";
import clsx from "clsx";
import { useRouter } from "next/navigation";

type NavLinkProps = {
  icon: string;
  label: string;
  href: string;
  active?: boolean;
};

export const NavLink = ({
  icon,
  label,
  href,
  active = false,
}: NavLinkProps) => {
  const classNames = {
    link: clsx(styles.link, active && styles.active),
    icon: clsx(styles.icon, active && styles.active),
  };

  return (
    <Link href={href} className={classNames.link}>
      <span className={classNames.icon}>
        <Icon
          iconName={icon}
          size={20}
          fill={active ? "var(--primary)" : "var(--gray)"}
        />
      </span>
      {label}
    </Link>
  );
};

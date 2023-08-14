import clsx from "clsx";

import styles from "./PlatformButton.module.scss";

export const PlatformButtonSkeleton = () => {
  const classNames = {
    platform: clsx(styles.platform, "skeleton"),
    name: styles.name,
  };

  return (
    <span className={classNames.platform}>
      <span className={classNames.name} style={{ color: "transparent" }}>
        Loading...
      </span>
    </span>
  );
};

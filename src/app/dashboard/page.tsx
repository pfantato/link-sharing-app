import { LogoutButton } from "@/components/logoutButton/LogoutButton";

import styles from "./page.module.scss";

export default async function DashboardPage() {
  const classNames = {
    page: styles.page,
  };

  return (
    <div className={classNames.page}>
      Dashboard
      <LogoutButton />
    </div>
  );
}

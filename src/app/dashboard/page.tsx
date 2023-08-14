import styles from "./page.module.scss";
import { LogoutButton } from "@/components/logoutButton/LogoutButton";

export default function DashboardPage() {
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

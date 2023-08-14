import styles from "./page.module.scss";

export default function DashboardPage() {
  const classNames = {
    page: styles.page,
  };
  return <div className={classNames.page}>Dashboard</div>;
}

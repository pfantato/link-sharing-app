import "server-only";
import Link from "next/link";

import { Card, CreateAccountForm } from "@/components";

import styles from "./page.module.scss";

export default async function CreateAccountPage() {
  const classNames = {
    header: styles.header,
    title: styles.title,
    subtitle: styles.subtitle,
    login: styles.login,
  };

  return (
    <Card>
      <header className={classNames.header}>
        <h2 className={classNames.title}>Create account</h2>
        <p className={classNames.subtitle}>
          Let’s get you started sharing your links!
        </p>
      </header>

      <CreateAccountForm />

      <p className={classNames.login}>
        Already have an account? <Link href="/login">Login</Link>
      </p>
    </Card>
  );
}

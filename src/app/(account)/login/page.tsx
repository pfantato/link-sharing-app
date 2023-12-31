import "server-only";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

import { authOptions } from "@/config";

import { Card, LoginForm } from "@/components";

import styles from "./page.module.scss";

export default async function LoginPage() {
  const classNames = {
    header: styles.header,
    title: styles.title,
    subtitle: styles.subtitle,
    link: styles.link,
  };

  const session = await getServerSession(authOptions);
  if (session) {
    return redirect("/dashboard");
  }

  return (
    <Card>
      <header className={classNames.header}>
        <h2 className={classNames.title}>Login</h2>
        <p className={classNames.subtitle}>
          Add your details below to get back into the app
        </p>
      </header>

      <LoginForm />

      <p className={classNames.link}>
        Don’t have an account?{" "}
        <Link href="/create-account">Create account</Link>
      </p>
    </Card>
  );
}

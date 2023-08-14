import Link from "next/link";

export default async function HomePage() {
  return (
    <main>
      <h1>Link Sharing App</h1>
      <Link href="/create-account">Create an account</Link>
    </main>
  );
}

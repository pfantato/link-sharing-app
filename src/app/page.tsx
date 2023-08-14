import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Link Sharing App</h1>
      <Link href="/create-account">Create an account</Link>
    </main>
  );
}

import Link from "next/link";

export default function Home() {
  return (
    <nav>
      <Link href="/books">Books</Link>
      <Link href="/cabbages">Cabbage</Link>
      <Link href="/client">Client Side Stuff</Link>
    </nav>
  );
}

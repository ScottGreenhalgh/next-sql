import Counter from "@/components/Counter";
import Link from "next/link";

export default function ClientPage() {
  return (
    <div>
      <Link href="/">Home</Link>
      <Counter />
    </div>
  );
}

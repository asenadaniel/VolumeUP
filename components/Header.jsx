import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between">
        <Link href="/" className="font-bold text-xl">Volume Up</Link>
      </div>
    </header>
  );
}

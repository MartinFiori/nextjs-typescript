import Link from "next/link";

export default function Home() {
  console.log("prueba");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>el home!</h1>
      <Link href='/about'>
        Ir al about
      </Link>
    </main>
  );
}

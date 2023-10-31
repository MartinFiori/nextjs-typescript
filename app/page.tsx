import Link from "next/link";
import style from './styles.module.css'

export default function Home() {
  return (
    <main className={style.style}>
      <h1>Home page</h1>
      <p>
        <Link href='/users'>
          Users
        </Link>
      </p>
    </main>
  );
}

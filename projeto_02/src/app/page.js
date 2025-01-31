import style from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return(
      <header>
          <nav>
              <ul>
                  <li className={style.li}><Link href="/home">Home</Link></li>
                  <li className={style.li}><Link href="/sobre">Sobre</Link></li>
                  <li className={style.li}><Link href="/contato">Contato</Link></li>
              </ul>
          </nav>
      </header>
  )
}

export default function Home() {
  return (
    <main>
        <div>
        <h1>Projeto Front e Back</h1>
        <p className={style.paragrafo}>Primeira Página</p>
        </div>
    </main>
  );
}
        
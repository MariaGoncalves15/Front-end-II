import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return(
      <header>
          <nav className="navbar">
            <Link href="/">
                <Image src="/images/Logo.png" width={200} height={200} alt="Logo do sistema"/>
            </Link>  
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
  const nome = 'Maria Eduarda'
  return (
    <div>
        <h1>Projeto React e Next</h1>
    </div>
  );
}

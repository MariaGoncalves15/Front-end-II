import Link from "next/link"
import style from "./sobre.module.css";

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

export default function Sobre () {
    return (
        <main>
            <div>
            <h1>Sobre</h1>
            <p className={style.paragrafo} >Segunda Página</p>
            </div>
        </main>
    )
}


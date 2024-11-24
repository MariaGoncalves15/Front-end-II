import Link from "next/link"
import style from "./contato.module.css"

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

export default function Contato () {
    return (
        <main>
            <h1>Contato</h1>
            <p className={style.paragrafo} >Terceira Página</p>
        </main>
    )
}

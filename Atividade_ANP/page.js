import Link from "next/link"
import style from "./page.module.css";

export default function Menu() {
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
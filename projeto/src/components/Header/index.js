'use client';
import Link from "next/link"
import style from "./header.module.css";
import {useState} from 'react';

export default function Header() {
    const [showMenu, setShowMenu] = useState(true)
    return(
        <header>
            <button onClick={()=>setShowMenu(!showMenu)}>Clique</button>
            {
                showMenu &&
                <nav>
                    <ul>
                        <li className={style.li}><Link href="/">Home</Link></li>
                        <li className={style.li}><Link href="/sobre">Sobre</Link></li>
                        <li className={style.li}><Link href="/contato">Contato</Link></li>
                    </ul>
                </nav>
            }
        </header>
    )
}
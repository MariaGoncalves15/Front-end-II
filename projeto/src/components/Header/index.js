'use client';
import Link from "next/link"
import style from "./header.module.css";
import Image from "next/image";
import {useState} from 'react';

export default function Header() {
    return(
        <header className={style.Meuheader}>
            <div className={style.Pegatudo}>
            {
                <nav>
                    <ul>
                        <div>
                        <div className={style.logo}>
                            <Image className={style.imagem} src="/images/Logo.png" alt="Imagem style" width={75} height={75}/>
                        </div>
                            <li className={style.li}><Link href="/">Home</Link></li>
                            <li className={style.li}><Link href="/sobre">Sobre</Link></li>
                            <li className={style.li}><Link href="/contato">Contato</Link></li>
                        </div>
                    </ul>
                </nav>
            }
            </div>
        </header>
    )
}
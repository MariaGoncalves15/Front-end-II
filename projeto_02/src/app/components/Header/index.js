'use client';
import Link from "next/link";
import style from "./header.module.css";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
    const [showSubMenu, setShowSubMenu] = useState(false);
    return(
        <header className={style.DivMenu}>
            <div className={style.Pegatudo}>
            <div className={style.Divlogo}>
                    <Image className={style.imagem} src="/images/Med cure.png" alt="Imagem style" width={100} height={100}/>
            </div>
            <nav>
                
                    <ul className={style.ul}>
                        <li className={style.li}><Link className={style.link} href="/">Home</Link></li>
                        <li className={style.li}><Link className={style.link} href="/medicos">Médicos</Link></li>
                        <li className={style.li}><Link className={style.link} href="/pacientes">Pacientes</Link></li>
                        <li className={style.li}><Link className={style.link} href="/consultas">Consultas</Link></li>
                    </ul>   
            </nav>
            </div>
            
        </header>
    )
}


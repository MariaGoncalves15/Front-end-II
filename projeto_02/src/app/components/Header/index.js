'use client';
import Link from "next/link";
import style from "./header.module.css";
import Image from "next/image";

export default function Header() {
    return(
        <header className={style.DivMenu}>
            <div className={style.Pegatudo}>
            <div className={style.Divlogo}>
                    <Image className={style.imagem} src="/images/Med cure.png" alt="Imagem style" width={100} height={100}/>
            </div>
            <nav >
                <ul className={style.ul}>
                    <div>
                        <li className={style.li}><Link className={style.link} href="/">Home</Link></li>
                        <li className={style.li}><Link className={style.link} href="/medicos">Médicos</Link></li>
                        <li className={style.li}><Link className={style.link} href="/">Pacientes</Link></li>
                        <li className={style.li}><Link className={style.link} href="/">Consultas</Link></li>
                    </div>
                </ul>
            </nav>
            </div>
        </header>
    )
}


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
                        <li className={style.li}><button className={style.menu_button}
                        onClick={() => setShowSubMenu(!showSubMenu)}>Home</button>
                            {showSubMenu && (
                            <ul className={style.submenu}>
                            <li><Link className={style.link} href="/">Listar</Link></li>
                            <li><Link className={style.link} href="#">Adicionar</Link></li>
                            <li><Link className={style.link} href="#">Editar</Link></li>
                            <li><Link className={style.link} href="#">Excluir</Link></li>
                            </ul>
                        )}    
                        </li>
                        <li className={style.li}><button className={style.menu_button}
                        onClick={() => setShowSubMenu(!showSubMenu)}>Médicos</button>
                            {showSubMenu && (
                            <ul className={style.submenu}>
                            <li><Link className={style.link} href="/medicos">Listar</Link></li>
                            <li><Link className={style.link} href="#">Adicionar</Link></li>
                            <li><Link className={style.link} href="#">Editar</Link></li>
                            <li><Link className={style.link} href="#">Excluir</Link></li>
                            </ul>
                        )}    
                        </li>
                        
                        <li className={style.li}><button className={style.menu_button}
                        onClick={() => setShowSubMenu(!showSubMenu)}>Pacientes</button>
                            {showSubMenu && (
                            <ul className={style.submenu}>
                            <li><Link className={style.link} href="/pacientes">Listar</Link></li>
                            <li><Link className={style.link} href="#">Adicionar</Link></li>
                            <li><Link className={style.link} href="#">Editar</Link></li>
                            <li><Link className={style.link} href="#">Excluir</Link></li>
                            </ul>
                        )}    
                        </li>

                        <li className={style.li}><button className={style.menu_button}
                        onClick={() => setShowSubMenu(!showSubMenu)}>Consultas</button>
                            {showSubMenu && (
                            <ul className={style.submenu}>
                            <li><Link className={style.link} href="/consultas">Listar</Link></li>
                            <li><Link className={style.link} href="#">Adicionar</Link></li>
                            <li><Link className={style.link} href="#">Editar</Link></li>
                            <li><Link className={style.link} href="#">Excluir</Link></li>
                            </ul>
                        )}    
                        </li>
                    </ul>
            </nav>
            </div>
            
        </header>
    )
}


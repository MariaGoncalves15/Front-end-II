'use client';
import "../../app/globals.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import style from "./header.module.css";
import Image from "next/image";
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";


export default function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const tooggleMenu = () => {
        setShowMenu(!showMenu);
    }
    const definindo_telas = () => {
        if(window.innerWidth < 600 && showMenu){
            setShowMenu(false)
        }
    }
    
    useEffect(() => {
        window.addEventListener("resize", definindo_telas)
        return () => {
            window.removeEventListener("resize", definindo_telas)
        }
    }, [showMenu])
    return(
        <header className={style.Meuheader}>
            <div className={style.Pegatudo}>
            <div className={style.logo}>
                    <Image className={style.imagem} src="/images/Logo.png" alt="Imagem style" width={75} height={75}/>
            </div>

                <div className={style.container_menuMenor} onClick={tooggleMenu}>
                    {showMenu ? <IoMdClose color="black" /> : <FaBars color="black"/>} 
                </div>
            
            <nav className={`${style.nav} ${showMenu? style.nav_active : ''}` || window.innerWidth > 1500}>
                <ul className={style.ul}>
                    <div>
                        <li className={style.li}><Link className={style.link} href="/">Home</Link></li>
                        <li className={style.li}><Link className={style.link} href="/sobre">Sobre</Link></li>
                        <li className={style.li}><Link className={style.link} href="/contato">Contato</Link></li>
                        <li className={style.li}><Link className={style.link} href="/listas">Listas</Link></li>
                    </div>
                </ul>
            </nav>

            </div>
        </header>
    )
}
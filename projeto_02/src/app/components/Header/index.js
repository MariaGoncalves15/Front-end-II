'use client';
import Link from "next/link";
import style from "./header.module.css";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
    const [activeSubmenu, setActiveSubmenu] = useState(null);

    const menuItems = [
        { title: "Home", link: "/", options: ["Listar", "Adicionar", "Editar", "Excluir"] },
        { title: "Médicos", link: "/medicos", options: ["Listar", "Adicionar", "Editar", "Excluir"] },
        { title: "Pacientes", link: "/pacientes", options: ["Listar", "Adicionar", "Editar", "Excluir"] },
        { title: "Consultas", link: "/consultas", options: ["Listar", "Adicionar", "Editar", "Excluir"] },
    ];

    return (
        <header className={style.DivMenu}>
            <div className={style.Pegatudo}>
                <div className={style.Divlogo}>
                    <Image className={style.imagem} src="/images/Med cure.png" alt="Imagem style" width={100} height={100} />
                </div>
                <nav>
                    <ul className={style.ul}>
                        {menuItems.map((item, index) => (
                            <li 
                                key={index} 
                                className={style.li}
                                onMouseEnter={() => setActiveSubmenu(index)}
                                onMouseLeave={() => setActiveSubmenu(null)}
                            >
                                <div className={style.menu_button}>
                                    {item.title}
                                    {activeSubmenu === index && (
                                        <ul className={style.submenu}>
                                            {item.options.map((option, subIndex) => (
                                                <li key={subIndex}>
                                                    <Link className={style.link} href={item.link}>
                                                        {option}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}

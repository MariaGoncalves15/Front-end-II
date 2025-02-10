'use client'
import { useEffect } from 'react';
import Link from "next/link";
import style from './medicos.module.css';

export default function Médicos() {
    return (
      <main>
        <div className={style.DivMenu}>
        <h1 className={style.h1_titulo}>Lista de Médicos</h1>
        <div className={style.DivTable}>
            <table>
                <td></td>
            </table>
        </div>
        </div>
      </main>
    );
  }

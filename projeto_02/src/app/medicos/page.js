'use client'
import { useEffect } from 'react';
import Link from "next/link";
import style from './medicos.module.css';
// import data from 

export default function Médicos() {
    return (
      <main>
        <div className={style.DivMenu}>
        <h1 className={style.h1_titulo}>Lista de Médicos</h1>
        
            <div className={style.TodaTable}>
              <table className={style.Tabela}>
                <thead>
                  <tr className={style.tr}>
                    <th className={style.th}>ID</th>
                    <th className={style.th}>Nome</th>
                    <th className={style.th}>Telefone</th>
                    <th className={style.th}>Email</th>
                    <th className={style.th}>Especialidade</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => (
                    <tr key={item.id}>
                      <td className={style.td}>{item.id}</td>
                      <td className={style.td}>{item.nome}</td>
                      <td className={style.td}>{item.telefone}</td>
                      <td className={style.td}>{item.email}</td>
                      <td className={style.td}>{item.especialidade}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
        </div>
      </main>
    );
  }

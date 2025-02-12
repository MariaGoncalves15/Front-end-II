'use client'
import { useEffect } from 'react';
import Link from "next/link";
import style from './medicos.module.css';

// const [BuscarMedicos,]

// export default function BuscarMedicos() {
    
// };

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
                  {/* {BuscarMedicos.map((medico) => (
                    <tr key={medico.id}>
                      <td className={style.td}>{medico.id}</td>
                      <td className={style.td}>{medico.nome}</td>
                      <td className={style.td}>{medico.telefone}</td>
                      <td className={style.td}>{medico.email}</td>
                      <td className={style.td}>{medico.especialidade}</td>
                    </tr>
                  ))} */}
                </tbody>
              </table>
            </div>
            
        </div>
      </main>
    );
  }

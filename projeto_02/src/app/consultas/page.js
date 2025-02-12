'use client'
import { useEffect } from 'react';
import Link from "next/link";
import style from './consultas.module.css';



export default function Consultas() {
    return (
      <main>
        <div className={style.DivMenu}>
        <h1 className={style.h1_titulo}>Lista de Consultas</h1>
        
            <div className={style.DivTable}>
              <table className={style.TodaTabela}>
                <thead>
                  <tr className={style.tr}>
                    <th className={style.th}>ID</th>
                    <th className={style.th}>Médico</th>
                    <th className={style.th}>Especialidade</th>
                    <th className={style.th}>Paciente</th>
                    <th className={style.th}>Tipo</th>
                  </tr>
                </thead>
                <tbody>
                  {BuscarConsultas.map((consulta) => (
                    <tr key={consulta.id}>
                      <td>{consulta.id}</td>
                      <td>{consulta.medico}</td>
                      <td>{consulta.especialidade}</td>
                      <td>{consulta.paciente}</td>
                      <td>{consulta.tipo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
        </div>
      </main>
    );
  }


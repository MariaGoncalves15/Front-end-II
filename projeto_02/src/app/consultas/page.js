'use client'
import { useEffect } from 'react';
import Link from "next/link";
import style from './consultas.module.css';

export default function Médicos() {
    return (
      <main>
        <div className={style.DivMenu}>
        <h1 className={style.h1_titulo}>Lista de Médicos</h1>
        
            <div className={style.DivTable}>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Médico</th>
                    <th>Especialidade</th>
                    <th>Paciente</th>
                    <th>Tipo</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.médico}</td>
                      <td>{item.especialidade}</td>
                      <td>{item.paciente}</td>
                      <td>{item.tipo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
        </div>
      </main>
    );
  }


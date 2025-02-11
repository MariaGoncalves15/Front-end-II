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
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Telefone</th>
                    <th>Email</th>
                    <th>Especialidade</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.nome}</td>
                      <td>{item.telefone}</td>
                      <td>{item.email}</td>
                      <td>{item.especialidade}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
        </div>
      </main>
    );
  }

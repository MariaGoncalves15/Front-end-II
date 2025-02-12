'use client'
import { useEffect } from 'react';
import Link from "next/link";
import style from './pacientes.module.css';

// const [BuscarPacientes, setPacientes, pushPaciente]

const BuscarPacientes = async () => {
  try {
    const response = await fetch('https://api-clinica-2a.onrender.com/medicos');

    if (!response.ok) {
      throw new Error (`Erro ao buscar dados da API: ${response.statusText}`);
    }

    const pushPaciente = await response.json();

    setPacientes(pushPaciente);

    console.log(pushPaciente);
  } catch (error) {
    console.error('Ocorreu um erro ao buscar os dados da API:', error.message);
  }
};


export default function Pacientes() {
    return (
      <main>
        <div className={style.DivMenu}>
        <h1 className={style.h1_titulo}>Lista de Pacientes</h1>
        
            <div className={style.DivTable}>
              <table className={style.TodaTabela}>
                <thead>
                  <tr className={style.tr}>
                    <th className={style.th}>ID</th>
                    <th className={style.th}>Nome</th>
                    <th className={style.th}>Telefone</th>
                    <th className={style.th}>Email</th>
                    <th className={style.th}>CPF</th>
                  </tr>
                </thead>
                <tbody>
                  {pushPaciente.map((paciente) => (
                    <tr key={paciente.id}>
                      <td>{paciente.id}</td>
                      <td>{paciente.nome}</td>
                      <td>{paciente.telefone}</td>
                      <td>{paciente.email}</td>
                      <td>{paciente.cpf}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
        </div>
      </main>
    );
  }

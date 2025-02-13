'use client'
import style from './pacientes.module.css';
import { useEffect, useState } from "react";

export default function Pacientes() {
  
  const [paciente, setPacientes] = useState([])
  const [busca, setBusca] = useState('');
  const pacientes_filtrados = paciente.filter(pacientes => (pacientes.nome.toLowerCase().startsWith(busca.toLowerCase())));
  
  const BuscarPacientes = async() => {
    try {
      const response = await fetch ('https://api-clinica-2a.onrender.com/pacientes');
      if (!response.ok) {
        throw new error (`Erro ao buscar dados da API: ${response.statusText}`);
      }
      const data = await response.json();
      setPacientes(data);
      console.log(data);
    } catch (error) {
      console,log('Ocorreu um erro ao buscar os dados da API:', error.message)
    }


  }
  useEffect(() => {
    BuscarPacientes();
  }, [])


    return (
      <main>
        <div className={style.DivMenu}>
        <h1 className={style.h1_titulo}>Lista de Pacientes</h1>
        
            <div className={style.TodaTable}>
              <table className={style.Tabela}>
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
                  {pacientes_filtrados.map((paciente) => (
                    <tr key={paciente.id}>
                      <td className={style.td}>{paciente.id}</td>
                      <td className={style.td}>{paciente.nome}</td>
                      <td className={style.td}>{paciente.telefone}</td>
                      <td className={style.td}>{paciente.email}</td>
                      <td className={style.td}>{paciente.cpf}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
        </div>
      </main>
    );
  }
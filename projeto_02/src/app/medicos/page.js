'use client'
import style from './medicos.module.css';
import { useEffect, useState } from "react";


export default function Médicos() {
  
  const [medico, setMedicos] = useState([])
  const [busca, setBusca] = useState('');
  const medicos_filtrados = medico.filter(medicos => (medicos.nome.toLowerCase().startsWith(busca.toLowerCase())));
  
  const BuscarMedicos = async() => {
    try {
      const response = await fetch ('https://api-clinica-2a.onrender.com/medicos');
      if (!response.ok) {
        throw new error (`Erro ao buscar dados da API: ${response.statusText}`);
      }
      const data = await response.json();
      setMedicos(data);
      console.log(data);
    } catch (error) {
      console,log('Ocorreu um erro ao buscar os dados da API:', error.message)
    }


  }
  useEffect(() => {
    BuscarMedicos();
  }, [])

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
                  {medicos_filtrados.map((medico) => (
                    <tr key={medico.id}>
                      <td className={style.td}>{medico.id}</td>
                      <td className={style.td}>{medico.nome}</td>
                      <td className={style.td}>{medico.telefone}</td>
                      <td className={style.td}>{medico.email}</td>
                      <td className={style.td}>{medico.especialidade}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
        </div>
      </main>
    );
  }

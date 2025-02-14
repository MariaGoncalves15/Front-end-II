'use client'
import style from './consultas.module.css';
import { useEffect, useState } from "react";

export default function Consultas() {
  
  const [consulta, setConsultas] = useState([])
  const [getMedico, setBuscaMedico] = useState('');
  const [getPaciente, setBuscaPaciente] = useState('');
  const consultas_filtrados = consulta.filter(consultas => (consultas.nome.toLowerCase().startsWith(busca.toLowerCase())));
  
  const BuscarConsultas = async() => {
    try {
      const response = await fetch ('https://api-clinica-2a.onrender.com/consultas');
      if (!response.ok) {
        throw new error (`Erro ao buscar dados da API: ${response.statusText}`);
      }
      const data = await response.json();
      setConsultas(data);
      console.log(data);
    } catch (error) {
      console,log('Ocorreu um erro ao buscar os dados da API:', error.message)
    }


  }
  useEffect(() => {
    BuscarConsultas();
  }, [])

    return (
      <main>
        <div className={style.DivMenu}>
        <h1 className={style.h1_titulo}>Lista de Consultas</h1>

        <div className={style.inputTabela}>
          <button>
            <input type="text" 
              placeholder='Buscar por nome do médico '
              value={getMedico}
              onChange={(ev) => setBuscaMedico (ev.target.value)}/>
          </button>
        </div>

        <div className={style.inputTabela}>
          <button>
            <input type="text" 
              placeholder='Buscar por nome do paciente '
              value={getPaciente}
              onChange={(ev) => setBuscaPaciente (ev.target.value)}/>
          </button>
        </div>
        
            <div className={style.TodaTable}>
              <table className={style.Tabela}>
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
                  {consultas_filtrados.map((consulta) => (
                    <tr key={consulta.id}>
                      <td className={style.td}>{consulta.id}</td>
                      <td className={style.td}>{consulta.médico}</td>
                      <td className={style.td}>{consulta.especialidade}</td>
                      <td className={style.td}>{consulta.paciente}</td>
                      <td className={style.td}>{consulta.tipo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
        </div>
      </main>
    );
  }
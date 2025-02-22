'use client'
import style from './consultas.module.css';
import { useEffect, useState, useRef } from "react";

export default function Consultas() {
  
  const [consulta, setConsultas] = useState([]);
  const [filteredMedicos, setFilteredMedicos] = useState([]);
  const [FilteredPacientes, setFilteredPacientes] = useState([]);
  // const [search, setSearch] = useState("");
  const [showList, setShowList] = useState(false);
  const containerRef = useRef(null);
  const [getMedico, setBuscaMedico] = useState('');
  const [getPaciente, setBuscaPaciente] = useState('');
  //const medicos_filtrados_consultas = consulta.filter(medicos => medicos.medico.toLowerCase().startsWith(buscaMedico.toLowerCase()));
  //const pacientes_filtrados_consultas = consulta.filter(pacientes =>(pacientes.paciente.toLowerCase().startsWith(buscaPaciente.toLowerCase())));
  const consultas_filtrados = consulta.filter(consultas => (consultas.medico.toLowerCase().startsWith(getMedico.toLowerCase()) && consultas.paciente.toLocaleLowerCase().startsWith(getPaciente.toLocaleLowerCase())));
  
  
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

        <div className={style.inputTabela} ref={containerRef}>
            <div className={style.meu_button}>
            <button className={style.meu_button}
            onClick={() => setShowList(true)}>Buscar Médicos</button> 
            {showList && (
              <div>
                <input className={style.meu_input}
                type="text" 
                placeholder="Digite o nome do médico"
                value={getMedico}
                onChange={(ev) => setBuscaMedico(ev.target.value)}
                />
                
                <ul className={style.style_ul}>
                  {filteredMedicos.map((medico) => (
                    <li key={medico.id}>{medico.nome}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className={style.inputTabela} ref={containerRef}>
            <div className={style.meu_button}>
            <button className={style.meu_button}
            onClick={() => setShowList(true)}>Buscar Pacientes</button> 
            {showList && (
              <div>
                <input className={style.meu_input}
                type="text" 
                placeholder="Digite o nome do paciente"
                value={getPaciente}
                onChange={(ev) => setBuscaPaciente(ev.target.value)}
                />
                
                <ul className={style.style_ul}>
                  {FilteredPacientes.map((paciente) => (
                    <li key={paciente.id}>{paciente.nome}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
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
                {consultas_filtrados.length > 0 ? (consultas_filtrados.map((consulta) => (
                    <tr key={consulta.id}>
                      <td className={style.td}>{consulta.id}</td>
                      <td className={style.td}>{consulta.médico}</td>
                      <td className={style.td}>{consulta.especialidade}</td>
                      <td className={style.td}>{consulta.paciente}</td>
                      <td className={style.td}>{consulta.tipo}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                      
                  </tr>
              )}

                </tbody>
              </table>
            </div>
            
        </div>
      </main>
    );
  }
'use client'
import style from './consultas.module.css';
import { useEffect, useState, useRef } from "react";

export default function Consultas() {
  
  const [consulta, setConsultas] = useState([]);
  const [searchMedico, setSearchMedico] = useState("");
  const [searchPaciente, setSearchPaciente] = useState("");
  const [showMedicos, setShowMedicos] = useState(false);
  const [showPacientes, setShowPacientes] = useState(false);

  // Referências para os containers dos médicos e pacientes
  const medicosRef = useRef(null);
  const pacientesRef = useRef(null);

  useEffect(() => {
    // Função que fecha os menus quando clicar fora
    const handleClickOutside = (event) => {
      if (
        medicosRef.current && !medicosRef.current.contains(event.target) &&
        pacientesRef.current && !pacientesRef.current.contains(event.target)
      ) {
        setShowMedicos(false);
        setShowPacientes(false);
      }
    };

    // Adiciona o evento de clique no documento
    document.addEventListener("mousedown", handleClickOutside);

    // Remove o evento ao desmontar o componente
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Buscar dados da API
  const BuscarConsultas = async () => {
    try {
      const response = await fetch('https://api-clinica-2a.onrender.com/consultas');
      if (!response.ok) {
        throw new Error(`Erro ao buscar dados da API: ${response.statusText}`);
      }
      const data = await response.json();
      setConsultas(data);
    } catch (error) {
      console.log('Ocorreu um erro ao buscar os dados da API:', error.message);
    }
  };

  useEffect(() => {
    BuscarConsultas();
  }, []);

  // Filtrar médicos
  const medicosUnicos = [...new Set(consulta.map((c) => c.medico))];
  const filteredMedicos = medicosUnicos.filter((medico) =>
    medico.toLowerCase().includes(searchMedico.toLowerCase())
  );

  // Filtrar pacientes
  const pacientesUnicos = [...new Set(consulta.map((c) => c.paciente))];
  const filteredPacientes = pacientesUnicos.filter((paciente) =>
    paciente.toLowerCase().includes(searchPaciente.toLowerCase())
  );

  return (
    <main>
      <div className={style.DivMenu}>
        <h1 className={style.h1_titulo}>Lista de Consultas</h1>

        {/* Buscar Médicos */}
        <div className={style.inputTabela} ref={medicosRef}>
          <div className={style.meu_button}>
            <button className={style.meu_button} onClick={() => setShowMedicos(!showMedicos)}>
              Buscar Médicos
            </button>
            {showMedicos && (
              <div>
                <input
                  className={style.meu_input}
                  type="text"
                  placeholder="Digite o nome do médico"
                  value={searchMedico}
                  onChange={(e) => setSearchMedico(e.target.value)}
                />
                {searchMedico.length > 0 && filteredMedicos.length > 0 && (
                  <ul className={style.style_ul}>
                    {filteredMedicos.map((medico, index) => (
                      <li key={index}>{medico}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Buscar Pacientes */}
        <div className={style.inputTabela} ref={pacientesRef}>
          <div className={style.meu_button02}>
            <button className={style.meu_button02} onClick={() => setShowPacientes(!showPacientes)}>
              Buscar Pacientes
            </button>
            {showPacientes && (
              <div>
                <input
                  className={style.meu_input}
                  type="text"
                  placeholder="Digite o nome do paciente"
                  value={searchPaciente}
                  onChange={(e) => setSearchPaciente(e.target.value)}
                />
                {searchPaciente.length > 0 && filteredPacientes.length > 0 && (
                  <ul className={style.style_ul}>
                    {filteredPacientes.map((paciente, index) => (
                      <li key={index}>{paciente}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Tabela de Consultas */}
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
              {consulta.map((consulta) => (
                <tr key={consulta.id}>
                  <td className={style.td}>{consulta.id}</td>
                  <td className={style.td}>{consulta.medico}</td>
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

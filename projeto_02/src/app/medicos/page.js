'use client'
import style from './medicos.module.css';
import { useEffect, useState, useRef } from "react";


export default function Médicos() {
  
  const [medico, setMedicos] = useState([])
  const [filteredMedicos, setFilteredMedicos] = useState([]);
  const [search, setSearch] = useState("");
  const [showList, setShowList] = useState(false);
  const containerRef = useRef(null);
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
      console.log('Ocorreu um erro ao buscar os dados da API:', error.message)
    }


  }
  useEffect(() => {
    if (showList) {
      fetch("https://api-clinica-2a.onrender.com/medicos")
        .then((response) => response.json())
        .then((data) => setMedicos(data))
        .catch((error) => console.error("Erro ao buscar médicos:", error));
    }
  }, [showList]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setShowList(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (search) {
      const filtered = medico.filter((medico) =>
        medico.nome.toLowerCase().startsWith(search.toLowerCase())
      );
      setFilteredMedicos(filtered);
    } else {
      setFilteredMedicos([]);
    }
  }, [search, medico]);


  useEffect(() => {
    BuscarMedicos();
  })

    return (
      <main>
        <div className={style.DivMenu}>
        <h1 className={style.h1_titulo}>Lista de Médicos</h1>

        <div className={style.inputTabela} ref={containerRef}>
            <div className={style.meu_button}>
            <button className={style.meu_button}
            onClick={() => setShowList(true)}>Buscar Médicos</button> 
            {showList && (
              <div>
                <input className={style.meu_input}
                type="text" 
                placeholder="Digite o nome do médico"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
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

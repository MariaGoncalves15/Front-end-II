'use client'
import { useState } from "react";
import style from './module.css';
/** Meu exemplo*/
const [nome, setNome] = useState(["Maria, Ana, Beatriz, Mariana"]);
const [busca, setBusca] = useState("");

const nomeFiltrado = nome.filter((nome) => 
    nome.toLocaleLowerCase().includes(busca.toLocaleLowerCase()));

    return(
        <div>
            <ul>
                {nomeFiltrado.map((nome) => (
                    // <li key={nome.id}>nome</li>
                    // <li>Ana</li>
                    // <li>Mariana</li>
                    // <li>Beatriz</li>
                ))};
            </ul>
        </div>
    )

//Exemplo do chat - Fetch(requisição)//
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Erro ao buscar API:", err));
  }, []);

  return (
    <div>
      <h1>Lista de Posts</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;





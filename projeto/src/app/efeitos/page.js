'use client';
import { useEffect, useState } from "react";

export default function Efeitos() {
    // const [cont1, setCont1] = useState(0);
    // const [cont2, setCont2] = useState(0);
    // useEffect(()=> {
    //     console.log('Renderizou')
    // })
    const [ufs, setUfs] = useState([]);
    const [ufSeleted, setufSeleted] = useState('');

    const getUfs = async () => {
        try{
            const response = await fetch ('https://servicodados.ibge.gov.br/api/docs/localidades#api-UFs-estadosGet');
            if(!response.ok) {
                throw new Error('Erro ao buscar dados: ' +response.statusText);
            }
            const data = await response.json();
            setUfs(data);
            console.log(data);
        }catch(error){
            console.log('Ocorreu algum erro: ' + error)
        }
        
    }

    useEffect(() => {
        getUfs();
    },[])


    return (
        <div>
            <h1>Efeitos</h1>
        {
            <select onChange={(ev)=> setufSeleted(ev.target.value)}>
                <option value="" >Selecione o estado</option>
                {ufs.map((uf) => (
                    <option value={uf.id} key={uf.id}>
                        {uf.nome}
                    </option>
                ))}
            </select>
        }
            {/* <button onClick={() => (setCont1(cont1+1))}>Adicionar</button>
            <p>Renderizações cont 1: {cont1}</p>
            <button onClick={() => (setCont2(cont2+1))}>Adicionar</button>
            <p>Renderizações cont 2: {cont2}</p> */}
        </div>
    )
}


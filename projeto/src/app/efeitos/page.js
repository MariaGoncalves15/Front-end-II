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
    const [cities, setCities] = useState([]);
    const [citySelected, setCitySelected] = useState('');

    const getUfs = async () => {
        try{
            const response = await fetch ('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
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

    const getCities = async () => {
        try{
            const response = await fetch (`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufSeleted}/municipios?orderBy=nome`);
            if(!response.ok) {
                throw new Error('Erro ao buscar dados: ' +response.statusText);
            }
            const data = await response.json();
            setCities(data);
            console.log(data);
        }catch(error){
            console.log('Ocorreu algum erro: ' + error)
        }
    }

    useEffect(() => {
        getUfs();
    },[])

    useEffect(() => {
        getCities();
    },[ufSeleted])
    return (
        <div>
            <h1>Efeitos</h1>
        {
            <select onChange={(ev)=> {setufSeleted(ev.target.value), setCitySelected('')}}>
                <option value="" >Selecione o estado</option>
                {ufs.map((uf) => (
                    <option 
                    value={uf.id} 
                    key={uf.id}>
                    {`${uf.nome} - ${uf.sigla}`}
                    </option>
                ))}
            </select>
        }

        {
            <select onChange={(ev)=> setCitySelected(ev.target.value)}>
                <option value="" >Selecione a cidade</option>
                {cities.map((city) => (
                    <option 
                    value={city.nome} 
                    key={city.id}>
                    {`${city.nome}`}
                    </option>
                ))}
            </select>
        }
        {citySelected?<p>{citySelected}</p>:<p>Aguardando!</p>}

            {/* <button onClick={() => (setCont1(cont1+1))}>Adicionar</button>
            <p>Renderizações cont 1: {cont1}</p>
            <button onClick={() => (setCont2(cont2+1))}>Adicionar</button>
            <p>Renderizações cont 2: {cont2}</p> */}
        </div>
    )
}


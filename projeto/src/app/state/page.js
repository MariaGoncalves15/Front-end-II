'use client'
import {useState} from "react";

export default function State(){
    const [conteudo, setConteudo] = useState('Bom diaa!')
    const [name, setName] = useState('');

    const[showDiv, setShowDiv] = useState(true)

    const controlaParagrafo = () => {
        setConteudo('Bom diaa!');
        console.log('conteudo: '+conteudo);
    }
    const controlarInput = (evento) => {
        console.log(evento.target.value)
        setName(evento.target.value)
    }
    return(
        <div>
            {/*<p>{conteudo}</p>
            <button onClick={controlaParagrafo}>mudar</button>*/}
            <button onClick={() => { setShowDiv(!showDiv) }}>{showDiv ? 'Esconder': 'Mostrar'}</button>
            { showDiv && (
                <div>
                <p>Nome: {name}</p>
                <input type="text" onChange={controlarInput}/>
            </div>
            )
            }
        </div>
    )
}
export default function Listas() {
    const raças = ['Vira-Lata', 'Pit-bull', 'Pug', 'Golden', 'Pastor-Alemão', 'Labrador', 'Shitzu']

    const raçasObjetos = [
        {
            id:0,
            raça:'Vira-Lata',
        },

        {
            id:1,
            raça:'Pit-bull',
        },

        {
            id:2,
            raça:'Pug',
        },

        {
            id:3,
            raça:'Golden',
        },

        {
            id:4,
            raça:'Pastor-Alemão',
        },

        {
            id:5,
            raça:'Labrador',
        },

        {
            id:6,
            raça:'Shitzu',
        },
        
    ]
    return (
        <div>
            <h1>Listas</h1>
            <p>{raçasObjetos[0].raça}</p>
            <h2>Lista Comun</h2>
            <ul>
                {raças.map((raça, i )=> (
                   <li key={i}>{i+1} - {raça}</li> 
                ))}
            </ul>

            <h3>Lista de Objetos</h3>
            <ul>
                {raçasObjetos.map((raçasObjetos) => (
                    <li key={raçasObjetos.id}>{raçasObjetos.id} {raçasObjetos.raça}</li>
                ))}
            </ul>


            {/* exemplo do professor */}
                <div>
                    <h2>Lista De Objetos</h2>
                    {raçasObjetos.map((raçasObjetos)=>(
                        <div key={raçasObjetos.id}>
                            <h3>{raçasObjetos.id}</h3>
                            <p>{raçasObjetos.raça}</p>
                        </div>
                    ))}
                </div>
        </div>
    )
}


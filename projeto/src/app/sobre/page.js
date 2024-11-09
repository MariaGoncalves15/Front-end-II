import style from "./sobre.module.css"

export default function Sobre () {
    return (
        <main>
            <h1>Sobre</h1>
            <p className={style.paragrafo} >Segunda Página</p>
            <p id={style.paragrafoUnico}>Segundo páragrafo especial</p>
        </main>
    )
}


import style from "./page.module.css";

export default function Home() {
  return (
    <main>
        <div className={style.DivMenu}>
        <h1 className={style.h1}>Projeto Front e Back</h1>
        <p className={style.paragrafo}>Primeira Página</p>
        </div>
    </main>
  );
}


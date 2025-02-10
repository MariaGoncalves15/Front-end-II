import style from "./page.module.css";

export default function Home() {
  return (
    <main>
      <div className={style.DivPegaTudo}>
      <div className={style.DivMenu}>
        <h1 className={style.h1}>Bem-vindo à Clínica Vida Saudável</h1>
        <p className={style.paragrafo}>
          Nossa equipe de profissionais altamente qualificados <br />
          está pronta para cuidar da sua saúde com dedicação e excelência. <br />
          Oferecemos um atendimento humanizado, 
          tecnologia de ponta e uma ampla gama de especialidades <br />
          médicas para garantir seu bem-estar.</p>
        </div>
      </div>
    </main>
  );
}


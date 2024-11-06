/*import Image from "next/image";*/
import styles from "./page.module.css";

export default function Home() {
  const nome = 'Maria Eduarda'
  return (
    <div>
        <h1>Minha Página</h1>
        <p>páragrafo da aplicação</p>
        <p>Autor {nome}</p>
      </div>
  );
}

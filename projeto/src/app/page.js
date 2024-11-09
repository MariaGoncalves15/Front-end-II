/*import Image from "next/image";*/
import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  const nome = 'Maria Eduarda'
  return (
    <div>
        <h1>Minha Página</h1>
        <p>páragrafo da aplicação</p>
        <p>Autor {nome}</p>
      <Image className={styles.imagem} src="/images/gbhjkpo.jpg" alt="Imagem style" width={600} height={400}/>
      </div>
  );
}

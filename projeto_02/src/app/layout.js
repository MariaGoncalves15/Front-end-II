/*import localFont from "next/font/local";*/
import "./globals.css";
import Header from "@/app/components/Header"

export const metadata = {
  title: "Clínica Médica",
  description: "Minha Apliação de Front end II",
  charset: 'UTF-8',
  author: 'Maria Eduarda Gonçalves Lima',
  keywords:'HTML, CSS, Javascript, React, Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
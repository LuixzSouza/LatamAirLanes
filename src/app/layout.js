import { Alumni_Sans, Fira_Sans, Inter, Mohave, Oswald, Teko } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

//Fontes do Google
const inter = Inter({ 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Tamanho da fonte
  style: ["normal", "italic"], // Estilo
  variable: ["--font-firasans"], //Definir o nome de variavel
  subsets: ["latin"], // Padrão
  display: "swap",  // Padrão
});

const oswald = Oswald({ 
  weight: ["200", "300", "400", "500", "600", "700"], // Tamanho da fonte
  style: ["normal"], // Estilo
  variable: ["--font-oswald"], //Definir o nome de variavel
  subsets: ["latin"], // Padrão
  display: "swap",  // Padrão
});

const teko = Teko({ 
  weight: ["300", "400", "500", "600", "700"], // Tamanho da fonte
  style: ["normal"], // Estilo
  variable: ["--font-teko"], //Definir o nome de variavel
  subsets: ["latin"], // Padrão
  display: "swap",  // Padrão
});

const mohave = Mohave({ 
  weight: ["300", "400", "500", "600", "700"], // Tamanho da fonte
  style: ["normal"], // Estilo
  variable: ["--font-mohave"], //Definir o nome de variavel
  subsets: ["latin"], // Padrão
  display: "swap",  // Padrão
});

const alumnisans = Alumni_Sans({ 
  weight: ["100", "200","300", "400", "500", "600", "700", "800", "900"], // Tamanho da fonte
  style: ["normal"], // Estilo
  variable: ["--font-alumnisans"], //Definir o nome de variavel
  subsets: ["latin"], // Padrão
  display: "swap",  // Padrão
});

// tentando corrigir

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${oswald.className} ${teko.className} ${mohave.className} ${alumnisans.className} `}>{children}</body>
    </html>
  );
}

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import { Leaf } from "lucide-react"; // Importa el ícono de Lucide
import Head from "next/head"; // Importa el componente Head
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import Providers from "./providers";

export const metadata = {
  title: "AGCCURATE",
  description: "Tecnología que cultiva el futuro",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-green-950 text-white">
        <Providers>
          <Toaster position="top-center" />

          {/* Componente Head para incluir el ícono en el título */}
          <Head>
            <title>
              <Leaf className="inline mr-2 text-green-400" /> AGCCURATE
            </title>
            <meta
              name="description"
              content="Tecnología que cultiva el futuro"
            />
          </Head>

          {/* Estructura principal con header y footer fijos */}
          <div className="flex flex-col h-screen overflow-hidden">
            <Header />

            {/* Solo esta parte hace scroll */}
            <main className="flex-1 overflow-y-auto">
              <PageTransition>{children}</PageTransition>
            </main>

            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}

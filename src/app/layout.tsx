import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ReactNode } from "react";
import "./globals.css";
import Providers from "./providers";

export const metadata = {
  title: "AGCCURATE",
  description: "Tecnología que cultiva el futuro",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="flex flex-col min-h-screen">
        <Providers>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

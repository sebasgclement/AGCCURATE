import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
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
      <body className="flex flex-col min-h-screen">
        <Providers>
          <Toaster position="top-center" />
          <PageTransition>
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </PageTransition>
        </Providers>
      </body>
    </html>
  );
}

import './globals.css';
import { ReactNode } from 'react';
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import Providers from './providers';

export const metadata = {
  title: 'AGCCURATE',
  description: 'Tecnología que cultiva el futuro',
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="es">
      <body className="flex flex-col min-h-screen">
        <Providers>
          <header className="bg-black text-white p-4 flex justify-between items-center">
            <div className="text-2xl font-bold">AGCCURATE 🌱</div>

            <nav className="space-x-6 flex items-center">
              <Link href="/" className="hover:underline">Inicio</Link>

              <div className="relative group">
                <span className="cursor-pointer hover:underline">Productos y Servicios</span>
                <div className="absolute hidden group-hover:block bg-white text-black mt-2 p-2 rounded shadow z-10">
                  <Link className="block px-4 py-2 hover:bg-gray-100" href="/hogar">Para el Hogar</Link>
                  <Link className="block px-4 py-2 hover:bg-gray-100" href="/hogar12">Para el Hogar 1.2</Link>
                  <Link className="block px-4 py-2 hover:bg-gray-100" href="/agro">Para el Agro</Link>
                </div>
              </div>

              <Link href="/contacto" className="hover:underline">Contacto</Link>
            </nav>

            <div className="flex items-center space-x-4">
              {session?.user ? (
                <>
                  <span className="text-sm">Hola, {session.user.name || session.user.email}</span>
                  <form action="/api/auth/signout" method="post">
                    <button className="text-sm text-red-200 hover:underline">Cerrar sesión</button>
                  </form>
                </>
              ) : (
                <Link href="/login" className="text-sm hover:underline">Iniciar sesión</Link>
              )}
            </div>
          </header>

          <main className="flex-grow">{children}</main>

          <footer className="bg-black text-white p-4 text-center">
            © {new Date().getFullYear()} AGCCURATE - Todos los derechos reservados
          </footer>
        </Providers>
      </body>
    </html>
  );
}

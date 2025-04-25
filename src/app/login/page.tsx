// src/app/login/page.tsx
'use client';

import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FcGoogle } from 'react-icons/fc';
import { useState } from 'react';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (res?.ok) router.push('/');
    else alert('Error al iniciar sesión');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-900 text-white px-4">
      <div className="bg-white/10 border border-white/30 rounded-2xl p-8 w-full max-w-md shadow-lg backdrop-blur-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-white">Iniciar Sesión</h1>

        <button
          onClick={() => signIn('google')}
          className="flex items-center justify-center gap-2 w-full bg-white text-black font-semibold py-2 rounded shadow hover:bg-gray-100 mb-4"
        >
          <FcGoogle className="text-xl" />
          Iniciar sesión con Google
        </button>

        <div className="text-center text-sm text-white/80 mb-4">o utiliza tu E-mail y contraseña</div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent border-b border-white/60 text-white placeholder-white/70 focus:outline-none py-2"
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent border-b border-white/60 text-white placeholder-white/70 focus:outline-none py-2"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 font-semibold"
          >
            Ingresar
          </button>
        </form>

        <div className="text-center text-sm mt-4">
          ¿No tenés una cuenta?{' '}
          <Link href="/registro" className="text-green-300 hover:underline">
            Registrate aquí
          </Link>
        </div>

        <div className="text-center text-xs mt-2">
          <Link href="/olvide-mi-clave" className="text-white/60 hover:underline">
            ¿Olvidaste tu contraseña? Presiona aquí
          </Link>
        </div>
      </div>
    </div>
  );
}

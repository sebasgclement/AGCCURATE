# 🌱 AGCCURATE

AGCCURATE es una plataforma web desarrollada con **Next.js 14**, **Prisma ORM** y **Tailwind CSS**, que permite a los usuarios gestionar su perfil, editar información personal y restablecer su contraseña de manera segura. Está orientada a la demostración de conocimientos en desarrollo Full Stack con enfoque moderno y buenas prácticas.

---

## 🚀 Tecnologías utilizadas

- [Next.js 14](https://nextjs.org/) – Framework React fullstack
- [TypeScript](https://www.typescriptlang.org/) – Tipado estático para JS
- [Prisma](https://www.prisma.io/) – ORM para la gestión de la base de datos (SQLite)
- [Tailwind CSS](https://tailwindcss.com/) – Estilado moderno y utilitario
- [NextAuth](https://next-auth.js.org/) – Autenticación con Google y credenciales
- [bcryptjs](https://github.com/dcodeIO/bcrypt.js) – Encriptación de contraseñas
- [Resend](https://resend.com/) – Envío de correos transaccionales (reset de contraseña)
- [UUID](https://www.npmjs.com/package/uuid) – Generación de identificadores únicos

---

## 📁 Estructura del proyecto

```
agccurate/
│
├── app/
│   ├── api/                        # Rutas del backend (API Routes)
│   │   ├── auth/                   # Lógica de autenticación con NextAuth
│   │   ├── perfil/route.ts         # GET y PUT de perfil del usuario
│   │   ├── registro/route.ts       # Registro de nuevos usuarios
│   │   ├── reset-password/         # Flujo de recuperación de contraseña
│   │   └── upload/route.ts         # Subida de imágenes de perfil
│   ├── perfil/page.tsx            # Página del perfil con formulario y modo vista
│   └── ...                        # Otras páginas
│
├── lib/
│   ├── prisma.ts                  # Conexión global al ORM Prisma
│   ├── mail.ts                    # Servicio de envío de email con Resend
│   └── utils.ts                   # Función `cn` para combinar clases CSS
│
├── public/uploads/               # Imágenes de perfil subidas por los usuarios
├── prisma/
│   └── schema.prisma              # Definición del modelo de datos
└── README.md                      # Este archivo
```

---

## 👤 Funcionalidades

- Registro de usuarios con validación de duplicados
- Login con credenciales o Google (NextAuth)
- Edición del perfil con:
  - Nombre, teléfono, domicilio, ciudad, provincia, país
  - Fecha de nacimiento (con selector)
  - Imagen de perfil (subida local)
- Visualización del perfil en modo tipo CV
- Recuperación de contraseña vía email (Resend)
- Subida de archivos segura con `uuid` y validaciones
- Protección de rutas mediante sesiones (`getServerSession`)

---

## 🔐 Seguridad

- Contraseñas encriptadas con `bcryptjs`
- Tokens de recuperación únicos y con vencimiento
- Uso de `getServerSession()` para proteger rutas API
- Datos sensibles ocultos en variables de entorno (`.env.local`)

---

## 🧪 Cómo correr el proyecto localmente

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/agccurate.git
   cd agccurate
   ```

2. Instalar dependencias:

   ```bash
   npm install
   ```

3. Configurar variables de entorno:
   Crear un archivo `.env.local` con:

   ```env
   DATABASE_URL="file:./dev.db"
   RESEND_API_KEY="tu-clave"
   NEXT_PUBLIC_APP_URL="http://localhost:3000"
   GOOGLE_CLIENT_ID="..."
   GOOGLE_CLIENT_SECRET="..."
   NEXTAUTH_SECRET="..."
   ```

4. Ejecutar migraciones:

   ```bash
   npx prisma migrate dev --name init
   ```

5. Iniciar el servidor:
   ```bash
   npm run dev
   ```

---

## 🧑‍💻 Desarrolladores

**Sebastián Clement** **Tobías Rojas**

- sebasclement.sc@gmail.com
- tobiasrojas057@gmail.com

---

## 📄 Licencia

Este proyecto fue desarrollado como parte de una entrega de examen. Uso libre con fines educativos.

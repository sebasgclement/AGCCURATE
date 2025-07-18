import { DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      image?: string | null;
    } & Partial<ExtraUserFields>;
  }

  interface User extends DefaultUser, ExtraUserFields {}
}

interface ExtraUserFields {
  telefono: string | null;
  genero: string | null;
  domicilio: string | null;
  ciudad: string | null;
  provincia: string | null;
  pais: string | null;
  fechaNacimiento: Date | null;
}

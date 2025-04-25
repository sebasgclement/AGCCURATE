import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function CuentaPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h1 className="text-3xl font-semibold mb-4">Mi Cuenta</h1>
      <p>Bienvenido, {session.user?.name || session.user?.email}</p>
    </div>
  );
}

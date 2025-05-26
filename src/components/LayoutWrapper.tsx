"use client";

import { usePathname } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

export default function LayoutWrapper({ children }: Props) {
  const pathname = usePathname();

  // rutas sin scroll
  const noScrollRoutes = ["/contacto", "/agro"];

  const isStaticPage = noScrollRoutes.includes(pathname);

  return (
    <main className={isStaticPage ? "flex-1 overflow-hidden" : "flex-1 overflow-y-auto"}>
      {children}
    </main>
  );
}

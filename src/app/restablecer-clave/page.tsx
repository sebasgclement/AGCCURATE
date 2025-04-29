// src/app/restablecer-clave/page.tsx

"use client";

import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function ResetPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/reset-password-request", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Ocurrió un error al enviar el email.", {
          style: {
            borderRadius: "8px",
            background: "#fee2e2",
            color: "#991b1b",
            fontWeight: "bold",
          },
          iconTheme: {
            primary: "#991b1b",
            secondary: "#fee2e2",
          },
        });
      } else {
        toast.success("Te enviamos un email para restablecer tu contraseña.", {
          style: {
            borderRadius: "8px",
            background: "#dcfce7",
            color: "#166534",
            fontWeight: "bold",
          },
          iconTheme: {
            primary: "#166534",
            secondary: "#dcfce7",
          },
        });
        setEmail("");
      }
    } catch (err) {
      toast.error("Ocurrió un error inesperado.", {
        style: {
          borderRadius: "8px",
          background: "#fee2e2",
          color: "#991b1b",
          fontWeight: "bold",
        },
        iconTheme: {
          primary: "#991b1b",
          secondary: "#fee2e2",
        },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl text-center">
            Recuperar contraseña
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid w-full items-center gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="tuemail@ejemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Enviando..." : "Enviar enlace de recuperación"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

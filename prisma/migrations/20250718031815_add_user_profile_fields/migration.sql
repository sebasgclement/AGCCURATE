/*
  Warnings:

  - You are about to drop the column `createdAt` on the `PasswordResetToken` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN "ciudad" TEXT;
ALTER TABLE "User" ADD COLUMN "domicilio" TEXT;
ALTER TABLE "User" ADD COLUMN "fechaNacimiento" DATETIME;
ALTER TABLE "User" ADD COLUMN "genero" TEXT;
ALTER TABLE "User" ADD COLUMN "pais" TEXT;
ALTER TABLE "User" ADD COLUMN "provincia" TEXT;
ALTER TABLE "User" ADD COLUMN "telefono" TEXT;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_PasswordResetToken" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expiresAt" DATETIME NOT NULL
);
INSERT INTO "new_PasswordResetToken" ("email", "expiresAt", "id", "token") SELECT "email", "expiresAt", "id", "token" FROM "PasswordResetToken";
DROP TABLE "PasswordResetToken";
ALTER TABLE "new_PasswordResetToken" RENAME TO "PasswordResetToken";
CREATE UNIQUE INDEX "PasswordResetToken_token_key" ON "PasswordResetToken"("token");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

/*
  Warnings:

  - You are about to drop the column `ciudad` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `domicilio` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `fechaNacimiento` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `genero` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `pais` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `provincia` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `telefono` on the `User` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "UserProfile" (
    "userId" TEXT NOT NULL PRIMARY KEY,
    "fechaNacimiento" DATETIME,
    "telefono" TEXT,
    "genero" TEXT,
    "domicilio" TEXT,
    "ciudad" TEXT,
    "provincia" TEXT,
    "pais" TEXT,
    CONSTRAINT "UserProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "image" TEXT,
    "emailVerified" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_User" ("createdAt", "email", "emailVerified", "id", "image", "name", "password", "updatedAt") SELECT "createdAt", "email", "emailVerified", "id", "image", "name", "password", "updatedAt" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

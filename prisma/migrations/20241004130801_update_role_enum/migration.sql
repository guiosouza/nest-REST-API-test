/*
  Warnings:

  - The values [DIAMONG_DOG] on the enum `Role` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
-- Criar um novo enum com o valor correto
CREATE TYPE "Role_new" AS ENUM ('DIAMOND_DOG', 'OUTER_HEAVEN', 'FOX_HOUND', 'BIG_BOSS');

-- Alterar a coluna 'role' para usar o novo enum, convertendo os valores antigos
ALTER TABLE "Soldier" ALTER COLUMN "role" TYPE "Role_new" USING ("role"::text::"Role_new");

-- Renomear o tipo antigo para 'Role_old'
ALTER TYPE "Role" RENAME TO "Role_old";

-- Renomear o novo tipo para 'Role'
ALTER TYPE "Role_new" RENAME TO "Role";

-- Remover o tipo antigo
DROP TYPE "Role_old";
COMMIT;

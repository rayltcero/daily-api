/*
  Warnings:

  - You are about to alter the column `birthdate` on the `people` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.

*/
-- AlterTable
ALTER TABLE `people` MODIFY `birthdate` DATETIME(3) NOT NULL;

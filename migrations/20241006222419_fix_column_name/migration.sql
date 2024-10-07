/*
  Warnings:

  - You are about to drop the column `birthDate` on the `people` table. All the data in the column will be lost.
  - Added the required column `birthdate` to the `people` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `people` DROP COLUMN `birthDate`,
    ADD COLUMN `birthdate` DATETIME(3) NOT NULL;

/*
  Warnings:

  - Made the column `carId` on table `Daily` required. This step will fail if there are existing NULL values in that column.
  - Made the column `carId` on table `Weekend` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Daily" DROP CONSTRAINT "Daily_carId_fkey";

-- DropForeignKey
ALTER TABLE "Weekend" DROP CONSTRAINT "Weekend_carId_fkey";

-- AlterTable
ALTER TABLE "Daily" ALTER COLUMN "carId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Weekend" ALTER COLUMN "carId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Weekend" ADD CONSTRAINT "Weekend_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Daily" ADD CONSTRAINT "Daily_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

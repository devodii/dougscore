-- CreateTable
CREATE TABLE "Car" (
    "id" SERIAL NOT NULL,
    "model" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "make" TEXT NOT NULL,
    "dougscore" INTEGER NOT NULL,

    CONSTRAINT "Car_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Weekend" (
    "id" SERIAL NOT NULL,
    "styling" INTEGER NOT NULL,
    "acceleration" INTEGER NOT NULL,
    "handling" INTEGER NOT NULL,
    "funFact" INTEGER NOT NULL,
    "coolFact" INTEGER NOT NULL,
    "total" INTEGER NOT NULL DEFAULT 0,
    "carId" INTEGER,

    CONSTRAINT "Weekend_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Daily" (
    "id" SERIAL NOT NULL,
    "features" INTEGER NOT NULL,
    "comfort" INTEGER NOT NULL,
    "quality" INTEGER NOT NULL,
    "practical" INTEGER NOT NULL,
    "value" INTEGER NOT NULL,
    "total" INTEGER NOT NULL DEFAULT 0,
    "carId" INTEGER,

    CONSTRAINT "Daily_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Other" (
    "id" SERIAL NOT NULL,
    "country" TEXT,
    "town" TEXT,
    "vehicleCountry" TEXT,
    "videoLink" TEXT,
    "carId" INTEGER NOT NULL,

    CONSTRAINT "Other_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Weekend" ADD CONSTRAINT "Weekend_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Daily" ADD CONSTRAINT "Daily_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Other" ADD CONSTRAINT "Other_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

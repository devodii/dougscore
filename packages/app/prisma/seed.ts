import { developmentData } from "./data/data.development";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  for (let data of developmentData) {
    await prisma.car.create({
      data: {
        year: data.YEAR,
        make: data.MAKE,
        model: data.MODEL,
        dougscore: data.DOUGSCORE,
        dailies: {
          create: {
            comfort: parseInt(data.DAILY_COMFORT, 10),
            features: parseInt(data.DAILY_FEATURE, 10),
            practical: parseInt(data.DAILY_PRACTICE, 10),
            quality: parseInt(data.DAILY_QUALITY, 10),
            value: parseInt(data.DAILY_VALUE, 10),
            total: data.TOTAL[1],
          },
        },
        weekends: {
          create: {
            acceleration: parseInt(data.WEEKEND_ACCELERATION, 10),
            coolFact: parseInt(data.WEEKEND_COOLFACTS, 10),
            funFact: parseInt(data.WEEKEND_COOLFACTS, 10),
            handling: parseInt(data.WEEKEND_HANDLING, 10),
            styling: parseInt(data.WEEKEND_STYLING, 10),
            total: data.TOTAL[0],
          },
        },
      },
    });
  }

  
}
main()
  .catch((err) => {
    console.log(err);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());

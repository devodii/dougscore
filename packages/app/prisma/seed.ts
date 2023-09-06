import { Cars } from "./cars";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  for (let car of Cars) {
    await prisma.car.create({ data: car });
  }
}
main()
  .catch((err) => {
    console.log(err);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());

import { prisma } from "@/prisma";

export const getAllMake = async () => {
  return await prisma.car.findMany();
};

export const getAllModel = async () => {
  return await prisma.car.findMany();
};

export const getAllYear = async () => {
  return await prisma.car.findMany();
};

export const getOneCar = async (
  make?: string,
  model?: string
  // year?: number
) => {
  return await prisma.car.findFirst({
    where: {
      // Only search if there's an arguement
      ...(make && { make }),
      ...(model && { model }),
      // ...(year && { year }),
    },
    select: {
      model: true,
      make: true,
      year: true,
      dougscore: true,
      weekends: {
        select: {
          acceleration: true,
          coolFact: true,
          funFact: true,
          handling: true,
          styling: true,
          total: true,
        },
      },
      dailies: {
        select: {
          comfort: true,
          features: true,
          practical: true,
          quality: true,
          value: true,
          total: true,
        },
      },
    },
  });
};

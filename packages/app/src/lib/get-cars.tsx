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
      ...(make && { make }), // Only include make in the where clause if it's defined
      ...(model && { model }), // Only include model if it's defined
      // ...(year && { year }),
    },
    select: {
      model: true,
      make: true,
      year: true,
      dougscore: true,
      weekend: {
        select: {
          acceleration: true,
          coolFact: true,
          funFact: true,
          handling: true,
          styling: true,
          total: true,
        },
      },
      daily: {
        select: {
          comfort: true,
          features: true,
          practical: true,
          quality: true,
          value: true,
          total: true,
        },
      },
      other: {
        select: {
          country: true,
          town: true,
          vehicleCountry: true,
          videoLink: true,
        },
      },
    },
  });
};

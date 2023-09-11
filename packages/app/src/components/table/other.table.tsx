import { logger } from "@/lib";
import React from "react";

interface Props {
  car: any;
}
export const OtherTable = ({ car }: Props) => {
  const other: any = car[0];
  logger.log({ other });
  return (
    <section className="w-full max-w-[230px]">
      <div className="w-full flex flex-col gap-6">
        <div>
          <h3 className="uppercase font-semibold lg:text-xl text-center">
            Filming Location
          </h3>
          <div className="text-center lg:text-lg">
            {`${other?.filmingCity}, ${other?.filmingState}`}
          </div>
        </div>

        <div>
          <h3 className="uppercase font-semibold lg:text-xl text-center">
            Vehicle Country
          </h3>
          <div className="text-center lg:text-lg">
            {`${other?.vehicleCountry}`}
          </div>
        </div>
      </div>
    </section>
  );
};

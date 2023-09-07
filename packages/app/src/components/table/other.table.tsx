import { logger } from "@/lib";
import React from "react";

interface Props {
  car: any;
}
export const OtherTable = ({ car }: Props) => {
    const other: any = car;
    logger.log('------------------')
  logger.log({other});
  return (
    <table className="max-w-xs">
      <thead className="w-full">
        <tr>
          <th className="border w-full text-center uppercase text-white bg-[#6aa84f]">
            Filming location
          </th>
        </tr>
      </thead>
      <tbody>
        {other.map((item: any) =>
          Object.entries(item).map(([key, value], index) => (
            <tr
              key={key}
              className="w-full grid grid-cols-2 bg-[#404040] text-white"
            >
              <td className="capitalize py-1- px-4 border-[0.5px]  border-gray-500 ">
                {key}
              </td>
              <td className="py-1 px-4 border">{value as any}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

import { logger } from "@/lib";
import React from "react";

interface Props {
  car: any;
}

export const WeekendTable = ({ car }: Props) => {
  const weekendStats: any = car;
  // logger.log(weekendStats);
  return (
    <div>
      {Array.isArray(weekendStats) && weekendStats.length > 0 ? (
        <table className="w-full">
          <thead className="w-full">
            <tr>
              <th className="border w-full text-center uppercase text-white bg-[#cc1500]">
                Weekend
              </th>
            </tr>
          </thead>
          <tbody>
            {weekendStats.map((item: any) =>
              Object.entries(item).map(([key, value]) => (
                <tr key={key} className="w-full grid grid-cols-2 bg-[#f8c5d2]">
                  <td className="capitalize py-1- px-4 border ">{key}</td>
                  <td className="py-1 px-4 border">{value as any}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      ) : (
        <div>No weekend stats for this car. try another</div>
      )}
    </div>
  );
};

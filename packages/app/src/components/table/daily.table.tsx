import { logger } from "@/lib";
import React from "react";

interface Props {
  car: any;
}
export const DailyTable = ({ car }: Props) => {
  const dailyStat: any = car;
  // logger.log({ dailyStat });
  return (
    <>
      {Array.isArray(dailyStat) && dailyStat.length > 0 ? (
        <table className="max-w-xs">
          <thead className="w-full">
            <tr>
              <th className="border w-full text-center uppercase text-white bg-[#6aa84f]">
                Daily
              </th>
            </tr>
          </thead>
          <tbody>
            {dailyStat.map((item: any) =>
              Object.entries(item).map(([key, value], index) => (
                <tr key={key} className="w-full grid grid-cols-2 bg-[#c6e0b4]">
                  <td className="capitalize py-1- px-4 border ">{key}</td>
                  <td className="py-1 px-4 border">{value as any}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      ) : (
        <div>No data, Please search for a different car</div>
      )}
    </>
  );
};

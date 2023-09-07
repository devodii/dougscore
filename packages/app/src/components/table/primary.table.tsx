import React from "react";

interface Props {
  car?: any;
}

export const PrimaryTable = ({ car }: Props) => {
  // ? force convert the value of car object to any to enable flexibility :)
  const carEntries: [string, any | any[]][] = Object.entries(car);

  return (
    <table className="max-w-xs">
      <tbody>
        {carEntries
          .filter(
            ([key, value]) =>
              typeof value === "string" || typeof value === "number"
          )
          /**
           * filter keys with typeof value being a string or number
           * @excludes Dougscore. (because it has a value that is typed as number)
           * @returns Make, Model, Year.
           */
          .map(([key, value], index) => (
            <tr key={index} className="w-full">
              <td className="py-1 px-4 border font-semibold">{key}</td>
              <td className="py-1 px-4 border">
                {(typeof value == "string" && value) ||
                  (typeof value == "number" && value)}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

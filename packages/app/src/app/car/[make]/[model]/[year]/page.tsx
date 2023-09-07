import React from "react";
import { getOneCar, logger } from "@/lib";
import { WeekendTable, DailyTable, OtherTable } from "@/table";

// get route parameters
interface Props {
  params: {
    make: string;
    model: string;
    year: number;
  };
}
const YearPage = async ({ params: { year, model, make } }: Props) => {
  const car = await getOneCar(make, model);
  const videoSrc = car?.other?.map((item) => item.videoLink)[0];
  return (
    <main className="continer mt-10 font-sans">
      <div className="border-b sticky top-8">
        <div className="flex items-center flex-wrap gap-4 max-w-2xl mx-auto ">
          <div className="text-2xl lg:text-4xl">{`${year} ${make} ${model}`}</div>
          <p className="text-gray-800 underline underline-offset-4">
            change vehicle
          </p>
        </div>
      </div>
      <section className="flex items-center gap-6 mt-6 w-full px-12 ">
        <div className="flex flex-[0.5] flex-col gap-4 lg:gap-6">
          {/* <PrimaryTable car={car} /> */}
          <WeekendTable car={car?.weekend} />
          <DailyTable car={car?.daily} />
        </div>

        <iframe
          width="560"
          height="315"
          src={"https://www.youtube.com/embed/VIDEO_ID"} // TODO: Replace with main Youtube link
          allowFullScreen
        />
      </section>

      <div className="border bg-[#404040] text-white font-semibold py-1.5 px-2 w-52">
        Dougscore: {car?.dougscore}
      </div>
      <OtherTable car={car?.other} />
    </main>
  );
};

export default YearPage;

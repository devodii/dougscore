import React, { memo } from "react";
import { getOneCar, logger } from "@/lib";
import { WeekendTable, DailyTable, OtherTable } from "@/table";
import Link from "next/link";

// get route parameters
interface Props {
  params: {
    make: string;
    model: string;
    year: number;
  };
}

const NoCarDisplay = memo(({ model }: { model: any }) => {
  logger.report(model);

  return (
    <div className="flex items-center justify-center flex-col gap-4">
      <div className="text-lg text-center mt-12 lg:text-xl">
        No information available for this car. We&apos;re working to add it
        soon!
      </div>
      <Link
        href="/"
        className="text-center text-white bg-blue-500 px-4 py-2 text-lg rounded-lg"
      >
        Back to Search
      </Link>
    </div>
  );
});

NoCarDisplay.displayName = "NoCarDisplay";

const YearPage = async ({ params: { make, model, year } }: Props) => {
  const car = await getOneCar(make);
  logger.log({ car });

  // Found out that some cars are null. Just improve UX.
  if (car === null) {
    // TODO: Implement an error service to catch models that are undefined.
    logger.report(`Car with model ${model} not available, Please check!`);
    return <NoCarDisplay model={model} />;
  }

  if (!Array.isArray(car?.other)) {
    logger.report(`Car with other ${car?.other} not available, Please check!`);
    return <NoCarDisplay model={model} />;
  }

  return (
    <main className="continer mt-10 font-sans">
      <div className="border-b">
        <div className="flex items-center flex-wrap gap-4 max-w-2xl mx-auto ">
          <div className="text-2xl lg:text-4xl">{`${year} ${make} ${model}`}</div>
        </div>
      </div>
      <section className="flex flex-col md:flex-row items-center flex-wrap justify-around w-full max-w-[90rem] mx-auto gap-6 mt-6 lg:px-12 ">
        <div className="flex flex-wrap w-full mx-auto max-w-xs flex-[0.5] flex-col gap-4 lg:gap-6">
          {/* <PrimaryTable car={car} /> */}
          <WeekendTable car={car?.weekends} />
          <DailyTable car={car?.dailies} />
        </div>
        <div>
          <div className="border bg-[#404040] text-white font-semibold py-1.5 px-2 w-full mb-4 uppercase">
            Dougscore: {car?.dougscore}
          </div>

          {/**
           * TODO: Manually update VIDEO_ID to database
           * This should be the structure: ${`https://www.youtube.com/embed/${VIDEO_ID}`}
           */}
          <iframe
            src="https://www.youtube.com/embed/8ZxskL1dZHY"
            className="w-[300px] sm:w-[350px] md:w-[440px] lg:w-[560px]"
            height="315"
            title="The Ferrari Daytona SP3 Is a $2.5 Million Dream Supercar"
            allowFullScreen
          ></iframe>
        </div>

        <OtherTable car={car?.other} />
      </section>
    </main>
  );
};

export default YearPage;

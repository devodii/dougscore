"use client";

import { logger } from "@/lib";

const Error = () => {
  logger.report("Error from Car level");
  return <div>Sorry, An error occured</div>;
};

export default Error;

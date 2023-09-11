// TODO: Create an Error reporting service
type LogFunction = (...args: any[]) => void;

interface Logger {
  log: LogFunction;
  warn: LogFunction;
  error: LogFunction;
  report: LogFunction;
}

export const logger: Logger = {
  log: (args) => console.log(args),
  warn: (args) => console.warn(args),
  error: (args) => console.error(args),
  report: (args) => mockReport(args),
};

const mockReport = (args: any) => {
  return args;
};

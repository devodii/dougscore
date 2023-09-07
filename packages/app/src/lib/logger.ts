type LogFunction = (...args: any[]) => void;

interface Logger {
  log: LogFunction;
  warn: LogFunction;
  error: LogFunction;
}

export const logger: Logger = {
  log: (args) => console.log(args),
  warn: (args) => console.warn(args),
  error: (args) => console.error(args),
};

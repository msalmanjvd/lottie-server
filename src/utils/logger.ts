const { appendFileSync } = require("fs");
import { Logger, ILogObject } from "tslog";
/**
 * @logs information into logs.log file and in console for monitoring
 */
const logger: Logger = new Logger({ type: "json" });
logger.attachTransport(
  {
    silly: logToTransport,
    debug: logToTransport,
    trace: logToTransport,
    info: logToTransport,
    warn: logToTransport,
    error: logToTransport,
    fatal: logToTransport,
  },
  "debug"
);

// logs are written in logs.log file
function logToTransport(logObject: ILogObject) {
  appendFileSync("logs.log", JSON.stringify(logObject) + "\n");
}

export class Logs {
  // general log information
  static Info(title: string, message: string | any) {
    logger.info(title, {
      Date: new Date(),
      message: message.toString(),
    });
  }

  // error logs
  static Error(title: string, message: string | any) {
    logger.error(title, {
      Date: new Date(),
      message: message.toString(),
    });
  }
}

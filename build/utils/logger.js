"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logs = void 0;
const { appendFileSync } = require("fs");
const tslog_1 = require("tslog");
/**
 * @logs information into logs.log file and in console for monitoring
 */
const logger = new tslog_1.Logger({ type: "json" });
logger.attachTransport({
    silly: logToTransport,
    debug: logToTransport,
    trace: logToTransport,
    info: logToTransport,
    warn: logToTransport,
    error: logToTransport,
    fatal: logToTransport,
}, "debug");
// logs are written in logs.log file
function logToTransport(logObject) {
    appendFileSync("logs.log", JSON.stringify(logObject) + "\n");
}
class Logs {
    // general log information
    static Info(title, message) {
        logger.info(title, {
            Date: new Date(),
            message: message.toString(),
        });
    }
    // error logs
    static Error(title, message) {
        logger.error(title, {
            Date: new Date(),
            message: message.toString(),
        });
    }
}
exports.Logs = Logs;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const dbConfig_1 = __importDefault(require("./../config/dbConfig"));
const logger_1 = require("./../utils/logger");
function DbConnection() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let connection = yield (0, typeorm_1.createConnection)(dbConfig_1.default);
            logger_1.Logs.Info("Sucsess", "Database Connected Successfuly!");
            logger_1.Logs.Info("Connection Info", connection);
            yield connection.synchronize();
            return true;
        }
        catch (error) {
            logger_1.Logs.Error("Connection Error", "Cannot Connect to Database!");
            logger_1.Logs.Error("Error", error);
            return false;
        }
    });
}
exports.default = DbConnection;

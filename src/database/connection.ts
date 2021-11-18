import { createConnection } from "typeorm";
import config from "./../config/dbConfig";
import { Logs } from "./../utils/logger";

async function DbConnection(): Promise<Boolean> {
  try {
    let connection = await createConnection(config);
    Logs.Info("Sucsess", "Database Connected Successfuly!");
    Logs.Info("Connection Info", connection);

    return true;
  } catch (error) {
    Logs.Error("Connection Error", "Cannot Connect to Database!");
    Logs.Error("Error", error);

    return false;
  }
}
export default DbConnection;

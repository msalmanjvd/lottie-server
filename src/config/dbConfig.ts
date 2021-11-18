import { ConnectionOptions } from "typeorm";
import { Users, Animations, Tags } from "./../database/entities/index";
// configuration for database
const config: ConnectionOptions = {
  type: "postgres",
  host: process.env.POSTGRES_HOST || "locahost",
  port: Number(process.env.POSTGRES_PORT) || 5432,
  username: process.env.POSTGRES_USER || "postgres",
  password: process.env.POSTGRES_PASSWORD || "admin",
  database: process.env.POSTGRES_DB || "lottiefilesdb",
  entities: [Users, Animations, Tags],
  synchronize: true, //will auto generate tables in database
};

export default config;

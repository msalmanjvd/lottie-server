"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./../database/entities/index");
// configuration for database
const config = {
    type: "postgres",
    host: process.env.POSTGRES_HOST || "locahost",
    port: Number(process.env.POSTGRES_PORT) || 5432,
    username: process.env.POSTGRES_USER || "postgres",
    password: process.env.POSTGRES_PASSWORD || "admin",
    database: process.env.POSTGRES_DB || "lottiefilesdb",
    entities: [index_1.Users, index_1.Animations, index_1.Tags],
    synchronize: true, //will auto generate tables in database
};
exports.default = config;

import { ConnectionOptions } from "typeorm";
import { User } from "../models";

const config: ConnectionOptions = {
  type: "mysql",
  host: process.env.POSTGRES_HOST || "localhost",
  port: Number(process.env.POSTGRES_PORT) || 3306,
  username: process.env.POSTGRES_USER || "admin",
  password: process.env.POSTGRES_PASSWORD || "Admin@123",
  database: process.env.POSTGRES_DB || "user_management",
  entities: [User],
  synchronize: true,
  migrationsRun: true,
  logging: true,
  logger: "file",
  migrations: ["dist/migrations/**/*{.js,.ts}"],
  subscribers: ["dist/subscribers/**/*{.js,.ts}"],
  cli: {
    migrationsDir: "src/migrations",
  },
};

export default config;

import express, { Application } from "express";
import Router from "./routes";
const swaggerUi = require("swagger-ui-express"),
  swaggerDocument = require("../swagger.json");

import "reflect-metadata";
import { createConnection } from "typeorm";

import dbConfig from "./config/database";

const PORT = process.env.PORT || 8000;

const app: Application = express();
app.use(express.json());

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(Router);

createConnection(dbConfig)
  .then((_connection) => {
    app.listen(PORT, () => {
      console.log("Server is running on port", PORT);
    });
  })
  .catch((err) => {
    console.log("Unable to connect to db", err);
    process.exit(1);
  });

import express from "express";
import "dotenv/config";
import sequelize from "./src/config/mysql.js";
import connectMongo from "./src/config/mongo.js";

const app = express();
app.use(express.json());

try {
  await sequelize.authenticate();
  console.log("MySQL connection established successfully.");
} catch (error) {
  console.error("Unable to connect to MySQL:", error);
}

await connectMongo();
export default app;
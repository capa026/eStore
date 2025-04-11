import pg from "pg";
import { env } from "./constants.js";

const { Pool } = pg;

export const db = new Pool({
  user: env.DB_USER,
  host: env.DB_HOST,
  database: env.DB_NAME,
  password: env.BD_PASSWORD,
  port: env.DB_PORT,
  ssl: {
    rejectUnauthorized: false,
  },
});

db.connect()
  .then(() => console.log("Connected successfully to the database"))
  .catch((err) => console.error("Connection FAILED:", err));

db.on("error", (err) => {
  console.error("Unexpected error on idle CLIENT", err);
  process.exit(-1);
});

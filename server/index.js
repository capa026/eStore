import express from "express";
import cors from "cors";
import AuthRoute from "./routes/auth.route.js";
import cookieParser from "cookie-parser";

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", AuthRoute);

app.listen(PORT, () => {
  console.log("Server Running on Port:", PORT);
});

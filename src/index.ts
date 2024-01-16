import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

require("./model/configDb");

dotenv.config();

const app: Express = express();

app.use(express.json());

const port = process.env.APP_API || 5050;

app.get("/", (req: Request, res: Response) => {
  res.send("Express API Server is up and running!");
});
app.use("/api", require("./routes/router"));

app.listen(port, () => {
  console.log(`Server is running at ${port} :: http://localhost:${port}`);
});

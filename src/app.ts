import express, { Application, Response } from "express";

const app: Application = express();

app.get("/", (_, res: Response) => {
  res.send("Hello, World!");
});

app.listen(8080, () => console.log("listening on https://localhost:8080"));

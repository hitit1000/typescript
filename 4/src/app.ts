import express from "express";

const app = express();

app.get("/", (req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.log("nodemon");
  res.send("Hello");
});

app.listen(5000, () => {
  console.log("Server running");
});

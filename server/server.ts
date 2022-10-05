import express from "express";

const app: express.Application = express();
const port = process.env.PORT || 8080;

app.get("/", (_req, _res) => {
  const date = new Date();
  const text = date.toLocaleString();
  _res.json({ text });
});

app.listen(port, () => {
  console.log(`TypeScript with Express http://localhost:${port}/`);
});

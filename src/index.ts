import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.raw({ type: "application/vnd.custom-type" }));

app.get("/", async (req, res) => {
  res.json(".");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

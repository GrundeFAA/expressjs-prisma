import express from "express";
import { scheduleJob } from "node-schedule";

const app = express();
const port = process.env.PORT || 3000;

const jobs: { date: string; numberOfJobs: number }[] = [];

scheduleJob("0 */2 * * *", () => {
  jobs.push({
    numberOfJobs: jobs.length,
    date: new Date().toLocaleString("en-GB"),
  });
});

app.use(express.json());
app.use(express.raw({ type: "application/vnd.custom-type" }));

app.get("/", async (req, res) => {
  res.json(jobs);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

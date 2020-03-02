var CronJob = require("cron").CronJob;
const mongo = require("./db/mongo");

// Runs at 18h00
var job = new CronJob(
  "* 1 */2 * *",
  () => {
    mongo();
  },
  null,
  true,
  "America/Los_Angeles"
);
job.start();

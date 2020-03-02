const express = require("express");
const app = express();

// Middleware
app.use(express.json());

app.use("/api/movies-popular", require("./routes/movies-popular"));
app.use("/api/movies-upcoming", require("./routes/movies-upcoming"));
app.use("/api/movies-playing", require("./routes/movies-playing"));

const port = 5000 || process.env.PORT;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

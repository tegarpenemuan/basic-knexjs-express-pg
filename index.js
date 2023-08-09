const express = require("express");

const app = express();

app.get("/", (req, res, next) => {
  res.json({
    message: "Hello World",
  });
});

app.listen(5000, () => {
  console.log("Server berjalan pada http://localhost:5000");
});

const express = require("express");

const app = express();

app.get("/", (req, res, next) => {
  res.json({
    message: "Hello World",
  });
});

const todosRouter = require("./src/routes/todos");
const usersRouter = require("./src/routes/users");

app.use([todosRouter, usersRouter]);

app.listen(5000, () => {
  console.log("Server berjalan pada http://localhost:5000");
});

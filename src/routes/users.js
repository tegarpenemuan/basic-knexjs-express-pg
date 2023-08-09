const express = require("express");
const db = require("../../db/db");

const router = express.Router();

router.get("/users", async (req, res) => {
  try {
    const blogs = await db.select("*").from("users");
    res.send(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/user/new", async (req, res) => {
  const { name, username, password } = req.body;
  try {
    const user = await db("users").insert({ name, username, password });
    res.status(201).send(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

const express = require("express");
const db = require("../../db/db");

const router = express.Router();

router.get("/todos", async (req, res) => {
  try {
    const blogs = await db.select("*").from("todos");
    res.send(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

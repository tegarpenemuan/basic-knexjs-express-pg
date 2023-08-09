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
    res.status(201).json({ message: "Data berhasil ditambah" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/user/:id", async (req, res) => {
  const { id } = req.params;
  const { name, username, password } = req.body;

  try {
    const user = await db("users")
      .where({ id })
      .update({ name, username, password }, [
        "id",
        "name",
        "username",
        "password",
      ]);
    if (user.length !== 0) {
      res.status(200).json({ message: "Data berhasil diupdate" });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/user/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const user = await db("users").where({ id }).del();
    if (user) {
      res.status(200).json({ message: "Data berhasil dihapus" });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

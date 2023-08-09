require("dotenv").config();
const { NODE_ENV } = process.env;

const knex = require("knex");
const knexFile = require("../knexfile.js");
const environment = NODE_ENV || "development";

module.exports = knex(knexFile[environment]);

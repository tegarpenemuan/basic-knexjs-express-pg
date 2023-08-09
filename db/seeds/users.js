/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  return knex("users").insert([
    {
      name: "guest",
      foto: "",
      username: "guest",
      password: "12345678",
    },
    {
      name: "user",
      foto: "",
      username: "user",
      password: "12345678",
    },
  ]);
};

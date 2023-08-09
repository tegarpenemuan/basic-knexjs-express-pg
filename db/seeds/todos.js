/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("todos").del();
  return knex("todos").insert([
    {
      description: "Finish the first task",
      title: "Complete Task 1",
      user_id: 1,
    },
  ]);
};

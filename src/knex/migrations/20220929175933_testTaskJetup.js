exports.up = function (knex) {
  return knex.schema.createTable('employees', (t) => {
    t.increments('id').primary();
    t.string('name').notNullable();
    t.string('position').notNullable();
    t.text('essay').unique();
    t.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('employees');
};

exports.up = function(knex) {
    return knex.schema.createTable("employees", t => {
        t.increments("id").primary();
        t.string("name", 20).notNullable();
        t.string("position", 40).notNullable();
        t.string("essay", 2000);
        t.timestamps(true, true);
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable("employees").raw(`DROP FUNCTION on_update_timestamp`);
};


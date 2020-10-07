
exports.up = function(knex) {
  return knex.schema.createTable('companies', function (table) {

    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('provincia').notNullable();
    table.string('cidade').notNullable();

  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('companies');
};

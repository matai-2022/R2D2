exports.up = function (knex) {
  return knex.schema.createTable('cards', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('image')
    table.string('selected').notNullable().defaultTo(0)
  })
}

exports.down = function (knex) {
  return knex.schema.table('cards', (table) => {
    table.dropTable('cards')
  })
}

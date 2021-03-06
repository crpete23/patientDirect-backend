exports.up = function (knex, Promise) {
  return knex.schema.createTable('doctors', table => {
    table.increments()
    table.string('doc_first_name').notNullable()
    table.string('doc_last_name').notNullable()
    table.string('email').notNullable().unique()
    table.text('password').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('doctors')
}

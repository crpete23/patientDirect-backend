exports.up = function (knex, Promise) {
  return knex.schema.createTable('patients', table => {
    table.increments()
    table.string('first_name').notNullable()
    table.string('last_name').notNullable()
    table.string('dob').notNullable()
    table.string('sex').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('patients')
}

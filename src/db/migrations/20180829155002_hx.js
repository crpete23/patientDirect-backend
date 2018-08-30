exports.up = function (knex, Promise) {
  return knex.schema.createTable('hx', table => {
    table.increments()
    table.integer('patient_id').notNullable()
    table.foreign('patient_id').references('patients.id').onDelete('CASCADE')
    table.string('date').notNullable()
    table.json('data').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('hx')
}

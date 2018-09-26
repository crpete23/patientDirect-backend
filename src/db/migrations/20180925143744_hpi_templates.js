exports.up = function (knex, Promise) {
  return knex.schema.createTable('hpi_templates', table => {
    table.increments()
    table.string('cc').notNullable()
    table.integer('doctor_id').notNullable()
    table.foreign('doctor_id').references('doctors.id').onDelete('CASCADE')
    table.json('template').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('hpi_templates')
}

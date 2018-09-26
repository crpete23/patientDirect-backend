exports.up = function (knex, Promise) {
  return knex.schema.createTable('ros_templates', table => {
    table.increments()
    table.integer('doctor_id').notNullable()
    table.foreign('doctor_id').references('doctors.id').onDelete('CASCADE')
    table.json('template').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('ros_templates')
}

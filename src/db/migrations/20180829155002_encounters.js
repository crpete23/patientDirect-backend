exports.up = function (knex, Promise) {
  return knex.schema.createTable('encounters', table => {
    table.increments()
    table.integer('patient_id').notNullable()
    table.foreign('patient_id').references('patients.id').onDelete('CASCADE')
    table.integer('doctor_id').notNullable()
    table.foreign('doctor_id').references('doctors.id').onDelete('CASCADE')
    table.string('date').notNullable()
    table.string('time').notNullable()
    table.boolean('checkedIn').notNullable().defaultTo(false)
    table.json('hx').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('encounters')
}

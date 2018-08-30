exports.up = function (knex, Promise) {
  return knex.schema.createTable('patients_doctors', table => {
    table.integer('doctor_id').notNullable()
    table.foreign('doctor_id').references('doctors.id').onDelete('CASCADE')
    table.integer('patient_id').notNullable()
    table.foreign('patient_id').references('patients.id').onDelete('CASCADE')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('patients_doctors')
}


exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('patients_doctors').del()
    .then(function () {
      // Inserts seed entries
      return knex('patients_doctors').insert([
        {doctor_id: 1, patient_id: 1},
        {doctor_id: 1, patient_id: 2},
        {doctor_id: 1, patient_id: 3},
        {doctor_id: 1, patient_id: 4},
        {doctor_id: 1, patient_id: 5},
        {doctor_id: 1, patient_id: 6},
        {doctor_id: 1, patient_id: 7},
        {doctor_id: 1, patient_id: 8}        
      ])
    })
}


exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('patients').del()
    .then(function () {
      // Inserts seed entries
      return knex('patients').insert([
        {id: 1, first_name: 'chris', last_name: 'peterson', dob: '1992/04/12', sex: 'male'},
        {id: 2, first_name: 'maria', last_name: 'peterson', dob: '1998/05/19', sex: 'female'},
        {id: 3, first_name: 'erik', last_name: 'peterson', dob: '1996/09/27', sex: 'male'}
      ])
    })
    .then(function () {
      return knex.raw(`SELECT setval('patients_id_seq', (SELECT MAX(id) FROM patients));`)
    })
}

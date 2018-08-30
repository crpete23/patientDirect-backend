
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('patients').del()
    .then(function () {
      // Inserts seed entries
      return knex('patients').insert([
        {id: 1, first_name: 'Chris', last_name: 'Peterson', dob: '04/12/1992', sex: 'male'},
        {id: 2, first_name: 'Maria', last_name: 'Peterson', dob: '05/19/1998', sex: 'female'},
        {id: 3, first_name: 'Erik', last_name: 'Peterson', dob: '09/27/1996', sex: 'male'}
      ])
    })
    .then(function () {
      return knex.raw(`SELECT setval('patients_id_seq', (SELECT MAX(id) FROM patients));`)
    })
}

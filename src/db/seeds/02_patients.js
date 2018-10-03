
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('patients').del()
    .then(function () {
      // Inserts seed entries
      return knex('patients').insert([
        {id: 1, first_name: 'chris', last_name: 'peterson', dob: '1992/04/12', sex: 'male'},
        {id: 2, first_name: 'maria', last_name: 'peterson', dob: '1998/05/19', sex: 'female'},
        {id: 3, first_name: 'erik', last_name: 'peterson', dob: '1996/09/27', sex: 'male'},
        {id: 4, first_name: 'hermione', last_name: 'granger', dob: '1979/09/19', sex: 'female'},
        {id: 5, first_name: 'ron', last_name: 'weasley', dob: '1980/03/01', sex: 'male'},
        {id: 6, first_name: 'harry', last_name: 'potter', dob: '1980/07/31', sex: 'male'},
        {id: 7, first_name: 'tom', last_name: 'riddle', dob: '1926/12/31', sex: 'male'},
        {id: 8, first_name: 'albus', last_name: 'dumbledore', dob: '1881/12/31', sex: 'male'}
      ])
    })
    .then(function () {
      return knex.raw(`SELECT setval('patients_id_seq', (SELECT MAX(id) FROM patients));`)
    })
}

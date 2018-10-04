const { hashSync } = require('bcryptjs')

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('doctors').del()
    .then(function () {
      // Inserts seed entries
      return knex('doctors').insert([
        {id: 1, doc_first_name: 'chris', doc_last_name: 'peterson', email: 'crpete23@gmail.com', password: hashSync('password')},
        {id: 1, doc_first_name: 'sabrina', doc_last_name: 'shaheen', email: 'drsabrinashaheen@gmail.com', password: hashSync('password')}
      ])
    })
    .then(function () {
      return knex.raw(`SELECT setval('doctors_id_seq', (SELECT MAX(id) FROM doctors));`)
    })
}

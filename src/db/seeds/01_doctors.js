const { hashSync } = require('bcryptjs')

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('doctors').del()
    .then(function () {
      // Inserts seed entries
      return knex('doctors').insert([
        {id: 1, first_name: 'chris', last_name: 'ceterson', email: 'crpete23@gmail.com', password: hashSync('password')},
        {id: 2, first_name: 'a', last_name: 'a', email: 'a@gmail.com', password: hashSync('a')},
        {id: 3, first_name: 'b', last_name: 'b', email: 'b@gmail.com', password: hashSync('b')}
      ])
    })
    .then(function () {
      return knex.raw(`SELECT setval('doctors_id_seq', (SELECT MAX(id) FROM doctors));`)
    })
}

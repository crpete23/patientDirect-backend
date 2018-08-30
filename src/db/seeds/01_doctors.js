const { hashSync } = require('bcryptjs')

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('doctors').del()
    .then(function () {
      // Inserts seed entries
      return knex('doctors').insert([
        {id: 1, first_name: 'Chris', last_name: 'Peterson', email: 'crpete23@gmail.com', password: hashSync('password')},
        {id: 2, first_name: 'A', last_name: 'A', email: 'a@gmail.com', password: hashSync('a')},
        {id: 3, first_name: 'b', last_name: 'b', email: 'b@gmail.com', password: hashSync('b')}
      ])
    })
    .then(function () {
      return knex.raw(`SELECT setval('doctors_id_seq', (SELECT MAX(id) FROM doctors));`)
    })
}

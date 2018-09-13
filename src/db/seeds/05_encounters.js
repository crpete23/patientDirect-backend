const fs = require('fs')

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('encounters').del()
    .then(function () {
      // Inserts seed entries
      return knex('encounters').insert([{id:1, patient_id: 1, doctor_id: 1, date: '09/13/2018', time: '11:00AM'
    },
    {id:2, patient_id: 1, doctor_id: 1, date: '09/14/2018', time: '10:00AM'
    },
    {id:3, patient_id: 2, doctor_id: 1, date: '09/15/2018', time: '12:00PM' 
    }
  ])
    })
    .then(function () {
      return knex.raw(`SELECT setval('hx_id_seq', (SELECT MAX(id) FROM hx));`)
    })
}

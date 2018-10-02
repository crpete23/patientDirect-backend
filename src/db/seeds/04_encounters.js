const fs = require('fs')

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('encounters').del()
    .then(function () {
      // Inserts seed entries
      return knex('encounters').insert([{id:1, patient_id: 1, doctor_id: 1, date: '2018/10/2', time: '11:00 am', hx:{}
    },
    {id:2, patient_id: 2, doctor_id: 1, date: '2018/10/02', time: '10:00 am', hx:{}
    },
    {id:3, patient_id: 3, doctor_id: 1, date: '2018/10/02', time: '4:00 pm', hx:{}
    },
    {id:4, patient_id: 1, doctor_id: 1, date: '2018/10/03', time: '4:00 pm', hx:{}
    },
    {id:5, patient_id: 1, doctor_id: 1, date: '2018/10/04', time: '4:00 pm', hx:{}
    },
    {id:6, patient_id: 1, doctor_id: 1, date: '2018/10/05', time: '4:00 pm', hx:{}
    },
    {id:7, patient_id: 1, doctor_id: 1, date: '2018/10/06', time: '4:00 pm', hx:{}
    },
    {id:8, patient_id: 1, doctor_id: 1, date: '2018/10/07', time: '4:00 pm', hx:{}
    },
    {id:9, patient_id: 1, doctor_id: 1, date: '2018/10/08', time: '4:00 pm', hx:{}
    },
    {id:10, patient_id: 1, doctor_id: 1, date: '2018/10/09', time: '4:00 pm', hx:{}
    },
    {id:11, patient_id: 1, doctor_id: 1, date: '2018/10/10', time: '4:00 pm', hx:{}
    },
    {id:12, patient_id: 1, doctor_id: 1, date: '2018/10/11', time: '4:00 pm', hx:{}
    },
  ])
    })
    .then(function () {
      return knex.raw(`SELECT setval('encounters_id_seq', (SELECT MAX(id) FROM encounters));`)
    })
}

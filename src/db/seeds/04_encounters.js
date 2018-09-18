const fs = require('fs')

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('encounters').del()
    .then(function () {
      // Inserts seed entries
      return knex('encounters').insert([{id:1, patient_id: 1, doctor_id: 1, date: '2018/08/30', time: '11:00 am', hx:{
         hpi:{
          cc: 'chest pain',
          quality: 'sharp',
          duration: 'two weeks',
          timing: 'constant',
          location: 'central-chest',
          location_img: 'imgUrl',
          alleviatingFactors: ["ice", "ibuprofen"],
          exacerbatingFactors: ["movement", "palpation"],
          context: 'all-day, no matter what',
          associatedSx: ['sob', 'headache']
        },
        ros: {
          constitutional: {
            fatigue: false, fever: false,
            unintentionalWeightLoss: false
          },
          eyes: {
            eyePain: false,
            blurryVision: false
          },
          ENT: {
            soreThroat: false,
            epistaxis: false
          },
          Cardiovascular: {
            cp: true, palpitations: false, dyspnea: true
          },
          Respiratory: {
            sob: true,
            cough: false
          },
          GI: {
            nausea: false,
            vomiting: false,
            hematochezia: false,
            melena: false
          },
          GU: {
            hematuria: false
          },
          Musc: {
            musclePain: false,
            jointPain: false
          },
          Neuro: {
            hxCVA: false,
            hxTIA: false,
            headache: true,
            lightheadedness: false
          },
          Endocrine: {
            dm: false
          },
          Hematologic: {
            anticoagulants: false
          }
        }
      }
    },
    {id:2, patient_id: 2, doctor_id: 1, date: '2018/08/30', time: '10:00 am', hx:{}
    },
    {id:3, patient_id: 3, doctor_id: 1, date: '2018/08/30', time: '4:00 pm', hx:{}
    }
  ])
    })
    .then(function () {
      return knex.raw(`SELECT setval('encounters_id_seq', (SELECT MAX(id) FROM encounters));`)
    })
}

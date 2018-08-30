const fs = require('fs')

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('hx').del()
    .then(function () {
      // Inserts seed entries
      return knex('hx').insert([{id:1, patient_id: 1, date: '08/30/2018', data:{
         hpi:{
          cc: 'chest pain',
          quality: 'sharp',
          duration: 'two weeks',
          timing: 'constant',
          location: 'central-chest',
          location-img: 'imgUrl',
          alleviatingFactors: ["ice", "ibuprofen"],
          exacerbatingFactors: ["movement", "palpation"],
          context: 'all-day, no matter what',
          associatedSx: ['sob', 'headache']
        }
        ros: {
          constitutional: {
            fatigue: false, fever: false,
            unintentionalWeightLostt: false
          }
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
    }])
    })
    .then(function () {
      return knex.raw(`SELECT setval('hx_id_seq', (SELECT MAX(id) FROM hx));`)
    })
}

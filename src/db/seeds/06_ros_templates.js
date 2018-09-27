
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('ros_templates').del()
    .then(function () {
      // Inserts seed entries
      return knex('ros_templates').insert([
        {id: 1, doctor_id: 1, template:
          {
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
            cp: false, palpitations: false, dyspnea: false
          },
          Respiratory: {
            sob: false,
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
            headache: false,
            lightheadedness: false
          },
          Endocrine: {
            dm: false
          },
          Hematologic: {
            anticoagulants: false
          }
        }
        }])
    })
    .then(function () {
      return knex.raw(`SELECT setval('ros_templates_id_seq', (SELECT MAX(id) FROM ros_templates));`)
    })
}

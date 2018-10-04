exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ros_templates').del().then(function() {
    // Inserts seed entries
    return knex('ros_templates').insert([
      {
        id: 1,
        doctor_id: 1,
        template: {
          Constitutional: {
            "fatigue": false,
            "fever": false,
            "unintentional weight loss": false
          },
          Eyes: {
            "eye pain": false,
            "blurry vision": false
          },
          ENT: {
            "sore throat": false,
            "epistaxis": false
          },
          Cardiovascular: {
            "chest pain": false,
            "palpitations": false,
            "dyspnea": false
          },
          Respiratory: {
            "shortness of breath": false,
            "cough": false
          },
          Gastrointestinal: {
            "nausea": false,
            "vomiting": false,
            "hematochezia": false,
            "melena": false
          },
          Genitourinary: {
            "hematuria": false
          },
          Musculoskeletal: {
            "myalgias": false,
            "joint pain": false
          },
          Neurological: {
            "history of CVA": false,
            "history of TIA": false,
            "headache": false,
            "lightheadedness": false,
            "syncope": false
          },
          Endocrine: {
            "diabetes": false
          },
          Hematologic: {
            "anticoagulant use": false
          }
        }
      },
      {
        id: 1,
        doctor_id: 2,
        template: {
          Constitutional: {
            "fatigue": false,
            "fever": false,
            "unintentional weight loss": false
          },
          Eyes: {
            "eye pain": false,
            "blurry vision": false
          },
          ENT: {
            "sore throat": false,
            "epistaxis": false
          },
          Cardiovascular: {
            "chest pain": false,
            "palpitations": false,
            "dyspnea": false
          },
          Respiratory: {
            "shortness of breath": false,
            "cough": false
          },
          Gastrointestinal: {
            "nausea": false,
            "vomiting": false,
            "hematochezia": false,
            "melena": false
          },
          Genitourinary: {
            "hematuria": false
          },
          Musculoskeletal: {
            "myalgias": false,
            "joint pain": false
          },
          Neurological: {
            "history of CVA": false,
            "history of TIA": false,
            "headache": false,
            "lightheadedness": false,
            "syncope": false
          },
          Endocrine: {
            "diabetes": false
          },
          Hematologic: {
            "anticoagulant use": false
          }
        }
      }
    ])
  }).then(function() {
    return knex.raw(`SELECT setval('ros_templates_id_seq', (SELECT MAX(id) FROM ros_templates));`)
  })
}

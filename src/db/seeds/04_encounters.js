const fs = require('fs')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('encounters').del().then(function() {
    // Inserts seed entries
    return knex('encounters').insert([
      {
        id: 1,
        patient_id: 1,
        doctor_id: 1,
        date: '2018/10/09',
        time: '8:00 am',
        "hx": {}
      }, {
        id: 2,
        patient_id: 2,
        doctor_id: 1,
        date: '2018/10/09',
        time: '9:00 am',
        hx: {}
      }, {
        id: 3,
        patient_id: 3,
        doctor_id: 1,
        date: '2018/10/09',
        time: '10:00 am',
        hx: {}
      }, {
        id: 4,
        patient_id: 4,
        doctor_id: 1,
        date: '2018/10/09',
        time: '11:00 am',
        hx: {}
      }, {
        id: 5,
        patient_id: 5,
        doctor_id: 2,
        date: '2018/10/09',
        time: '12:00 pm',
        hx: {}
      }, {
        id: 6,
        patient_id: 6,
        doctor_id: 1,
        date: '2018/10/09',
        time: '1:00 pm',
        hx: {}
      }, {
        id: 7,
        patient_id: 7,
        doctor_id: 1,
        date: '2018/10/09',
        time: '2:00 pm',
        hx: {}
      }, {
        id: 8,
        patient_id: 8,
        doctor_id: 1,
        date: '2018/10/09',
        time: '7:00 am',
        checkedIn: true,
        hx: {
          "hpi": {
            "cc": ["chest pain"],
            "quality": "sharp",
            "timing": "intermittent",
            "severity": "10",
            "duration": "several weeks",
            "location": "central chest",
            "alleviating factors": ["nitroglycerin"],
            "exacerbating factors": ["exertion"],
            "associated symptoms": [
              "shortness of breath",
              "diaphoresis (sweating)",
              "nausea",
              "vomitting",
              "fatigue",
              "dizziness/light headedness"
            ],
            "context": "Whenever I overexert"
          },
          "ros": {
            "Constitutional": {
              "fatigue": true,
              "fever": false,
              "unintentional weight loss": false
            },
            "Eyes": {
              "eye pain": false,
              "blurry vision": false
            },
            "ENT": {
              "sore throat": false,
              "epistaxis": false
            },
            "Cardiovascular": {
              "chest pain": true,
              "palpitations": false,
              "dyspnea": true
            },
            "Respiratory": {
              "shortness of breath": true,
              "cough": false
            },
            "Gastrointestinal": {
              "nausea": true,
              "vomiting": false,
              "hematochezia": false,
              "melena": false
            },
            "Genitourinary": {
              "hematuria": false
            },
            "Musculoskeletal": {
              "myalgias": false,
              "joint pain": false
            },
            "Neurological": {
              "history of CVA": false,
              "history of TIA": false,
              "headache": false,
              "lightheadedness": true,
              "syncope": false
            },
            "Endocrine": {
              "diabetes": true
            },
            "Hematologic": {
              "anticoagulant use": false
            }
          }
        }
      },
      {
        id: 9,
        patient_id: 1,
        doctor_id: 1,
        date: '2018/10/10',
        time: '8:00 am',
        "hx": {}
      }, {
        id: 10,
        patient_id: 2,
        doctor_id: 1,
        date: '2018/10/10',
        time: '9:00 am',
        hx: {}
      }, {
        id: 11,
        patient_id: 3,
        doctor_id: 1,
        date: '2018/10/10',
        time: '10:00 am',
        hx: {}
      }, {
        id: 12,
        patient_id: 4,
        doctor_id: 1,
        date: '2018/10/10',
        time: '11:00 am',
        hx: {}
      }, {
        id: 13,
        patient_id: 5,
        doctor_id: 2,
        date: '2018/10/10',
        time: '12:00 pm',
        hx: {}
      }, {
        id: 14,
        patient_id: 6,
        doctor_id: 1,
        date: '2018/10/10',
        time: '1:00 pm',
        hx: {}
      }, {
        id: 15,
        patient_id: 7,
        doctor_id: 1,
        date: '2018/10/10',
        time: '2:00 pm',
        hx: {}
      }, {
        id: 16,
        patient_id: 8,
        doctor_id: 1,
        date: '2018/10/10',
        time: '7:00 am',
        checkedIn: true,
        hx: {
          "hpi": {
            "cc": ["chest pain"],
            "quality": "sharp",
            "timing": "intermittent",
            "severity": "10",
            "duration": "several weeks",
            "location": "central chest",
            "alleviating factors": ["nitroglycerin"],
            "exacerbating factors": ["exertion"],
            "associated symptoms": [
              "shortness of breath",
              "diaphoresis (sweating)",
              "nausea",
              "vomitting",
              "fatigue",
              "dizziness/light headedness"
            ],
            "context": "Whenever I overexert"
          },
          "ros": {
            "Constitutional": {
              "fatigue": true,
              "fever": false,
              "unintentional weight loss": false
            },
            "Eyes": {
              "eye pain": false,
              "blurry vision": false
            },
            "ENT": {
              "sore throat": false,
              "epistaxis": false
            },
            "Cardiovascular": {
              "chest pain": true,
              "palpitations": false,
              "dyspnea": true
            },
            "Respiratory": {
              "shortness of breath": true,
              "cough": false
            },
            "Gastrointestinal": {
              "nausea": true,
              "vomiting": false,
              "hematochezia": false,
              "melena": false
            },
            "Genitourinary": {
              "hematuria": false
            },
            "Musculoskeletal": {
              "myalgias": false,
              "joint pain": false
            },
            "Neurological": {
              "history of CVA": false,
              "history of TIA": false,
              "headache": false,
              "lightheadedness": true,
              "syncope": false
            },
            "Endocrine": {
              "diabetes": true
            },
            "Hematologic": {
              "anticoagulant use": false
            }
          }
        }
      },
      {
        id: 17,
        patient_id: 1,
        doctor_id: 1,
        date: '2018/10/11',
        time: '8:00 am',
        "hx": {}
      }, {
        id: 18,
        patient_id: 2,
        doctor_id: 1,
        date: '2018/10/11',
        time: '9:00 am',
        hx: {}
      }, {
        id: 19,
        patient_id: 3,
        doctor_id: 1,
        date: '2018/10/11',
        time: '10:00 am',
        hx: {}
      }, {
        id: 20,
        patient_id: 4,
        doctor_id: 1,
        date: '2018/10/11',
        time: '11:00 am',
        hx: {}
      }, {
        id: 21,
        patient_id: 5,
        doctor_id: 2,
        date: '2018/10/11',
        time: '12:00 pm',
        hx: {}
      }, {
        id: 22,
        patient_id: 6,
        doctor_id: 1,
        date: '2018/10/11',
        time: '1:00 pm',
        hx: {}
      }, {
        id: 23,
        patient_id: 7,
        doctor_id: 1,
        date: '2018/10/11',
        time: '2:00 pm',
        hx: {}
      }, {
        id: 24,
        patient_id: 8,
        doctor_id: 1,
        date: '2018/10/11',
        time: '7:00 am',
        checkedIn: true,
        hx: {
          "hpi": {
            "cc": ["chest pain"],
            "quality": "sharp",
            "timing": "intermittent",
            "severity": "10",
            "duration": "several weeks",
            "location": "central chest",
            "alleviating factors": ["nitroglycerin"],
            "exacerbating factors": ["exertion"],
            "associated symptoms": [
              "shortness of breath",
              "diaphoresis (sweating)",
              "nausea",
              "vomitting",
              "fatigue",
              "dizziness/light headedness"
            ],
            "context": "Whenever I overexert"
          },
          "ros": {
            "Constitutional": {
              "fatigue": true,
              "fever": false,
              "unintentional weight loss": false
            },
            "Eyes": {
              "eye pain": false,
              "blurry vision": false
            },
            "ENT": {
              "sore throat": false,
              "epistaxis": false
            },
            "Cardiovascular": {
              "chest pain": true,
              "palpitations": false,
              "dyspnea": true
            },
            "Respiratory": {
              "shortness of breath": true,
              "cough": false
            },
            "Gastrointestinal": {
              "nausea": true,
              "vomiting": false,
              "hematochezia": false,
              "melena": false
            },
            "Genitourinary": {
              "hematuria": false
            },
            "Musculoskeletal": {
              "myalgias": false,
              "joint pain": false
            },
            "Neurological": {
              "history of CVA": false,
              "history of TIA": false,
              "headache": false,
              "lightheadedness": true,
              "syncope": false
            },
            "Endocrine": {
              "diabetes": true
            },
            "Hematologic": {
              "anticoagulant use": false
            }
          }
        }
      },
    ])
  }).then(function() {
    return knex.raw(`SELECT setval('encounters_id_seq', (SELECT MAX(id) FROM encounters));`)
  })
}

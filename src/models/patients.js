const db = require('../db')

function get (userId) {
  return db('patients_doctors')
    .where({ doctor_id: userId })
    .then(async patients => {
      const resp = Promise.all(patients.map(patient => {
        return db('patients').where({ id: patient.patient_id })
      }))
      return resp
    })
}

function getHx(patient_id){
  return db('hx')
    .where({patient_id})
}

function create (body, doctor_id) {
  return db('patients')
    .insert(body)
    .returning('*')
    .then(([response]) => {
      return db('patients_doctors')
        .insert({ doctor_id: doctor_id, patient_id: response.id })
        .then(() => {
          return response
        })
    })
}

module.exports = {
  get,
  getHx,
  create
}

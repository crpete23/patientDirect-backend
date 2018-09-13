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

function createPt (body, doctor_id) {
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

function find(id) {
  return db('patients').where({id}).first()
}

function updatePt(id, body){
  return find(id)
    .then(patient =>{
      return db('patients')
        .update({
          ...patient,
          ...body,
          updated_at: new Date()
        })
        .where({id})
        .returning('*')
        .then(([resp]) => resp)
    })
}

function deletePt(id){
  return db('patients')
    .where({id})
    .del()
    .returning('*')
    .then(([resp]) => resp)
}

function addPtToDoc(body){
  return db('patients_doctors').select()
    .where(body)
    .then(function(rows){
      if(rows.length=== 0){
        return db('patients_doctors')
        .insert(body)
        .returning('*')
        .then(([response]) => {
          return db('patients')
            .where({ id: response.patient_id})
        })
      } else {
        throw new Error()
      }
    })
  }

module.exports = {
  get,
  getHx,
  createPt,
  updatePt,
  deletePt,
  addPtToDoc
}

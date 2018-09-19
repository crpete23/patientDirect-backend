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

function getEncounters(patient_id){
  return db('encounters')
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

  function isPtsEncounter(patient_id, encounter_id){
    return db('encounters')
      .where({id: encounter_id})
      .then(([encounter]) => {
        if(encounter.patient_id===patient_id){
          return encounter
        } else {
          return false
        }
      })
  }

  async function getEncounter(patient_id, encounter_id){
    const encounter = await isPtsEncounter(patient_id, encounter_id);

    if(encounter){
      return encounter
    } else {
      throw new Error()
    }
  }

  function createEncounter (body) {
    return db('encounters')
      .insert(body)
      .returning('*')
      .then(([response]) => response)
  }

  async function updateEncounter(patient_id, encounter_id, body){
    const encounter = await isPtsEncounter(patient_id, encounter_id);

    if(encounter){
      return db('encounters')
        .update({
          ...encounter,
          ...body,
          updated_at: new Date()
        })
        .where({id: encounter_id})
        .returning('*')
        .then(([resp]) => resp)
    } else {
      throw new Error()
    }
  }

  async function deleteEncounter(patient_id, encounter_id){
    const encounter = await isPtsEncounter(patient_id, encounter_id);

    if(encounter){
      return db('encounters')
        .where({id: encounter_id})
        .del()
        .returning('*')
        .then(([resp]) => resp)
    } else {
      throw new Error()
    }
  }

  function checkIn(first_name, last_name, dob, today){
    return db('patients')
      .where({
        first_name,
        last_name,
        dob
      })
      .then(([patient]) => {
        return db('encounters')
          .where({
            patient_id: patient.id,
            date: today
          })
          .update({
            checkedIn: true
          })
          .returning('*')
          .then(([resp]) => resp)
      })
  }

module.exports = {
  get,
  getEncounters,
  createPt,
  updatePt,
  deletePt,
  addPtToDoc,
  getEncounter,
  createEncounter,
  updateEncounter,
  deleteEncounter,
  checkIn
}

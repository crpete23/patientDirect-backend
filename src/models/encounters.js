const db = require('../db')

function getAll(userId){
  return db('encounters')
    .where({ doctor_id: userId})
    .join('patients', 'encounters.patient_id', '=', 'patients.id')
}

function getEncountersByDate(date, userId){
  return db('encounters')
    .where({
      doctor_id: userId,
      date: date
    })
    .join('patients', 'encounters.patient_id', '=', 'patients.id')
}

module.exports = {
  getAll,
  getEncountersByDate
}

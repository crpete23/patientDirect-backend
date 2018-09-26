const db = require('../db')

function getHpiTemplate (doctor_id, cc){
  return db('hpi_templates')
    .where({doctor_id, cc})
    .then(([resp]) => resp)
}

function getHpiTemplates( doctor_id){
  return db('hpi_templates')
    .where({doctor_id})
}

function getRosTemplate(doctor_id){
  return db('ros_templates')
    .where({doctor_id})
    .then(([resp]) => resp)
}

module.exports = {
  getHpiTemplate,
  getHpiTemplates,
  getRosTemplate
}

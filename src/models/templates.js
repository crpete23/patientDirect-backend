const db = require('../db')

function getTemplate (doctor_id, cc){
  return db('hpi_templates')
    .where({doctor_id, cc})
    .then(([resp]) => resp)
}

function getTemplates( doctor_id){
  return db('hpi_templates')
    .where({doctor_id})
}

module.exports = {
  getTemplate,
  getTemplates
}

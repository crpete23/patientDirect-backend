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

function createHpiTemplate(body, doctor_id){
  return db('hpi_templates')
    .insert(body)
    .returning('*')
    .then(([resp]) => resp)
}

function createRosTemplate(body, doctor_id){
  return db('ros_templates')
    .insert(body)
    .returning('*')
    .then(([resp]) => resp)
}

function findHpiTemplate(doctor_id, cc){
  return db('hpi_templates').where({doctor_id, cc}).first()
}

function findRosTemplate(doctor_id){
  return db('ros_templates').where({doctor_id}).first()
}

function updateHpiTemplate(body, doctor_id, cc){
  return findHpiTemplate(doctor_id, cc)
    .then(temp =>{
      return db('hpi_templates')
        .update({
          ...temp,
          ...body,
          updated_at: new Date()
        })
        .where({id: temp.id})
        .returning('*')
        .then(([resp])=> resp)
    })
}

function updateRosTemplate(body, doctor_id){
  return findRosTemplate(doctor_id)
    .then(temp =>{
      return db('ros_templates')
        .update({
          ...temp,
          ...body,
          updated_at: new Date()
        })
        .where({id: temp.id})
        .returning('*')
        .then(([resp])=> resp)
    })
}

function deleteHpiTemplate(doctor_id, cc){
  return db('hpi_templates')
    .where({doctor_id, cc})
    .del()
    .returning('*')
    .then(([resp]) => resp)
}

module.exports = {
  getHpiTemplate,
  getHpiTemplates,
  getRosTemplate,
  createHpiTemplate,
  createRosTemplate,
  updateHpiTemplate,
  updateRosTemplate,
  deleteHpiTemplate
}

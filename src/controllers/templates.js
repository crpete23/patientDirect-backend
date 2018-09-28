const model = require('../models/templates')
const {parseToken} = require('../lib/auth')

async function getHpiCCKeys (req, res, next) {
  try{
    const doctor_id = req.params.doctor_id

    const response = await model.getHpiTemplates(doctor_id)
    const ccs = response.map(template => {
      return template.cc
    })

    res.status(200).json({"chief_complaints": ccs})
  } catch (e){
    console.log(e)
    next({status:400, error: `Unable to find templates for specified physician`})
  }
}

async function getHpiTemplate (req, res, next){
  try{
    const doctor_id = req.params.doctor_id
    const cc = req.params.cc

    const response = await model.getHpiTemplate(doctor_id, cc)
    res.status(200).json({"template": response.template})

  } catch (e){
    console.log(e)
    next({status:400, error: `Unable to find template for specified physician`})
  }
}

async function getRosTemplate (req, res, next){
  try{
    const doctor_id = req.params.doctor_id

    const response = await model.getRosTemplate(doctor_id)
    res.status(200).json({"template": response.template})
  } catch (e){
    console.log(e)
    next({status:400, error: `Unable to find template for specified physician`})
  }
}

async function createHpiTemplate(req, res, next){
  try{
    const doctor_id = req.params.doctor_id

    const response = await model.createHpiTemplate({...req.body}, doctor_id)

    res.status(201).json({"template": response})
  } catch (e){
    console.log(e)
    next({status:400, error: `Unable to create template`})
  }
}

async function createRosTemplate(req, res, next){
  try{
    const doctor_id = req.params.doctor_id

    const response = await model.createRosTemplate({...req.body}, doctor_id)

    res.status(201).json({"template": response})
  } catch (e){
    console.log(e)
    next({status:400, error: `Unable to create template`})
  }
}

async function updateHpiTemplate(req, res, next){
  try{
    const doctor_id = req.params.doctor_id
    const cc = req.params.cc

    const response = await model.updateHpiTemplate({...req.body}, doctor_id, cc)

    res.status(200).json({"template": response})
  } catch (e){
    console.log(e)
    next({status:400, error: `Unable to update template`})
  }
}

async function updateRosTemplate(req, res, next){
  try{
    const doctor_id = req.params.doctor_id

    const response = await model.updateRosTemplate({...req.body}, doctor_id)

    res.status(200).json({"template": response})
  } catch (e){
    console.log(e)
    next({status:400, error: `Unable to update template`})
  }
}

async function deleteHpiTemplate(req, res, next){
  try{
    const doctor_id = req.params.doctor_id
    const cc = req.params.cc

    const response = await model.deleteHpiTemplate(doctor_id, cc)

    res.status(200).json({"template": response})
  } catch (e){
    console.log(e)
    next({status:400, error: `Unable to delete template`})
  }
}

module.exports = {
  getHpiCCKeys,
  getHpiTemplate,
  getRosTemplate,
  createHpiTemplate,
  createRosTemplate,
  updateHpiTemplate,
  updateRosTemplate,
  deleteHpiTemplate
}

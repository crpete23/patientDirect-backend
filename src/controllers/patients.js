const {plural} = require('pluralize')
const model = require('../models/patients')
const {parseToken} = require('../lib/auth')
const resourceName = 'patient'

async function index(req, res, next) {
  try {
    const token = parseToken(req.headers.authorization)
    const userId = token.sub.id

    const response = await model.get(userId)
    res.status(200).json({
      [plural(resourceName)]: response
    })
  } catch (e){
    next({status:400, error: 'Unable to find your patients'})
  }
}

async function getEncounters(req,res,next){
  try{
    const patient_id = req.params.patient_id

    const response = await model.getEncounters(patient_id)
    res.status(200).json({"encounters": response})
  } catch (e){
    next({status:400, error: `Unable to find specified patient's history`})
  }
}

async function createPt(req, res, next) {
  try {
    const token = parseToken(req.headers.authorization)
    const userId = token.sub.id

    const response = await model.createPt({ ...req.body
    }, userId)

    res.status(201).json({[resourceName]: response})
  } catch (e) {
    next({status: 400, error: `Patient could not be created`})
  }
}

async function updatePt(req, res, next){
  try{
    const patient_id = req.params.patient_id
    const response = await model.updatePt(patient_id, req.body)

    res.status(200).json({[resourceName]: response})
  } catch (e){
    next({status: 400, error: `Unable to update specified patient`})
  }
}

async function deletePt(req, res, next){
  try{
    const id = req.params.patient_id
    const response = await model.deletePt(id)

    res.status(200).json({[resourceName]: response })
  } catch (e){
    next({status: 400, error: `Unable to delete specified patient`})
  }
}

async function addPtToDoc(req, res, next){
  try {
    const patient_id = req.params.patient_id
    const doctor_id = req.body.doctor_id

    const response = await model.addPtToDoc({patient_id, doctor_id})

    res.status(200).json({[resourceName]: response })
  } catch (e) {
    next({status:400, error: 'Duplicate request or unable to add patient to requested provider'})
  }
}

async function getEncounter(req, res, next){
  try{
    const patient_id = parseInt(req.params.patient_id)
    const encounter_id = req.params.encounter_id

    const response = await model.getEncounter(patient_id, encounter_id)

    res.status(200).json({"encounter": response})
  } catch (e) {
     next({status:400, error: `Unable to find specified patient's history`})
  }
}

async function createEncounter(req, res, next){
  try {
    const patient_id = parseInt(req.params.patient_id)

    const token = parseToken(req.headers.authorization)
    const doctor_id = token.sub.id

    const body = {
      ...req.body,
      patient_id,
      doctor_id,
      hx: {}
    }
    const response = await model.createEncounter(body)

    res.status(201).json({"encounter": response})
  } catch (e) {
    next({status: 400, error: `Encounter could not be created`})
  }
}

async function updateEncounter(req, res, next){
  try{
    const patient_id = parseInt(req.params.patient_id)
    const encounter_id = req.params.encounter_id

    const response = await model.updateEncounter(patient_id, encounter_id, req.body)

    res.status(200).json({"encounter": response})
  } catch (e){
    next({status: 400, error: `Unable to update specified encounter`})
  }
}

async function deleteEncounter(req, res, next){
  try{
    const patient_id = parseInt(req.params.patient_id)
    const encounter_id = req.params.encounter_id

    const response = await model.deleteEncounter(patient_id, encounter_id)

    res.status(200).json({"encounter": response})
  } catch (e){
    console.log(e)
    next({status: 400, error: `Unable to delete specified encounter`})
  }
}

module.exports = {
  index,
  getEncounters,
  createPt,
  updatePt,
  deletePt,
  addPtToDoc,
  getEncounter,
  createEncounter,
  updateEncounter,
  deleteEncounter
}

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

async function getPtHx(req,res,next){
  try{
    const patient_id = req.params.patient_id

    const response = await model.getHx(patient_id)
    res.status(200).json({response})
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

module.exports = {
  index,
  getPtHx,
  createPt,
  updatePt,
  deletePt,
  addPtToDoc
}

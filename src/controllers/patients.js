const {plural} = require('pluralize')
const model = require('../models/patients')
const {parseToken} = require('../lib/auth')
const resourceName = 'patient'

async function index(req, res, next) {
  const token = parseToken(req.headers.authorization)
  const userId = token.sub.id

  const response = await model.get(userId)
  res.json({
    [plural(resourceName)]: response
  })
}

async function getPtHx(req,res,next){
  const patient_id = req.params.patient_id

  const response = await model.getHx(patient_id)
  res.json({response})
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
  const patient_id = req.params.patient_id
  const response = await model.updatePt(patient_id, req.body)

  res.json({[resourceName]: response})
}

async function deletePt(req, res, next){
  const id = req.params.patient_id
  const response = await model.deletePt(id)

  res.json({[resourceName]: response })
}

async function addPtToDoc(req, res, next){
  try {
    const patient_id = req.params.patient_id
    const doctor_id = req.body.doctor_id

    const response = await model.addPtToDoc({patient_id, doctor_id})

    res.json({[resourceName]: response })
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

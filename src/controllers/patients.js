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

async function create(req, res, next) {
  try {
    const token = parseToken(req.headers.authorization)
    const userId = token.sub.id

    const response = await model.create({ ...req.body
    }, userId)

    res.status(201).json({[resourceName]: response})
  } catch (e) {
    next({status: 400, error: `Patient could not be created`})
  }
}

module.exports = {
  index,
  getPtHx,
  create
}

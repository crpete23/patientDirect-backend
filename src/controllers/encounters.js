const {plural} = require('pluralize')
const model = require('../models/encounters')
const {parseToken} = require('../lib/auth')
const resourceName = 'encounter'

async function getAll(req, res, next){
  try{
    const token = parseToken(req.headers.authorization)
    const userId = token.sub.id

    const response = await model.getAll(userId)
    res.status(200).json({
      [plural(resourceName)]: response
    })
  } catch (e){
    next({status:400, error: 'Unable to find your encounters'})
  }
}

async function getEncountersByDate(req, res, next){
  try{
    const token = parseToken(req.headers.authorization)
    const userId = token.sub.id

    const dateString = req.params.date

    const date = `${dateString.slice(0,4)}/${dateString.slice(4, 6)}/${dateString.slice(6)}`

    const response = await model.getEncountersByDate(date, userId)
    res.status(200).json({"encounters": response})
  } catch (e){
    console.log(e)
    next({status:400, error: `Unable to find specified encounters`})
  }
}

async function getEncounterById(req, res, next){
  try{
    const token = parseToken(req.headers.authorization)
    const userId = token.sub.id

    console.log(req.params)

    const dateString = req.params.date
    const date = `${dateString.slice(0,4)}/${dateString.slice(4, 6)}/${dateString.slice(6)}`

    const encounter_id = parseInt(req.params.encounter_id)

    const [response] = await model.getEncounterById(encounter_id, date, userId)
    res.status(200).json({"encounter": response})
  } catch (e){
    console.log(e)
    next({status:400, error: `Unable to find specified encounter`})
  }
}

module.exports = {
  getAll,
  getEncountersByDate,
  getEncounterById
}

const model = require('../models/templates')
const {parseToken} = require('../lib/auth')

async function getHpiCCKeys (req, res, next) {
  try{
    const doctor_id = req.params.doctor_id

    const response = await model.getTemplates(doctor_id)
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

    const response = await model.getTemplate(doctor_id, cc)
    res.status(200).json({"template": response.template})

  } catch (e){
    console.log(e)
    next({status:400, error: `Unable to find template for specified physician`})
  }
}

module.exports = {
  getHpiCCKeys,
  getHpiTemplate
}

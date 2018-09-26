const router = require('express').Router()
const ctrl = require('../controllers/templates')
const auth = require('../lib/auth')


router.get('/:doctor_id', ctrl.getHpiCCKeys)
router.get('/:doctor_id/cc/:cc', ctrl.getHpiTemplate)

module.exports = router

const router = require('express').Router()
const ctrl = require('../controllers/templates')
const auth = require('../lib/auth')

router.get('/:doctor_id/hpi', ctrl.getHpiCCKeys)
router.get('/:doctor_id/hpi/:cc', ctrl.getHpiTemplate)
router.get('/:doctor_id/ros', ctrl.getRosTemplate)

router.post('/:doctor_id/hpi', auth.isMyTemp, ctrl.createHpiTemplate)
router.post('/:doctor_id/ros', auth.isMyTemp, ctrl.createRosTemplate)

router.patch('/:doctor_id/hpi/:cc', auth.isMyTemp, ctrl.updateHpiTemplate)
router.patch('/:doctor_id/ros', auth.isMyTemp, ctrl.updateRosTemplate)

router.delete('/:doctor_id/hpi/:cc', auth.isMyTemp, ctrl.deleteHpiTemplate)

module.exports = router

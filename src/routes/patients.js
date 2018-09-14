const router = require('express').Router()
const ctrl = require('../controllers/patients')
const auth = require('../lib/auth')

router.get('/', auth.isLoggedIn, ctrl.index)
router.get('/:patient_id/encounters', auth.isAuthorized, ctrl.getEncounters)
router.post('/', auth.isLoggedIn, ctrl.createPt)
router.patch('/:patient_id', auth.isAuthorized, ctrl.updatePt)
router.delete('/:patient_id', auth.isAuthorized, ctrl.deletePt)
router.post('/:patient_id', auth.isAuthorized, ctrl.addPtToDoc)
router.get('/:patient_id/encounters/:encounter_id', auth.isAuthorized, ctrl.getEncounter)
router.post('/:patient_id/encounters', auth.isAuthorized, ctrl.createEncounter)
router.patch('/:patient_id/encounters/:encounter_id', auth.isAuthorized, ctrl.updateEncounter)
router.delete('/:patient_id/encounters/:encounter_id', auth.isAuthorized, ctrl.deleteEncounter)

module.exports = router

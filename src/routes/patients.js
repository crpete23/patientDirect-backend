const router = require('express').Router()
const ctrl = require('../controllers/patients')
const auth = require('../lib/auth')

router.get('/', auth.isLoggedIn, ctrl.index)
router.get('/:patient_id', auth.isAuthorized, ctrl.getPtHx)
router.post('/', auth.isLoggedIn, ctrl.createPt)
router.patch('/:patient_id', auth.isAuthorized, ctrl.updatePt)
router.delete('/:patient_id', auth.isAuthorized, ctrl.deletePt)
router.post('/:patient_id', auth.isLoggedIn, ctrl.addPtToDoc)

module.exports = router

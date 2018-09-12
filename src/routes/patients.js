const router = require('express').Router()
const ctrl = require('../controllers/patients')
const auth = require('../lib/auth')

router.get('/', auth.isLoggedIn, ctrl.index)
router.get('/:patient_id', auth.isAuthorized, ctrl.getPtHx)
router.post('/', auth.isLoggedIn, ctrl.create)

module.exports = router

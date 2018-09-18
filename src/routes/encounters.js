const router = require('express').Router()
const ctrl = require('../controllers/encounters')
const auth = require('../lib/auth')

router.get('/', auth.isLoggedIn, ctrl.getAll)
router.get('/:date', auth.isLoggedIn, ctrl.getEncountersByDate)

module.exports = router

const model = require('../models/users')
const auth = require('../lib/auth')
const {parseToken} = require('../lib/auth')

async function signup (req, res, next) {
  try {
    const response = await model.create(req.body)
    const token = auth.createToken(response.id)
    const userId = response.id

    res.status(201).json({ userId, token })
  } catch (e) {
    next({ status: 400, error: `User could not be registered` })
  }
}

async function login (req, res, next) {
  try {
    const response = await model.login(req.body)
    const token = auth.createToken(response.id)
    const userId = response.id
    res.json({ userId, token })
  } catch (e) {
    next({ status: 401, error: `Email or password is incorrect` })
  }
}

async function verify(req, res, next){
  try{
    const token = parseToken(req.headers.authorization)
    const userId = token.sub.id

    res.json({ userId })
  } catch (e){
    next({ status: 400, error: 'Token is invalid or expired'})
  }
}

module.exports = {
  signup, login, verify
}

const { promisify } = require('util')
const db = require('../db')
const bcrypt = require('bcryptjs')

async function create ({ password, ...body }) {
  const hashed = await promisify(bcrypt.hash)(password, 8)
  return db('doctors')
    .insert({ ...body, password: hashed })
    .returning('*')
    .then(([response]) => response)
}

function login ({ email, password }) {
  return db('doctors')
    .where({ email })
    .then(async ([ user ]) => {
      if (!user) throw new Error()

      const isValid = await promisify(bcrypt.compare)(password, user.password)
      if (!isValid) throw new Error()

      return user
    })
}

module.exports = {
  create, login
}

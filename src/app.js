const express = require('express')
const app = express()
const { PORT = 3200, NODE_ENV = 'development' } = process.env

if (NODE_ENV === 'development') {
  require('dotenv').load()
  app.use(require('morgan')('dev'))
}

app.use(require('body-parser').json())
app.use(require('cors')())

app.use('/api/users', require('./routes/users'))
app.use('/api/patients', require('./routes/patients'))
app.use('/api/encounters', require('./routes/encounters'))
app.use('/api/templates', require('./routes/templates'))

app.use((req, res, next) => {
  const status = 404
  const error = `Could not ${req.method} ${req.url}`

  next({ status, error })
})

app.use((err, req, res, next) => {
  if (NODE_ENV === 'development') console.error(err)

  const message = `Something went wrong.`
  const { status = 500, error = message } = err

  res.status(status).json({ status, error })
})

if (NODE_ENV !== 'testing') {
  const listener = () => console.log(`Listening on port ${PORT}!`)
  app.listen(PORT, listener)
}

module.exports = app

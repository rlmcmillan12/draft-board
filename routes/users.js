const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const models = require('../models')

// GET /api/v1/users/register
router.post('/register', async (req, res) => {
  const { username, password, admin } = req.body
  // if required fields missing, send error
  if (!username || !password) {
    return res.status(400).json({ error: 'missing username and/or password' })
  }
  //check for existing username
  const existingUser = await models.User.findOne({
    where: { username: username },
  })
  if (existingUser) {
    // respond with error
    res.status(400).json({ error: 'Username already in use' })
    return
  }
  // hash password
  const hash = await bcrypt.hash(password, 10)
  // create new user in database and send success message
  const user = await models.User.create({ username: username, password: hash, admin: admin })
  res.json({ success: 'registered successfully' })
})

// GET /api/v1/users/login
router.post('/login', async (req, res) => {
  const { username, password } = req.body
  // if required fields missing, send error
  if (!username || !password) {
    return res.status(400).json({ error: 'missing username and/or password' })
  }
  // find user in database
  const user = await models.User.findOne({ where: { username } })
  // if no user found, send error
  if (!user) {
    return res.status(400).json({ error: 'username incorrect' })
  }
  // if password is invalid, send error
  const passwordValid = bcrypt.compare(password, user.password)
  if (!passwordValid) {
    return res.status(400).json({ error: 'invalid password' })
  }
  // add user to session
  req.session.user = user
  res.status(201).json({ success: 'logged in successfully' })
})

// GET /api/v1/users/logout
router.get('/logout', async (req, res) => {
  req.session.user = null
  res.json({ success: 'logged out successfully' })
})

// GET /api/v1/users/current
router.get('/current', (req, res) => {
  if (!req.session.user) {
    res.json()
    return
  }
  res.json({
    id: req.session.user.id,
    username: req.session.user.username,
    admin: req.session.user.admin,
  })
})

module.exports = router

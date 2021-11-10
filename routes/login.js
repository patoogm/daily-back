const { Router } = require('express')
const { loginUser } = require('../controllers/login')
const route = Router()

route.post('/login-user', loginUser)

module.exports = route
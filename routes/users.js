const { Router } = require('express')
const route = Router()
const { body } = require('express-validator')
const { createUser, getUsers } = require('../controllers/users')
const { validateDni, validateEmail } = require('../helpers/validation')

route.get('/get-users', getUsers)

route.post('/create-users', 
body('name').trim().escape().not().isEmpty().isLength({min: 3, max: 12}).withMessage('Nombre inválido'),
body('lastName').trim().escape().not().isEmpty().withMessage('Apellido invalido'),
body('dni').trim().escape().isNumeric().isLength({min: 7, max: 8}).withMessage('Dni Invalido'),
body('dni').custom(validateDni),
body('email').trim().escape().isEmail().not().isEmpty().withMessage('Email invalido'),
body('email').custom(validateEmail),
body('password').not().isEmpty().isLength({min: 5}).withMessage('Contraseña invalida'),
createUser
)

module.exports = route
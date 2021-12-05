const { Router } = require('express')
const route = Router()
const { body } = require('express-validator')
const { createUser, getUsers, editUser, deleteUser, getUsersByName } = require('../controllers/users')
const { validateDni, validateEmail } = require('../helpers/validation')

route.get('/get-users', getUsers)
route.get('/users/:txtSearch', getUsersByName)

route.post('/create-users', 
body('name').trim().escape().isAlpha('es-ES', {ignore: ' '}).not().isEmpty().isLength({min: 3, max: 20}).withMessage('Nombre inválido'),
body('lastName').trim().escape().isAlpha('es-ES', {ignore: ' '}).not().isEmpty().withMessage('Apellido invalido'),
body('dni').trim().escape().isNumeric().isLength({min: 7, max: 8}).withMessage('Dni Invalido'),
body('dni').custom(validateDni),
body('email').trim().escape().isEmail().not().isEmpty().withMessage('Email invalido'),
body('email').custom(validateEmail),
body('password').not().isEmpty().isLength({min: 5}).withMessage('Contraseña invalida'),
createUser)

route.put('/:userId', editUser)
route.delete('/:userId', deleteUser)

module.exports = route
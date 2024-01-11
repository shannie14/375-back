const express = require('express')
const { Login } = require('../controllers/userController')

const router = express.Router()

// POST /users
router.post('/', Login)

module.exports = router
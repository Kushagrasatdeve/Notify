const express = require('express')

// Controller functions
const {signupUser, loginUser} = require('../controllers/userController')

const router = express.Router()

// login Route
router.post('/login', loginUser)

// signup Route
router.post('/signup', signupUser)

module.exports = router
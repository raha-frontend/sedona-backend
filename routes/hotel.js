const express = require('express')

const router = express.Router()

const controller = require('../controllers/hotel')

router.get('/', controller.getHotels)

module.exports = router

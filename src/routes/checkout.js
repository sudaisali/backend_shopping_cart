const express = require('express')
const checkoutRouter = express.Router()
const {checkout, sessionSatus , stripwebhook} = require('../controllers/checkout.js')


checkoutRouter.post('/checkout',checkout)
checkoutRouter.get('/session-status',sessionSatus)
// checkoutRouter.post('/webhook',express.raw({ type: 'application/json' }),stripwebhook)


module.exports = {checkoutRouter}
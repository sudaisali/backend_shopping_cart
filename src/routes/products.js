const express = require('express')
const productRouter = express.Router()
const getAllProduct = require('../controllers/product')


productRouter.get('/products',getAllProduct)


module.exports = {productRouter}
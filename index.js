const express = require('express')
const bodyParser = require('body-parser');
require("dotenv").config({path: './.env'})
const cors = require('cors');
const {productRouter} = require('./src/routes/products')
const {checkoutRouter} = require('./src/routes/checkout');
const { stripwebhook} = require('./src/controllers/checkout')

const app = express()


app.post('/api/webhook',express.raw({ type: 'application/json' }),stripwebhook)
app.use(express.json())
app.use(bodyParser.json());
app.use(cors());
const PORT = process.env.PORT;


app.use('/api',productRouter)
app.use('/api',checkoutRouter)



app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`)
})
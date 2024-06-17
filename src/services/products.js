const {Product} = require("../database/models");


const getProducts = async() => await Product.findAll() 


module.exports = {getProducts}
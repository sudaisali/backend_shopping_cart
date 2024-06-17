const Joi = require('joi');

const productSchema = Joi.object({
  id: Joi.number().required().messages({
    'number.base': 'Product ID must be a number',
    'any.required': 'Product ID is required'
  }),

  name: Joi.string().required().messages({
    'string.base': 'Product name must be a string',
    'any.required': 'Product name is required'
  }),
  image: Joi.string().required().messages({
    'string.base': 'Image name must be a string',
    'any.required': 'Image name is required'
  }),

  quantity: Joi.number().min(1).required().messages({
    'number.base': 'Quantity must be a number',
    'number.min': 'Quantity must be at least 1',
    'any.required': 'Quantity is required'
  }),
  product_quantity: Joi.number().min(1).required().messages({
    'number.base': 'Quantity must be a number',
    'number.min': 'Quantity must be at least 1',
    'any.required': 'Quantity is required'
  }),
  price: Joi.number().greater(0).required().messages({
    'number.base': 'Price must be a number',
    'number.greater': 'Price must be greater than 0',
    'any.required': 'Price is required'
  })
});

const validator = Joi.object({
  user_name: Joi.string().required().messages({
    'string.base': 'Username must be a string',
    'any.required': 'Username is required'
  }),
  email: Joi.string().email().required().messages({
    'string.base': 'Email must be a string',
    'string.email': 'Email must be a valid email',
    'any.required': 'Email is required'
  }),
  address: Joi.string().required().messages({
    'string.base': 'Address must be a string',
    'any.required': 'Address is required'
  }),
  phone_number: Joi.string().pattern(/^[0-9]{10,15}$/).required().messages({
    'string.base': 'Phone number must be a string',
    'string.pattern.base': 'Phone number must be between 10 and 15 digits',
    'any.required': 'Phone number is required'
  }),
  state: Joi.string().required().messages({
    'string.base': 'State must be a string',
    'any.required': 'State is required'
  }),
  city: Joi.string().required().messages({
    'string.base': 'City must be a string',
    'any.required': 'City is required'
  }),
  products: Joi.array().items(productSchema).min(1).required().messages({
    'array.base': 'Products must be an array',
    'array.min': 'There must be at least one product',
    'any.required': 'Products are required'
  })
});


module.exports = {validator}
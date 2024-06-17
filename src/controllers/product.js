const { getProducts } = require("../services/products");
const { successResponse, failureResponse } = require("../utils/response");



const getAllProducts = async (req, res) => {
  try {
    const products = await getProducts()
    return successResponse(res, "Success", 200, "Products Fetch SuccessFully", products)
  } catch (error) {
    return failureResponse(res, "Error", 400, error.message)
  }
};

module.exports = getAllProducts;

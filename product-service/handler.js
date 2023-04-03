'use strict';
const {productsList} = require('./products.mocks');

module.exports.getProductsList = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      productsList
    ),
  };
};

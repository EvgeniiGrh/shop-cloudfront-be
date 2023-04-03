'use strict';
const {productsList} = require('./products.mocks');

module.exports.getProductsById = async (event) => {
const id = event.pathParameters.id;

const matchItem = productsList.find((item) => item.id === +id);

  return {
    statusCode: 200,
    body: JSON.stringify(
      matchItem
    ),
  };
};

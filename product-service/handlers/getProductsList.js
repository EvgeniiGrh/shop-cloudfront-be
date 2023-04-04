'use strict';
import { productsList } from '../products.mocks';

export async function getProductsList(event) {
  let productsArray;

  try {
    productsArray = await productsList
  } catch (error) {
    return response = {
      statusCode: 500,
      body: JSON.stringify({ message: `Internal server error: ${error}` })
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(
      productsArray
    ),
  };
}

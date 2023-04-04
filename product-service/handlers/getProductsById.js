'use strict';
import { productsList } from '../products.mocks';

export async function getProductsById(event) {
  const id = event.pathParameters.id;

  const matchItem = (await productsList).find((item) => item.id === +id);


  if (!matchItem) {
    return {
      statusCode: 422,
      body: `Product with the id - ${id} not found`,
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(
      matchItem
    ),
  };
}

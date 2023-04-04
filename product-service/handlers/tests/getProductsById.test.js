import { getProductsById } from '../getProductsById';
import { productsList } from '../../products.mocks';

describe('getProductsById', () => {

  it('should return response product which has id === 3', async () => {
    const products = (await productsList);

    const expectedData = {
        statusCode: 200,
        body: JSON.stringify(
            products.find((item) => item.id === 3)
          ),
      };
      
    await expect(getProductsById({pathParameters: {id: 3}})).resolves.toStrictEqual(expectedData);
  });


  it('should return response 422 with error message', async () => {
    const testId = 999;

    const expectedData = {
        statusCode: 422,
        body: `Product with the id - ${testId} not found`,
      };
      
    await expect(getProductsById({pathParameters: {id: testId}})).resolves.toStrictEqual(expectedData);
  });
});
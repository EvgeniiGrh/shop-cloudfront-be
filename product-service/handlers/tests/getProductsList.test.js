import { getProductsList } from '../getProductsList';
import { productsList } from '../../products.mocks';

describe('getProductsList', () => {

  it('should return response with products List', async () => {
    const expectedData = {
        statusCode: 200,
        body: JSON.stringify(
            await productsList
          ),
      };
      
    await expect(getProductsList()).resolves.toStrictEqual(expectedData);
  });
});
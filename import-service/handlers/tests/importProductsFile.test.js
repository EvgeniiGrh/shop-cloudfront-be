import { importProductsFile } from '../importProductsFile';

describe('importProductsFile', () => {
    const HEADERS = {
        "Access-Control-Allow-Origin": "*"
      };

  it('should return response internal server error', async () => {
    const expectedData = {
        statusCode: 500,
        headers: HEADERS,
        body: JSON.stringify('Internal server error'),
      };

    const response = await importProductsFile({queryStringParameters: {name: 'test'}});

    await expect(response).toStrictEqual(expectedData);
  });
});
import AWSMock from 'aws-sdk-mock';
import AWS from 'aws-sdk';
import { importProductsFile } from '../importProductsFile';


// Mock without 'aws-sdk-mock'
// jest.mock('aws-sdk', () => {
//   class mockS3 {
//     async getSignedUrlPromise(op, obj) {
//       return 'test URL';
//     }
//   }
//   return {
//     ...jest.requireActual('aws-sdk'),
//     S3: mockS3
//   };
// });

describe('importProductsFile', () => {
  const HEADERS = {
      "Access-Control-Allow-Origin": "*"
    };

    beforeEach(() => {
      AWSMock.setSDKInstance(AWS);

      AWSMock.mock('S3', 'getSignedUrlPromise', async () => {
        console.log('S3', 'getSignedUrlPromise', 'mock called');
        callback(null, new Promise((resolve) => resolve(jest.fn())));
      });
    });


  it('should return response success status', async () => {
    const response = await importProductsFile({queryStringParameters: {name: 'test'}});

    await expect(response.statusCode).toStrictEqual(200);
  });    


  it('should return response internal server error becuse name is not exist', async () => {
    const expectedData = {
        statusCode: 500,
        headers: HEADERS,
        body: JSON.stringify('Internal server error'),
      };

    const response = await importProductsFile({queryStringParameters: {}});

    await expect(response).toStrictEqual(expectedData);
  });
});
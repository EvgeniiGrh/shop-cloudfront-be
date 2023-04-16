'use strict';
import * as AWS from 'aws-sdk';

const bucketName = 'shop-imports-bucket';
const HEADERS = {
  "Access-Control-Allow-Origin": "*"
};

export async function importProductsFile(event) {
  console.log('Requests event', event);

  try {
    const s3 = new AWS.S3({region: 'us-east-1'});
    const pathProducts = event.queryStringParameters.name;
    const params = {
      Bucket: bucketName,
      Key: `uploaded/${pathProducts}`,
      Expires: 300,
      ContentType: "text/csv",
    };

    const url = await s3.getSignedUrlPromise("putObject", params);

  console.log('SignedUrl', url);

    return {
      statusCode: 200,
      headers: HEADERS,
      body: JSON.stringify(url),
    };

  } catch (error) {
    console.log('Erorr ', error);

    return {
      statusCode: 500,
      headers: HEADERS,
      body: JSON.stringify('Internal server error'),
    };
  }
};

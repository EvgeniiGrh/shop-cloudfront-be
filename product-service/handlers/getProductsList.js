'use strict';
import * as AWS from 'aws-sdk'

const dynamo = new AWS.DynamoDB.DocumentClient();

const scan = async (tableName) => {
  const scanResult = await dynamo.scan({
    TableName: tableName
  }).promise();

  return scanResult;
}

export async function getProductsList() {
  let productsItems;
  let stocks;
  let productsResult;

  try {
    productsItems = (await scan(process.env.TABLE_PPODUCTS)).Items;
    stocks = (await scan(process.env.TABLE_STOCKS)).Items;

    productsResult = productsItems.reduce((res, product) => {
      res.push(
        {
          ...product,
          count: stocks.find((stocksProduct) => stocksProduct.id === product.id).count
        }
      );

      return res;
    }, []);
  } catch (error) {

    console.log('error = ', error);

    return {
      statusCode: 500,
      body: JSON.stringify({ message: `Internal server error: ${error}` })
    };
  }

  console.log('getProductsList Result = ', productsResult);

  return {
        statusCode: 200,
        body: JSON.stringify(
          productsResult
        ),
      };
}

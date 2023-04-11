'use strict';
import * as AWS from 'aws-sdk'

const dynamo = new AWS.DynamoDB.DocumentClient();

const query = async (id) => {
  const result = await dynamo.query({
    TableName: process.env.TABLE_PPODUCTS,
    KeyConditionExpression: 'id = :id',
    ExpressionAttributeValues: {':id': id}
  }).promise();

  return result;
}

export async function getProductsById(event) {
  const id = event.pathParameters.id;
  const matchItem = (await query(id)).Items;

  if (!matchItem.length) {
    console.log('getProductsById for id = ', id, 'item = ', `Product with the id - ${id} not found`);
    
    return {
      statusCode: 500,
      body: `Product with the id - ${id} not found`,
    };
  }

  console.log('getProductsById for id = ', id, 'item = ', productsResult);

  return {
    statusCode: 200,
    body: JSON.stringify(
      matchItem
    ),
  };
}

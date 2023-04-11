'use strict';
import * as AWS from 'aws-sdk'
import { v4 as uuidv4 } from 'uuid';

const dynamo = new AWS.DynamoDB.DocumentClient();

const put = async (tableName, item) => {
  const scanResult = await dynamo.scan({
    TableName: tableName,
    Item: item
  }).promise();

  return scanResult;
}

export async function createProduct(event) {
    let itemToCreate;

    if (!event.body?.item) {
        itemToCreate = {
            title: 'Triumph Bonneville T100',
            price: 11000,
            imgUrl: 'https://triumph.granmoto.ru/user/pages/02.motorcycles/04.classic/05.Bonneville_t100/02._stacked/t100-21-small.jpg',
            description: "Triumph Bonneville T120 description",
            id: uuidv4(),
            count: Math.floor(Math.random() * 100),
    }
    }

  try {
    await put(process.env.TABLE_PPODUCTS, {
        id: itemToCreate.id, 
        price: itemToCreate.price, 
        title: itemToCreate.title, 
        imgUrl: itemToCreate.imgUrl, 
        description: itemToCreate.description});
    await put(process.env.TABLE_STOCKS, {
        id: itemToCreate.id, 
        count: itemToCreate.count
    });

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: `Internal server error: ${error}` })
    };
  }

  return {
        statusCode: 200,
        body: JSON.stringify(
        ),
      };
}

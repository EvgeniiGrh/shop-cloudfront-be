'use strict';
import * as AWS from 'aws-sdk'
import { v4 as uuidv4 } from 'uuid';

const dynamo = new AWS.DynamoDB.DocumentClient();

const put = async (tableName, item) => {
  const scanResult = await dynamo.put({
    TableName: tableName,
    Item: item
  }).promise();

  return scanResult;
}

export async function createProduct(event) {
  console.log('request event = ', event);

  const payloadData  = JSON.parse(event.body);

  const productId = uuidv4();

  const props = ['title', 'description', 'price', 'count']; // imgUrl is optional for now
  const missedFromSchema = props.find(
    prop => !payloadData.hasOwnProperty(prop)
  );

  if (!payloadData || missedFromSchema) {
    return {
      statusCode: 400,
      body: JSON.stringify(
        { message: `The data is invalid` }
      ),
    };
  } else {
    try {

      await put(process.env.TABLE_PPODUCTS, {
          id: productId, 
          price: payloadData.price, 
          title: payloadData.title, 
          imgUrl: payloadData.imgUrl || '', 
          description: payloadData.description});
      await put(process.env.TABLE_STOCKS, {
          id: productId, 
          count: payloadData.count
      });
  
    } catch (error) {
  
      console.log(`Internal server error: ${error}`);
  
      return {
        statusCode: 500,
        body: JSON.stringify({ message: `Internal server error: ${error}` })
      };
    }
  
    return {
          statusCode: 200,
          body: JSON.stringify(
            { message: `Product with ID [ ${productId} ] has been added`, productId: productId }
          ),
        };
  }
}

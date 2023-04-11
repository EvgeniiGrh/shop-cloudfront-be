'use strict';
import {productsList} from '../products.mocks.js';
import { v4 as uuidv4 } from 'uuid';
// import * as AWS from 'aws-sdk';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { BatchWriteCommand } from '@aws-sdk/lib-dynamodb';

const region = 'us-east-1';

const ddbClient = new DynamoDBClient({
  region,
});

const marshallOptions = {
  // Whether to automatically convert empty strings, blobs, and sets to `null`.
  convertEmptyValues: false, // false, by default.
  // Whether to remove undefined values while marshalling.
  removeUndefinedValues: false, // false, by default.
  // Whether to convert typeof object to map attribute.
  convertClassInstanceToMap: true, // false, by default.
};

const unmarshallOptions = {
  // Whether to return numbers as a string instead of converting them to native JavaScript numbers.
  wrapNumbers: false, // false, by default.
};

const ddbDocClient = DynamoDBDocumentClient.from(ddbClient, {
  marshallOptions,
  unmarshallOptions,
});

const FIRST_TABLE_NAME = 'products';
const SECOND_TABLE_NAME = 'stocks';

const putStockRequestItems = [];
const putProductRequestItems = [];

const fillDataBase = async () => {
    const productsArray = await productsList;
    // const dynamo = new AWS.DynamoDB.DocumentClient();


    productsArray.forEach((product) => {
        const productId = uuidv4();
    
        putProductRequestItems.push({
            PutRequest: { Item: { ...product, id: productId } },
          });
        
          putStockRequestItems.push({
            PutRequest: {
              Item: {
                id: productId,
                count: Math.floor(Math.random() * 100),
              },
            },
          });
        });



    
    await ddbDocClient.send(
        new BatchWriteCommand({
            RequestItems: {
              [FIRST_TABLE_NAME]: putProductRequestItems,
              [SECOND_TABLE_NAME]: putStockRequestItems,
            },
          })
    );
};

fillDataBase();

import * as AWS from 'aws-sdk'
import {createProduct} from './createProduct';

export async function catalogBatchProcess (event) {
    try {
      const products = event.Records.map(({ body }) => JSON.parse(body));
      const sns = new AWS.SNS({region: 'us-east-1'});
  
      for (const product of products) {
        const item = await createProduct({body: JSON.stringify(product)}); 

        console.log('item result = ', item);

        const snsResult = await sns.publish({
          Subject: 'sns message about creation product',
          Message: JSON.stringify(item),
          MessageAttributes: {
            Count: {
              DataType: 'String',
              StringValue: product.count === '0' ? 'empty' : 'filled'
            }
          },
          TopicArn: process.env.SNS_ARN
        }).promise();

        console.log('snsResult = ', snsResult);
      }
    } catch (e) {
      console.log("internal server error: ", e);
    }
  };
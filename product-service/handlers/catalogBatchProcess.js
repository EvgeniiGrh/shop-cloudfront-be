import {createProduct} from './createProduct';

export async function catalogBatchProcess (event) {
    try {
        console.log('test record: ', JSON.stringify(event.Records));
      const products = event.Records.map(({ body }) => JSON.parse(body));
  
      for (const product of products) {
        const item = await createProduct({body: JSON.stringify(product[0])}); 

        console.log('Response after creation = ', item.body);
      }
    } catch (e) {
      console.log("internal server error: ", e);
    }
  };
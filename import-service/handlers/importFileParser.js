import * as AWS from 'aws-sdk';
import * as csv from 'csv-parser';

const bucketName = 'shop-imports-bucket';
const HEADERS = {
    "Access-Control-Allow-Origin": "*"
};


const sqsQueueUrl = 'https://sqs.us-east-1.amazonaws.com/735163746441/catalogItemsQueue';

export async function importFileParser(event) {
    console.log('Requests event', event);
  
    try {
        const s3 = new AWS.S3({region: 'us-east-1'});
        const sqs = new AWS.SQS({region: 'us-east-1'});


        for (const record of event.Records) {
            const key = record.s3.object.key;
            const params = {
                Bucket: bucketName,
                Key: key,
            };

            const s3Stream = s3.getObject(params).createReadStream();


            await new Promise(() => {
                s3Stream
                  .pipe(csv({ separator: ';' }))
                  .on("data", (data) => {
                    sqs.sendMessage({
                      QueueUrl: sqsQueueUrl,
                      MessageBody: JSON.stringify(data),
                      MessageAttributes: {
                        'Count': {
                          DataType: 'String',
                          StringValue: !!data.count ? 'filled' : 'empty'
                        }
                      },
                  }, (err, data) => {
                    return err ? console.log('sqs error ', err) : console.log('sqs success ', data);
                  })
                  })
                  .on("end", async () => {
                    await s3
                      .copyObject({
                        Bucket: bucketName,
                        CopySource: bucketName + "/" + key,
                        Key: key.replace("uploaded", "parsed"),
                      })
                      .promise();
                    await s3
                      .deleteObject({
                        Bucket: bucketName,
                        Key: key,
                      })
                      .promise();
                  });
              });

            return {
                statusCode: 200,
                headers: HEADERS,
                body: JSON.stringify('Parsed'),
            };
        }
    } catch(error) {
        console.log('Error ', error);

        return {
            statusCode: 500,
            headers: HEADERS,
            body: JSON.stringify('Internal server error'),
        };
    }
};
import * as AWS from 'aws-sdk';
import * as csv from 'csv-parser';

const bucketName = 'shop-imports-bucket';
const HEADERS = {
    "Access-Control-Allow-Origin": "*"
};

export async function importFileParser(event) {
    console.log('Requests event', event);
  
    try {
        const s3 = new AWS.S3({region: 'us-east-1'});

        for (const record of event.Records) {
            const key = record.s3.object.key;
            const params = {
                Bucket: BUCKET,
                Key: key,
            };

            const s3Stream = s3.getObject(params).createReadStream();

            await new Promise(() => {
                s3Stream
                  .pipe(csv())
                  .on("data", (data) => console.log('Parsed data - ', data))
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
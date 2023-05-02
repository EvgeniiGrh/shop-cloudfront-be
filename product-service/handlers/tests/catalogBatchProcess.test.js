import { catalogBatchProcess } from '../catalogBatchProcess';
import * as AWS from 'aws-sdk';

jest.mock('../createProduct.js', () => {
    return {
        createProduct: async () => {
            return {};
        }
    };
});

jest.mock('aws-sdk', () => {
    const mSNS = {
      publish: jest.fn().mockReturnThis(),
      promise: jest.fn(),
    };
    return { SNS: jest.fn(() => mSNS) };
  });

describe('catalogBatchProcess', () => {

  it('should trigger SNS', async () => {
      const snsSpy = jest.spyOn(AWS, 'SNS').mockResolvedValue(() => {
        return function publish() {
          return 'test';
        };
      });

      await catalogBatchProcess({Records: [{body: '{}'}]});

      expect(snsSpy).toHaveBeenCalled();
  });
});
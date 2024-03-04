import { App } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { S3Stack } from '../lib/Stack';

describe('S3Bucket', () => {
  const app = new App();
  const stack = new S3Stack(app, 'TestStack');
  const template = Template.fromStack(stack);
  process.env.NODE_ENV = 'production';
  test('Create S3 Bucket', () => {
    template.hasResourceProperties('AWS::S3::Bucket', {});
  });
});

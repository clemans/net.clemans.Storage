import { App, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { S3Stack } from '../lib/Stack';
import { Properties } from '../config/properties';

const app: Construct = new App();
new S3Stack(app, Properties.stackName as string, Properties as StackProps);
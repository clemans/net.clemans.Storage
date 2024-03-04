import { CfnOutput, Duration, RemovalPolicy, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { BlockPublicAccess, Bucket, BucketEncryption, StorageClass } from 'aws-cdk-lib/aws-s3';
import { CloudConfig } from '../config/parameters';

export class S3Stack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    const { bucketName } = CloudConfig;
    const isProduction = process.env.NODE_ENV === 'production';
    const removalPolicy = isProduction ? RemovalPolicy.RETAIN : RemovalPolicy.DESTROY;

    const cloudBucket = new Bucket(this, bucketName, {
      autoDeleteObjects: !isProduction,
      blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
      bucketKeyEnabled: true,
      bucketName,
      encryption: BucketEncryption.DSSE_MANAGED,
      enforceSSL: true,
      minimumTLSVersion: 1.2,
      removalPolicy,
      lifecycleRules: [
        {
          transitions: [
            {
              storageClass: StorageClass.INTELLIGENT_TIERING,
              transitionAfter: Duration.days(30),
            },
            {
              storageClass: StorageClass.GLACIER_INSTANT_RETRIEVAL,
              transitionAfter: Duration.days(60),
            },
            {
              storageClass: StorageClass.GLACIER,
              transitionAfter: Duration.days(180),
            },
            {
              storageClass: StorageClass.DEEP_ARCHIVE,
              transitionAfter: Duration.days(270),
            },
          ],
        },
      ],
      versioned: isProduction,
    });

    new CfnOutput(this, `${CloudConfig.bucketName}.bucketRegionalDomainName`, {
      value: cloudBucket.bucketRegionalDomainName,
      description: CloudConfig.description,
    });
  }
}
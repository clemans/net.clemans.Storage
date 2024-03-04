export const CloudConfig: { [key: string]: string } = {
  bucketArn: 'arn:aws:s3:::cloud.company.io',
  bucketName: 'cloud.company.io',
  description: 'Storage for service: cloud.company.io'
};

export const Tags: { [key: string]: string } =  {
  environment: 'production',
  owner: 'jon.doe@company.io',
  version: '1.0.0',
  repo: 'io.company.Storage'
};
export const CloudConfig: { [key: string]: string } = {
  bucketArn: 'arn:aws:s3:::cloud.clemans.net',
  bucketName: 'cloud.clemans.net',
  description: 'Storage for service: cloud.clemans.net'
};

export const GitConfig: { [key: string]: string } = {
  bucketArn: 'arn:aws:s3:::git.clemans.net',
  bucketName: 'git.clemans.net',
  description: 'Storage for service: git.clemans.net'
};

export const Tags: { [key: string]: string } =  {
  environment: 'production',
  owner: 'brooks@clemans.net',
  version: '1.1.0',
  repo: 'net.clemans.Storage'
};
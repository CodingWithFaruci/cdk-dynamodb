import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import devEnvironmentConfig from '../bin/dev-stack-config';
import * as Stack from '../lib/cdk-dynamodb-stack';

const app = new cdk.App();
const stack = new Stack.CdkDynamodbStack(app, 'MyTestStack', devEnvironmentConfig);
const template = Template.fromStack(stack);

test('KMS', () => {
  template.hasResourceProperties('AWS::KMS::Key', {
    Description: 'encryption key pbar',
    EnableKeyRotation: true,
  });
});

test('Table', () => {
  template.hasResourceProperties('AWS::DynamoDB::Table', {
    TableName: 'pbar-table',
    KeySchema: [
      {
        AttributeName: 'id',
        KeyType: 'HASH',
      },
      {
        AttributeName: 'type',
        KeyType: 'RANGE',
      },
    ],
    AttributeDefinitions: [
      {
        AttributeName: 'id',
        AttributeType: 'S',
      },
      {
        AttributeName: 'type',
        AttributeType: 'S',
      },
      {
        AttributeName: 'userId',
        AttributeType: 'S',
      },
    ],
    BillingMode: 'PAY_PER_REQUEST',
    GlobalSecondaryIndexes: [
      {
        IndexName: 'userName',
        KeySchema: [
          {
            AttributeName: 'userId',
            KeyType: 'HASH',
          },
          {
            AttributeName: 'type',
            KeyType: 'RANGE',
          },
        ],
      },
    ],
    TimeToLiveSpecification: {
      AttributeName: 'TimeToLive',
      Enabled: true,
    },
  });
});

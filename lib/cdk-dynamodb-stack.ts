import { RemovalPolicy, Stack } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as kms from 'aws-cdk-lib/aws-kms';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';

// extended stack environment props
import { ICdkDynamodbStackProps } from '../bin/stack-environment-types';

export class CdkDynamodbStack extends Stack {
  constructor(scope: Construct, id: string, props: ICdkDynamodbStackProps) {
    super(scope, id, props);

    const key = new kms.Key(this, 'key', {
      alias: props.kmsAlias,
      description: props.kmsDescription,
      enableKeyRotation: true,
      removalPolicy: RemovalPolicy.RETAIN,
    });

    const table = new dynamodb.Table(this, 'table', {
      tableName: props.tableName,
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
      partitionKey: {
        name: props.partitionKeyName,
        type: dynamodb.AttributeType.STRING,
      },
      sortKey: {
        name: props.sortKeyName,
        type: dynamodb.AttributeType.STRING,
      },
      encryption: dynamodb.TableEncryption.CUSTOMER_MANAGED,
      encryptionKey: key,
      timeToLiveAttribute: 'TimeToLive',
      removalPolicy: RemovalPolicy.RETAIN,
    });

    table.addGlobalSecondaryIndex({
      indexName: props.secondaryIndexName,
      partitionKey: {
        name: props.secondaryPartitionKeyName,
        type: dynamodb.AttributeType.STRING,
      },
      sortKey: {
        name: props.secondarySortKey,
        type: dynamodb.AttributeType.STRING,
      },
    });
  }
}

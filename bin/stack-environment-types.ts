import { StackProps } from 'aws-cdk-lib';

export interface ICdkDynamodbStackProps extends StackProps {
  environment: string,
  kmsAlias: string,
  kmsDescription: string,
  tableName: string,
  partitionKeyName: string,
  sortKeyName: string,
  secondaryIndexName: string,
  secondaryPartitionKeyName: string,
  secondarySortKey: string,
}
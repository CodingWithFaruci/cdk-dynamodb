import { ICdkDynamodbStackProps } from './stack-environment-types';

const prdEnvironmentConfig: ICdkDynamodbStackProps = {
  tags: {
    Developer: 'Faruk Ada',
    Application: 'CdkDynamodb',
  },
  environment: 'prd',
  kmsAlias: 'alias/pbar-key',
  kmsDescription: 'encryption key pbar',
  tableName: 'pbar-table',
  partitionKeyName: 'id',
  sortKeyName: 'type',
  secondaryIndexName: 'userName',
  secondaryPartitionKeyName: 'userId',
  secondarySortKey: 'type',
};

export default prdEnvironmentConfig;
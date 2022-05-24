import { ICdkDynamodbStackProps } from './stack-environment-types';

const prdEnvironmentConfig: ICdkDynamodbStackProps = {
  tags: {
    Developer: 'Faruk Ada',
    Application: 'CdkDynamodb',
  },
  environment: 'prd',
};

export default prdEnvironmentConfig;
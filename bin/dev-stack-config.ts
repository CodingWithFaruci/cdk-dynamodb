import { ICdkDynamodbStackProps } from './stack-environment-types';

const devEnvironmentConfig: ICdkDynamodbStackProps = {
  tags: {
    Developer: 'Faruk Ada',
    Application: 'CdkDynamodb',
  },
  environment: 'dev',
};

export default devEnvironmentConfig;
import { ICdkDynamodbStackProps } from './stack-environment-types';

const tstEnvironmentConfig: ICdkDynamodbStackProps = {
  tags: {
    Developer: 'Faruk Ada',
    Application: 'CdkDynamodb',
  },
  environment: 'tst',
};

export default tstEnvironmentConfig;
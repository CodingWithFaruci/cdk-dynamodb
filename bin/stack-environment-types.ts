import { StackProps } from 'aws-cdk-lib';

export interface ICdkDynamodbStackProps extends StackProps {
  environment: string
}
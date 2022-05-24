#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkDynamodbStack } from '../lib/cdk-dynamodb-stack';

// importing configuration based on environment
import devEnvironmentConfig from './dev-stack-config';
import tstEnvironmentConfig from './tst-stack-config';
import prdEnvironmentConfig from './prd-stack-config';

const app = new cdk.App();

// injecting configurations into stack based on environment.
new CdkDynamodbStack(app, 'cdk-dynamodb-dev', devEnvironmentConfig);
new CdkDynamodbStack(app, 'cdk-dynamodb-tst', tstEnvironmentConfig);
new CdkDynamodbStack(app, 'cdk-dynamodb-prd', prdEnvironmentConfig);
# AWS CDK TypeScript DynamoDB

This repository contains a DynamoDB table encrypted with a KMS key.
The table uses a partition and sort key, additionally a secondy index is created also with a partition and sort key.

## Useful commands

| Command  | Description    |
|----------|----------------|
|`npm run build`|compile typescript to js|
|`npm run test`|perform the jest unit tests|
|`npm run lint`|perform static analyses on code|
|`cdk bootstrap`|bootstrap aws for cdk on first time using cdk|
|`cdk diff`|compare deployed stack with current state|
|`cdk synth`|emits the synthesized CloudFormation template|
|`cdk deploy`| deploy this stack to your default AWS account/region|

import { EC2Client, StopInstancesCommand, StartInstancesCommand, DescribeInstancesCommand } from '@aws-sdk/client-ec2'
import { STSClient, AssumeRoleCommand } from '@aws-sdk/client-sts'

async function getClientForAccount(accountId: string, region: string): Promise<EC2Client> {
  const sts = new STSClient({})
  const assumed = await sts.send(new AssumeRoleCommand({
    RoleArn: `arn:aws:iam::${accountId}:role/FinOpsSchedulerRole`,
    RoleSessionName: 'finops-scheduler',
  }))

  return new EC2Client({
    region,
    credentials: {
      accessKeyId: assumed.Credentials!.AccessKeyId!,
      secretAccessKey: assumed.Credentials!.SecretAccessKey!,
      sessionToken: assumed.Credentials!.SessionToken,
    },
  })
}

export async function stopInstances(accountId: string, region: string, instanceIds: string[]) {
  const client = await getClientForAccount(accountId, region)
  return client.send(new StopInstancesCommand({ InstanceIds: instanceIds }))
}

export async function startInstances(accountId: string, region: string, instanceIds: string[]) {
  const client = await getClientForAccount(accountId, region)
  return client.send(new StartInstancesCommand({ InstanceIds: instanceIds }))
}

export async function describeInstances(accountId: string, region: string) {
  const client = await getClientForAccount(accountId, region)
  return client.send(new DescribeInstancesCommand({}))
}

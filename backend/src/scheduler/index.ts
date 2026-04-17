import { schedule, ScheduledTask } from 'node-cron'

export interface ScheduleRule {
  id: string
  accountId: string
  resourceType: 'ec2' | 'rds' | 'eks'
  resourceIds: string[]
  stopCron: string
  startCron: string
  timezone: string
  enabled: boolean
}

export class EnvironmentScheduler {
  private rules: ScheduleRule[] = []
  private tasks: Map<string, ScheduledTask[]> = new Map()

  addRule(rule: ScheduleRule) {
    this.rules.push(rule)
    this.scheduleRule(rule)
  }

  private scheduleRule(rule: ScheduleRule) {
    if (!rule.enabled) return

    const stopTask = schedule(rule.stopCron, async () => {
      console.log(`Stopping ${rule.resourceType} resources: ${rule.resourceIds.join(', ')}`)
      // TODO: call AWS SDK to stop resources
    }, { timezone: rule.timezone })

    const startTask = schedule(rule.startCron, async () => {
      console.log(`Starting ${rule.resourceType} resources: ${rule.resourceIds.join(', ')}`)
      // TODO: call AWS SDK to start resources
    }, { timezone: rule.timezone })

    this.tasks.set(rule.id, [stopTask, startTask])
  }

  removeRule(ruleId: string) {
    const tasks = this.tasks.get(ruleId)
    tasks?.forEach(t => t.destroy())
    this.tasks.delete(ruleId)
    this.rules = this.rules.filter(r => r.id !== ruleId)
  }
}
